<script>
import * as d3 from "d3";
import { onMount } from "svelte";
let data = [];
let commits = [];
let stats = {};



onMount(async () => {
    data = await d3.csv("loc.csv", row => ({
        ...row,
        line: +row.line,
        depth: +row.depth,
        length: +row.length,
        date: new Date(row.date + "T00:00" + row.timezone),
        datetime: new Date(row.datetime)
    }));

    // Calculate aggregate stats
    stats = {
        totalLOC: data.reduce((acc, d) => acc + d.line, 0),
        totalFiles: new Set(data.map(d => d.file)).size,
        maxFileLength: d3.max(d3.rollups(data, v => v.length, d => d.file)),
        avgFileLength: d3.mean(d3.rollups(data, v => v.length, d => d.file)),
        longestLine: d3.max(data, d => d.length),
        deepestLine: d3.max(data, d => d.depth)
    };


    // Now process the commits inside onMount or as a reactive statement
    commits = d3.groups(data, d => d.commit).map(([commit, lines]) => {
        let first = lines[0];
        let {author, date, time, timezone, datetime} = first;
        let ret = {
            id: commit,
            url: "https://github.com/srcJin/jin-vis-svelte/commit/" + commit,
            author, date, time, timezone, datetime,
            hourFrac: datetime.getHours() + datetime.getMinutes() / 60,
            totalLines: lines.length
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
});


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
</dl>

<style>
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 20px; /* Adjust the gap between the columns */
      text-align: center;
      background: #f9f9f9; /* Light grey background */
      padding: 20px;
      border-radius: 8px; /* Rounded corners */
      box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Subtle shadow */
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
  </style>
  