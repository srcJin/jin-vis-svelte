<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { computePosition, autoPlacement, offset } from "@floating-ui/dom";
  import { scaleSqrt } from "d3-scale";

  export let commits = []; // Input prop
  export let selectedCommits = []; // Bindable prop

  console.log("scatterplot commits=", commits)
  console.log("scatterplot selectedCommits=", selectedCommits)

  let cursor = { x: 0, y: 0 };

  let hasSelection;
  $: hasSelection = selectedCommits.length > 0;

  let commitTooltip;

  let tooltipPosition = { x: 0, y: 0 };

  let tooltipVisible = false;

  let rScale;
  let xScale;
  let yScale;


  let width = 1000;
  let height = 600;
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

  let totalLinesExtent
  // console.log("commits=", commits);
  function isCommitSelected(commit) {
    return selectedCommits.includes(commit);
  }

  onMount(() => {
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

    rScale = d3.scaleSqrt().range([2, 30]);
  });

  $: if (commits.length > 0) {
    xScale = d3.scaleTime()
        .domain(d3.extent(commits, (d) => new Date(d.datetime)))
        .range([usableArea.left, usableArea.right])
        .nice();

    yScale = d3.scaleLinear()
        .domain([0, 24])
        .range([usableArea.bottom, usableArea.top])
        .nice();
}



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
    } else if (
      evt.type === "click" ||
      (evt.type === "keyup" && evt.key === "Enter")
    ) {
      // If the user clicks or presses "Enter" on the dot, update selectedCommits
      selectedCommits = [commits[index]]; // Overwrite selectedCommits with the commit at the given index
    }
  }

  // Step 5.1：Setting up the brush
  let svg;

  $: {
    d3.select(svg).call(d3.brush().on("start brush end", brushed));

    // Raise all circle elements above the brush selection area
    d3.select(svg).selectAll(".dots, .overlay ~ *").raise();
  }

  function brushed(evt) {
    let brushSelection = evt.selection;
    selectedCommits = !brushSelection
      ? []
      : commits.filter((commit) => {
          let min = { x: brushSelection[0][0], y: brushSelection[0][1] };
          let max = { x: brushSelection[1][0], y: brushSelection[1][1] };
          let x = xScale(commit.date);
          let y = yScale(commit.hourFrac);

          return x >= min.x && x <= max.x && y >= min.y && y <= max.y;
        });
  }

    // Calculate extents and scale for circle radii
    $: if (commits.length > 0) {
    // Recompute scale whenever `commits` changes
    totalLinesExtent = d3.extent(commits, (d) => d.totalLines);
    rScale.domain(totalLinesExtent).range([2, 30]);
    xScale.domain(d3.extent(commits, (d) => new Date(d.datetime))).nice();
    yScale.domain([0, 24]).nice(); // Confirm this reflects actual data
    
    console.log("Recomputed scales with updated commits");
}

</script>

<svg viewBox="0 0 {width} {height}" bind:this={svg}>
  <g transform="translate(0, {usableArea.bottom})" bind:this={xAxis}></g>
  <g transform="translate({usableArea.left}, 0)" bind:this={yAxis}></g>

  {console.log("scatterplot commits=", commits)}

  <g class="dots">
    {console.log("Rendering commits for circles:", commits)}
    {#each commits as commit, index (commit.id)}
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
        on:click={(evt) => dotInteraction(index, evt)}
        on:keyup={(evt) => dotInteraction(index, evt)}
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

<style>
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

    @starting-style {
      r: 0;
    }
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
</style>
