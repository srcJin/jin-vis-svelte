<script>
 import * as d3 from "d3";
  let files = [];
  export let lines = [];
  $: {
    files = d3
      .groups(lines, (d) => d.file)
      .map(([name, lines]) => {
        return { name, lines };
      });
  }
</script>

<dl class="files">
  {#each files as file (file.name)}
    <div>
      <dt>
        <code>{file.name}</code>
      </dt>
      <dd>{file.lines.length} lines</dd>
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
  </style>