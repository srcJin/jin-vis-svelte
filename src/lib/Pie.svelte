<script>
  import * as d3 from "d3";

  // Data for the pie chart


  // Create the arc generator for the pie chart
  let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

  // Calculate start and end angles for each slice
  // disable sorting in the pie by adding .sort(null) after the call to d3.pie()
  // to avoid out of sync with our data
  let sliceGenerator = d3.pie().value(d => d.value).sort(null);



  
  // Colors for each slice, use the schemePaired color scale

  export let colors = d3.scaleOrdinal(d3.schemeTableau10);

  export let data = [];
  let pieData;

  $: {
  pieData = d3.sort(data, d => d.label);
  pieData = data.map(d => ({...d}));
  let arcData = sliceGenerator(pieData);
  let arcs = arcData.map((d) => arcGenerator(d));
  pieData = pieData.map((d, i) => ({...d, ...arcData[i], arc: arcs[i]}));
  };


  // We need to make them reactive by separating the variable declarations from the value calculations and using the $: prefix on the latter.


  // Generate the arc paths

  export let selectedIndex = -1;

  function toggleWedge(index, event) {
    if (!event.key || event.key === "Enter") {
      selectedIndex = index;
    }
  }
</script>

<div class="container">
  <svg viewBox="-50 -50 100 100">
    {#each pieData as d, index}
      <path
        d={d.arc}
        fill={colors(d.label ?? d.label)}
        class:selected={selectedIndex === index}
        tabindex="0"
        role="button"
        aria-label={`Select ${d.arc.label} slice`}
        on:click={(event) => toggleWedge(index, event)}
        on:keyup={(event) => toggleWedge(index, event)}
        on:keydown={(event) => handleKeydown(event, index)}
        style="cursor: pointer;
        --start-angle: {d.arc?.startAngle}rad;
	--end-angle: {d.arc?.endAngle}rad;"
      />
    {/each}
  </svg>
  <ul class="legend">
    {#each pieData as d, index}
      <li
        style="--color: {colors(d.label)}"
        class:selected={selectedIndex === index}
      >
        <span class="swatch"></span>
        {d.label} <em>({d.value})</em>
      </li>
    {/each}
  </ul>
</div>

<style>
  svg {
    max-width: 20em;
    margin-block: 2em;

    /* Do not clip shapes outside the viewBox */
    overflow: visible;
  }

  svg:has(path:hover) {
    path:not(:hover) {
      opacity: 50%;
    }
  }

  svg:has(path:hover, path:focus-visible) {
    path:not(:hover, :focus-visible) {
      opacity: 50%;
    }
  }

  path {
    transition: 300ms;
    cursor: pointer;
    outline: none;
    --angle: calc(var(--end-angle) - var(--start-angle));
    --mid-angle: calc(var(--start-angle) + var(--angle) / 2);

    &.selected {
      transform: rotate(var(--mid-angle)) translateY(-6px) scale(1.1)
        rotate(calc(-1 * var(--mid-angle)));
    }

    transform: rotate(var(--mid-angle)) translateY(0)
      rotate(calc(-1 * var(--mid-angle)));
  }

  .container {
    display: flex;
    gap: 1em;
    justify-items: center;
  }

  .legend {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
    gap: 15px; /* Adjust as necessary */
    margin: 20px; /* Outer margin */
    padding: 10px; /* Inner padding */
    border: 1px solid #ccc; /* Border around the legend */
  }

  .legend li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .legend .swatch {
    width: 20px;
    height: 20px;
    background-color: var(--color);
    border-radius: 50%;
    display: inline-block;
  }

  .selected {
    --color: oklch(60% 45% 0) !important;
    &:is(path) {
      fill: var(--color);
    }
  }
</style>
