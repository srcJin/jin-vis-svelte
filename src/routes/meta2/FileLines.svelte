<script>
 import * as d3 from "d3";
 import {scale} from 'svelte/transition'

  let files = [];
  export let lines = [];
  $: {
    files = d3
      .groups(lines, (d) => d.file)
      .map(([name, lines]) => {
        return { name, lines };
      });
  }
  // Step 2.3: Sorting files by number of lines
  files = d3.sort(files, d => -d.lines.length);

  let colors = d3.scaleOrdinal(d3.schemeTableau10);

  
</script>

<dl class="files">
  {#each files as file (file.name)}
    <div>
      <dt>
        <code>{file.name}</code>
      </dt>
        <dd>
      {#each file.lines as line (line.line) }
      <div class="line" style="--color: { colors(line.type) }" in:scale={{duration: 300, delay: 0}}></div>
      {/each}
      </dd>
    </div>
  {/each}
</dl>

<style>
    /* Apply a grid layout to the <dl> */
    .files {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
  
    /* Ensure that the <div> containers align properly in the grid */
    .files > div {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: subgrid;
    }
  
    /* <dt> elements occupy the first column */
    dt {
      grid-column: 1;
      font-weight: bold;
    }
  
    /* <dd> elements occupy the second column */
    dd {
      grid-column: 2;
    }
  
    /* Ensure consistent padding and spacing for the description terms and details */
    dt, dd {
      padding: 5px 0;
    }
    .line {
	display: flex;
	width: .5em;
    height: .5em;
	aspect-ratio: 1;
	background:  var(--color);
	border-radius: 50%;
    transform-origin: center; /* Ensures scaling happens centrally */
}

dd {
	grid-column: 2;
	display: flex;
	flex-wrap: wrap;
	align-items: start;
	align-content: start;
	gap: .15em;
	padding-top: .6em;
	margin-left: 0;
}

  </style>