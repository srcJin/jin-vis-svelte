<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
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

    console.log("commits=", commits);

    xScale = d3
      .scaleTime()
      .domain(d3.extent(commits, (d) => d.datetime))
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
		d3.axisLeft(yScale)
		  .tickFormat("")
		  .tickSize(-usableArea.width)
	);
  }
</script>

<h1>Meta</h1>
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

<svg viewBox="0 0 {width} {height}">
  <g transform="translate(0, {usableArea.bottom})" bind:this={xAxis}></g>
  <g transform="translate({usableArea.left}, 0)" bind:this={yAxis}></g>

  <g class="dots">
    {#each commits as commit}
      <circle
        cx={xScale(commit.datetime)}
        cy={yScale(commit.hourFrac)}
        r="5"
        fill="steelblue"
      />
    {/each}
  </g>
  <g class="gridlines" transform="translate({usableArea.left}, 0)" bind:this={yAxisGridlines} />


</svg>

<style>
  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 20px; /* Adjust the gap between the columns */
    text-align: center;
    background: #f9f9f9; /* Light grey background */
    padding: 20px;
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    font-family: Arial, sans-serif; /* Font style */
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
	stroke-opacity: .2;
}
</style>
