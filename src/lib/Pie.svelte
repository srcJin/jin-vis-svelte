<script>
  import * as d3 from "d3";

  // Data for the pie chart

  export let data = [];
  // Colors for each slice, use the schemePaired color scale
  let colors = d3.scaleOrdinal(d3.schemeTableau10);

  // Create the arc generator for the pie chart
  let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

  // Calculate start and end angles for each slice
  let sliceGenerator = d3.pie().value((d) => d.value);

  // We need to make them reactive by separating the variable declarations from the value calculations and using the $: prefix on the latter.

  $: arcData = sliceGenerator(data);
  $: arcs = arcData.map((d) => arcGenerator(d));
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
    {#each data as d, index}
      <path
        d={arcs[index]}
        fill={colors(d.label)}
        class:selected={selectedIndex === index}
        tabindex="0"
        role="button"
        aria-label={`Select ${data[index].label} slice`}
        on:click={(event) => toggleWedge(index, event)}
        on:keyup={(event) => toggleWedge(index, event)}
        on:keydown={(event) => handleKeydown(event, index)}
        style="cursor: pointer;
        --start-angle: {arcData[index]?.startAngle}rad;
	--end-angle: {arcData[index]?.endAngle}rad;"
      />
    {/each}
  </svg>
  <ul class="legend">
    {#each data as d, index}
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
