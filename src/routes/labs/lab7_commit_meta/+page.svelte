<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { computePosition, autoPlacement, offset } from "@floating-ui/dom";
  import Pie from "$lib/Pie.svelte";

  let data = [];
  let commits = [];
  let stats = {};

  let workByPeriod = [];
  let maxPeriod = "";

  // Reactively Calculate work by periods
  $: workByPeriod = d3.rollups(
    data,
    (v) => v.length,
    (d) => d.datetime.toLocaleString("en", { dayPeriod: "short" })
  );

  // Find the period with the most work
  $: maxPeriod = d3.greatest(workByPeriod, ([, count]) => count)?.[0];

  let width = 1000;
  let height = 600;
  let xScale, yScale; // Define scales at the top level
  let margin = { top: 10, right: 10, bottom: 30, left: 20 };

  let usableArea = {
    top: margin.top,
    right: width - margin.right,
    bottom: height - margin.bottom,
    left: margin.left,
  };
  usableArea.width = usableArea.right - usableArea.left;
  usableArea.height = usableArea.bottom - usableArea.top;

  let xAxis, yAxis, yAxisGridlines;

  let hoveredIndex = -1;
  $: hoveredCommit = commits[hoveredIndex] ?? hoveredCommit ?? {};

  let cursor = { x: 0, y: 0 };

  let commitTooltip;

  let tooltipPosition = { x: 0, y: 0 };

  let tooltipVisible = false;

  let rScale;

  // This function is called for mouse and focus events on the dots
  async function dotInteraction(index, evt) {
    const hoveredDot = evt.currentTarget; // Using currentTarget to ensure we get the circle element

    if (evt.type === "mouseenter" || evt.type === "focus") {
      hoveredIndex = index; // Set the hovered index for reactive updates
      tooltipVisible = true; // Show the tooltip

      try {
        // Compute position of the tooltip
        const { x, y } = await computePosition(hoveredDot, commitTooltip, {
          strategy: "fixed",
          middleware: [
            offset(5), // Adds a little space between the dot and the tooltip
            autoPlacement(), // Automatically places the tooltip if space is limited
          ],
        });

        tooltipPosition = { x, y }; // Update the tooltip position
      } catch (error) {
        console.error("Error computing tooltip position:", error);
      }
    } else if (evt.type === "mouseleave" || evt.type === "blur") {
      hoveredIndex = -1; // Reset the hovered index
      tooltipVisible = false; // Hide the tooltip
    }
  }

  onMount(async () => {
    data = await d3.csv("loc.csv", (row) => ({
      ...row,
      line: +row.line,
      depth: +row.depth,
      length: +row.length,
      date: new Date(row.date + "T00:00" + row.timezone),
      datetime: new Date(row.datetime),
    }));

    // Calculate aggregate stats
    stats = {
      totalLOC: data.reduce((acc, d) => acc + d.line, 0),
      totalFiles: new Set(data.map((d) => d.file)).size,
      maxFileLength: d3.max(
        d3.rollups(
          data,
          (v) => v.length,
          (d) => d.file
        )
      ),
      avgFileLength: d3.mean(
        d3.rollups(
          data,
          (v) => v.length,
          (d) => d.file
        )
      ),
      longestLine: d3.max(data, (d) => d.length),
      deepestLine: d3.max(data, (d) => d.depth),
    };

    // Calculate extents and scale for circle radii
    const totalLinesExtent = d3.extent(data, (d) => d.line);
    rScale = d3
      .scaleSqrt() // step 4.2 use square root scale
      .domain(totalLinesExtent)
      .range([2, 30]); // Min and max radii

    // Now process the commits inside onMount or as a reactive statement
    commits = d3
      .groups(data, (d) => d.commit)
      .map(([commit, lines]) => {
        let first = lines[0];
        let { author, date, time, timezone, datetime } = first;
        let ret = {
          id: commit,
          url: "https://github.com/srcJin/jin-vis-svelte/commit/" + commit,
          author,
          date,
          time,
          timezone,
          datetime,
          hourFrac: datetime.getHours() + datetime.getMinutes() / 60,
          totalLines: lines.length,
        };

        // Define non-enumerable property 'lines'
        Object.defineProperty(ret, "lines", {
          value: lines,
          configurable: true,
          writable: true,
          enumerable: false,
        });

        return ret;
      });

    // Sort the commits data by totalLines in descending order so smaller dots are painted last and are less likely to be obscured by larger ones
    commits = d3.sort(commits, (d) => -d.totalLines);

    // console.log("commits=", commits);

    xScale = d3
      .scaleTime()
      .domain(d3.extent(commits, (d) => new Date(d.date))) // Use only the date part
      .range([0, width])
      .nice();

    yScale = d3
      .scaleLinear()
      .domain([0, 24]) // Assuming hourFrac is from 0 to 24
      .range([height, 0])
      .nice();
  });

  // Reactive updates for axes
  $: if (xAxis && yAxis) {
    d3.select(xAxis).call(d3.axisBottom(xScale));
    d3.select(yAxis).call(
      d3
        .axisLeft(yScale)
        .tickFormat((d) => String(d % 24).padStart(2, "0") + ":00")
    );
    d3.select(yAxisGridlines).call(
      d3.axisLeft(yScale).tickFormat("").tickSize(-usableArea.width)
    );
  }

  // Step 5.1：Setting up the brush
  let svg;
  let brushSelection = null; // A reactive variable to store brush selection

  $: {
    d3.select(svg).call(d3.brush().on("start brush end", brushed));

    // Raise all circle elements above the brush selection area
    d3.select(svg).selectAll(".dots, .overlay ~ *").raise();
  }

  function brushed(evt) {
    brushSelection = evt.selection; // Capture the current selection from the brush event
    // console.log(evt);
    console.log("brushSelection=", brushSelection);
    // Ensure the data is bound correctly
    d3.selectAll("circle")
      .data(commits)
      .classed("selected", (d) => isCommitSelected(d)); // Update class based on selection
  }

  function isCommitSelected(commit) {
    if (!commit || !brushSelection) {
      return false; // Safeguard against undefined commit or brushSelection
    }
    let min = { x: brushSelection[0][0], y: brushSelection[0][1] };
    let max = { x: brushSelection[1][0], y: brushSelection[1][1] };
    console.log("commit=", commit);
    let x = xScale(commit.date);
    let y = yScale(commit.hourFrac);
    let selected = x >= min.x && x <= max.x && y >= min.y && y <= max.y;
    // console.log("selected=", selected);
    return selected;
  }

  $: selectedCommits = brushSelection ? commits.filter(isCommitSelected) : [];
  $: hasSelection = brushSelection && selectedCommits.length > 0;
  $: selectedLines = (hasSelection ? selectedCommits : commits).flatMap(
    (d) => d.lines
  );
  // Calculate total lines in the selectedLines dataset
  $: totalCodeLines = d3.sum(selectedLines, (d) => d.length); // Sum of all lines in selectedLines

  console.log("selectedLines=", selectedLines);

  // Then, we can use it to calculate the number of edited lines per language using d3.rollup() (or d3.rollups()), which we discussed earlier. Assign the result to a new reactive variable called languageBreakdown.
  $: languageBreakdown = d3.rollups(
    selectedLines,
    (v) => d3.sum(v, (d) => d.length), // Summing the lengths (edited lines)
    (d) => d.type // Grouping by the 'type' (language)
  );

  console.log("languageBreakdown=", languageBreakdown);

  const d3Formatter = d3.format(".1~%");
</script>

<h1 class="big-title">Lab 7: Visualizing quantitative data with D3</h1>

<dl class="stats">
  <dt>Commits</dt>
  <dd>{commits.length}</dd>
  <dt>Files</dt>
  <dd>{stats.totalFiles}</dd>
  <dt>Total LOC</dt>
  <dd>{stats.totalLOC}</dd>
  <dt>Max File Length</dt>
  <dd>{stats.maxFileLength}</dd>
  <dt>Longest Line</dt>
  <dd>{stats.longestLine}</dd>
  <dt>Deepest Line</dt>
  <dd>{stats.deepestLine}</dd>
  <dt>Most Active Period</dt>
  <dd>{maxPeriod}</dd>
</dl>

<div class="container">
  <svg viewBox="0 0 {width} {height}" bind:this={svg}>
    <g transform="translate(0, {usableArea.bottom})" bind:this={xAxis}></g>
    <g transform="translate({usableArea.left}, 0)" bind:this={yAxis}></g>

    <g class="dots">
      {#each commits as commit, index}
        <circle
          cx={xScale(commit.datetime)}
          cy={yScale(commit.hourFrac)}
          r={rScale(commit.totalLines)}
          fill="steelblue"
          fill-opacity={hoveredIndex === index ? 1 : 0.6}
          on:mouseenter={(evt) => dotInteraction(index, evt)}
          on:mouseleave={(evt) => dotInteraction(index, evt)}
          class:selected={isCommitSelected(commit)}
          data-commit={commit.id}
          data-index={index}
          data-bound="true"
          tabindex="0"
          aria-describedby="commit-tooltip"
          role="tooltip"
          aria-haspopup="true"
          on:focus={(evt) => dotInteraction(index, evt)}
          on:blur={(evt) => dotInteraction(index, evt)}
        />
      {/each}
    </g>
    <g
      class="gridlines"
      transform="translate({usableArea.left}, 0)"
      bind:this={yAxisGridlines}
    />
  </svg>

  <!-- {JSON.stringify(cursor, null, "\t")} -->
  <p>{hasSelection ? selectedCommits.length : "No"} commits selected</p>

  <!-- <p>Selected Lines</p>
  <p>{JSON.stringify(selectedLines)}</p>
  <p>Language Breakdown</p>
  <p>{JSON.stringify(languageBreakdown)}</p> -->
  <ul class="language-breakdown">
    {#each languageBreakdown as [language, lines]}
      <li>
        <strong>{language.toUpperCase()}</strong>
        <div>{lines} lines ({d3Formatter((lines / totalCodeLines)) })</div>
      </li>
    {/each}
  </ul>

  <Pie data={Array.from(languageBreakdown).map(([language, lines]) => ({label: language, value: lines}))} />

  <dl
    class="info"
    hidden={hoveredIndex === -1}
    bind:this={commitTooltip}
    style="left: {tooltipPosition.x}px; top: {tooltipPosition.y}px;"
  >
    <!-- {JSON.stringify(hoveredCommit)} -->
    <dt>Commit</dt>
    <dd><a href={hoveredCommit.url} target="_blank">{hoveredCommit.id}</a></dd>

    <dt>Date</dt>
    <dd>
      {hoveredCommit.datetime?.toLocaleString("en", { dateStyle: "full" })}
    </dd>

    <!-- Add: Time, author, lines edited -->
    <dt>Time</dt>
    <dd>
      {hoveredCommit.datetime?.toLocaleString("en", { timeStyle: "short" })}
    </dd>

    <dt>Author</dt>
    <dd>{hoveredCommit.author}</dd>

    <dt>Lines Edited</dt>
    <dd>{hoveredCommit.totalLines}</dd>
  </dl>



</div>

<style>
  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Four columns */
    gap: 10px; /* Space between grid items */
    background: #f9f9f9; /* Light grey background */
    padding: 20px;
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    font-family: Arial, sans-serif; /* Font style */
}

.stats dt, .stats dd {
    margin: 0; /* Removes default margin */
    padding: 5px 0; /* Adds padding on top and bottom */
}

.stats dt {
    grid-column: span 1; /* Title takes one column */
    text-align: center;
}

.stats dd {
    grid-column: span 1; /* Value takes one column directly below the title */
    text-align: center;
}

  dt {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin-bottom: 5px; /* Space between title and number */
  }

  dd {
    font-size: 20px;
    color: #666;
    margin: 0; /* Remove default margin */
  }


  .container {
    max-width: 800px; /* Limit the width of the container */
    margin: auto; /* Centering the container */
    padding-top: 50px; /* Space from the top */
  }

  svg {
    overflow: visible;
  }

  .gridlines {
    stroke-opacity: 0.2;
  }

  dl.info {
    position: absolute;
    background: white;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000; /* Make sure it's above other elements */

    transition-duration: 500ms;
    transition-property: opacity, visibility;

    &[hidden]:not(:hover, :focus-within) {
      opacity: 0;
      visibility: hidden;
    }
  }

  circle {
    transform-origin: center;
    transform-box: fill-box;
    transition: transform 200ms ease;
  }

  circle:hover {
    transform: scale(2); /* Increase size on hover */
    fill: darkblue; /* Optional: change color on hover */
  }

  circle.selected {
    fill: orange !important; /* Change the fill color for selected commits */
    stroke: black !important; /* Add a stroke to highlight selection */
    stroke-width: 2px !important;
  }

  @keyframes marching-ants {
    to {
      stroke-dashoffset: -8; /* 5 + 3 */
    }
  }

  svg :global(.selection) {
    fill-opacity: 10%;
    stroke: black;
    stroke-opacity: 70%;
    stroke-dasharray: 5 3;
    animation: marching-ants 2s linear infinite;
  }

  .language-breakdown {
    display: flex;
    justify-content: space-around; /* Space the items evenly across the container */
    padding: 0;
    list-style-type: none;
  }

  .language-breakdown li {
    text-align: center;
    font-family: Arial, sans-serif;
    margin: 0 20px;
  }

  .language-breakdown strong {
    display: block;
    font-size: 1.0rem;
    color: #808080; /* Grey color */
    letter-spacing: 0.05em;
  }

  .language-breakdown div {
    font-size: 1.0rem;
    color: #333;
  }
</style>
