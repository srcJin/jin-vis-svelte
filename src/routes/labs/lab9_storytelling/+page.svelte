<script>
  import { base } from "$app/paths";
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { computePosition, autoPlacement, offset } from "@floating-ui/dom";
  import Pie from "$lib/Pie.svelte";

  import CommitScatterplot from "./Scatterplot.svelte";
  import FileLines from "./FileLines.svelte";

  import Scrolly from "svelte-scrolly";

  let data = [];
  let commits = [];
  let stats = {};

  let workByPeriod = [];
  let maxPeriod = "";

  let languageBreakdown = [];
  let hasSelection;
  let selectedLines = [];
  let totalCodeLines = 0;
  let selectedCommits = [];


  // Reactively Calculate work by periods
  $: workByPeriod = d3.rollups(
    data,
    (v) => v.length,
    (d) => d.datetime.toLocaleString("en", { dayPeriod: "short" })
  );

  // Find the period with the most work
  $: maxPeriod = d3.greatest(workByPeriod, ([, count]) => count)?.[0];

  $: console.log("Updated commits in Scatterplot:", commits);

  let commitProgress = 100;
  let raceProgress = 100;

  let timeScale;
  let commitMaxTime;
  let raceMaxTime;
  const d3Formatter = d3.format(".1~%");

  $: timeScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.datetime))
        .range([0, 100]);

  $: commitMaxTime = timeScale.invert(commitProgress);
  $: raceMaxTime = timeScale.invert(raceProgress);


  let colors = d3.scaleOrdinal(d3.schemeTableau10);

  onMount(async () => {
    data = await d3.csv("/loc.csv", (row) => ({
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

    // Sort the commits data by totalLines in descending order so smaller dots are painted last and are less likely to be obscured by larger ones
    commits = d3.sort(commits, (d) => -d.totalLines);

    console.log("languageBreakdown=", languageBreakdown);

    console.log("commits before creating timeScale:", commits);
    const commitExtent = d3.extent(commits, (d) => d.datetime);
    console.log("commitExtent (min, max):", commitExtent);
    timeScale = d3
      .scaleTime()
      .domain(d3.extent(commits, (d) => d.datetime))
      .range([0, 100]);

    console.log("timeScale domain:", timeScale.domain());
    console.log("timeScale range:", timeScale.range());
  });


  // Calculate total lines in the selectedLines dataset
  $: totalCodeLines = d3.sum(selectedLines, (d) => d.length); // Sum of all lines in selectedLines

  console.log("selectedLines=", selectedLines);

  // Then, we can use it to calculate the number of edited lines per language using d3.rollup() (or d3.rollups()), which we discussed earlier. Assign the result to a new reactive variable called languageBreakdown.
  $: languageBreakdown = d3.rollups(
    selectedLines,
    (v) => d3.sum(v, (d) => d.length), // Summing the lengths (edited lines)
    (d) => d.type // Grouping by the 'type' (language)
  );

  $: filteredCommits = commits.filter((d) => d.datetime <= commitMaxTime);

  $: filteredLines = data.filter((d) => d.datetime <= commitMaxTime);


  $: if (timeScale) {
    console.log("commitProgress=", commitProgress);
    console.log("commits=", commits);
    commitMaxTime = timeScale.invert(commitProgress);
    console.log("commitMaxTime=", commitMaxTime);
    filteredCommits = commits.filter((d) => d.datetime <= commitMaxTime);
  }

  $: hasSelection = selectedCommits.length > 0;
  $: selectedLines = (hasSelection ? selectedCommits : filteredCommits).flatMap(d => d.lines);

  $: raceLines = data.filter(data => data.datetime <= raceMaxTime)
</script>

<svelte:head>
    <title>Meta</title>
</svelte:head>

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


<h2>The story behind my commits</h2>
<Scrolly bind:progress={commitProgress}>



  <div>
    
    {#each commits as commit, index}
      <p>
        On {commit.datetime.toLocaleString("en", {dateStyle: "full", timeStyle: "short"})},
        I made <a href="{commit.url}" target="_blank">
        {index > 0 ? 'a commit' : 'my first commit, and it was glorious'}
        </a>.
        I edited {commit.totalLines} lines across {d3.rollups(commit.lines, v => v.length, d => d.file).length} files.
      </p>
    {/each}
  </div>

  <svelte:fragment slot="viz">
    <label for="commit-slider">
      Filter by date and time:
      <input
        type="range"
        id="commit-slider"
        min="0"
        max="100"
        bind:value={commitProgress}
        style="flex: 1;"
      />
      <time>{commitMaxTime ? commitMaxTime.toLocaleString() : "Loading..."}</time>
    </label>
    <CommitScatterplot commits={filteredCommits} bind:selectedCommits={selectedCommits}/>
    <ul class="language-breakdown">
      {#each languageBreakdown as [language, lines]}
        <li>
          <strong>{language.toUpperCase()}</strong>
          <div>{lines} lines ({d3Formatter(lines / totalCodeLines)})</div>
        </li>
      {/each}
    </ul>
    <Pie data={Array.from(languageBreakdown).map(([language, lines]) => ({
      label: language,
      value: lines,
    }))}/>
  </svelte:fragment>
</Scrolly>

<h2>My commits in dots</h2>
<Scrolly bind:progress={raceProgress} --scrolly-layout="viz-first" --scrolly-viz-width="1.5fr">

  {#each commits as commit, index }
      <p>
          On {commit.datetime.toLocaleString("en", {dateStyle: "full", timeStyle: "short"})},
          I made <a href="{commit.url}" target="_blank">{ index > 0 ? 'another glorious commit' : 'my first commit, and it was glorious' }</a>.
          I edited {commit.totalLines} lines across { d3.rollups(commit.lines, D => D.length, d => d.file).length } files.
      </p>
  {/each}
  <svelte:fragment slot="viz">
      <FileLines lines={raceLines} colors={colors}/>
  </svelte:fragment>
</Scrolly>



<!-- <div class="container">
  <CommitScatterplot commits={filteredCommits} bind:selectedCommits />
  <Pie
    data={Array.from(languageBreakdown).map(([language, lines]) => ({
      label: language,
      value: lines,
    }))}
  />
  <ul>
    {#if filteredCommits.length > 0}
      {#each filteredCommits as commit}
        <li>
          Commit {commit.id} on {commit.datetime.toLocaleString()} with {commit.totalLines}
          lines edited
        </li>
      {/each}
    {:else}
      <li>No commits available for the selected date range.</li>
    {/if}
  </ul>
</div> -->

<style>
  :global(body) {
    max-width: min(120ch, 80vw);
  }

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
    font-size: 1rem;
    color: #808080; /* Grey color */
    letter-spacing: 0.05em;
  }

  .language-breakdown div {
    font-size: 1rem;
    color: #333;
  }

  @keyframes marching-ants {
    to {
      stroke-dashoffset: -8; /* 5 + 3 */
    }
  }
</style>
