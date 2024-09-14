<script>
  import * as d3 from "d3";

  // Data for the pie chart

  // Create the arc generator for the pie chart
  let arcData;
  let arcs;

  let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
  // Calculate start and end angles for each slice
  // disable sorting in the pie by adding .sort(null) after the call to d3.pie()
  // to avoid out of sync with our data
  let sliceGenerator = d3
    .pie()
    .value((d) => d.value)
    .sort(null);

  // Colors for each slice, use the schemePaired color scale
  export let colors = d3.scaleOrdinal(d3.schemeTableau10);
  export let data = [];

  let wedges = {}; // To store references to path elements
  let pieData = [];
  let oldData = [];
  let transitionDuration = 1000; // Duration in milliseconds



  $: {
    // pieData = data.map(d => ({...d}));
    oldData = pieData;
    pieData = d3.sort(data, (d) => d.label);
    arcData = sliceGenerator(pieData);
    arcs = arcData.map((d) => arcGenerator(d));
    pieData = pieData.map((d, i) => ({ ...d, ...arcData[i], arc: arcs[i] }));
    transitionArcs();
  }

  // Generate the arc paths
  export let selectedIndex = -1;

  function toggleWedge(index, event) {
    if (!event.key || event.key === "Enter") {
      selectedIndex = index;
    }
  }

  // Function to handle arc transitions
  function transitionArcs() {
    let wedgeElements = Object.values(wedges);

    d3.selectAll(wedgeElements)
      .transition("arc")
      .duration(transitionDuration)
      // .ease(d3.easeLinear) // Apply linear easing to the transition
      .styleTween("d", function (_, index) {
        let wedge = this;
        let label = Object.keys(wedges)[index];
        let transition = transitionArc(wedge, label);
        return transition?.interpolator;
      });
  }

  function sameArc(d, d_old) {
    if (!d && !d_old) return true;

    return (
      d &&
      d_old &&
      d.startAngle === d_old.startAngle &&
      d.endAngle === d_old.endAngle
    );
  }

  function transitionArc(wedge, label) {
    label ??= Object.entries(wedges).find(([label, w]) => w === wedge)[0];
    let d = pieData.find((d) => d.label === label);
    let d_old = oldData.find((d) => d.label === label);

    if (sameArc(d_old, d)) {
      return null;
    }
    let from = d_old ? { ...d_old } : getEmptyArc(label, oldData);
    let to = d ? { ...d } : getEmptyArc(label, pieData);
    let angleInterpolator = d3.interpolate(from, to);
    let interpolator = (t) => `path("${arcGenerator(angleInterpolator(t))}")`;
    let type = d ? (d_old ? "update" : "in") : "out";
    return { d, d_old, from, to, interpolator, type };
  }

  function getEmptyArc(label, data = pieData) {
    let labels = d3.sort(new Set([...oldData, ...pieData].map((d) => d.label)));
    let labelIndex = labels.indexOf(label);
    let sibling;
    for (let i = labelIndex - 1; i >= 0; i--) {
      sibling = data.find((d) => d.label === labels[i]);
      if (sibling) {
        break;
      }
    }

    let angle = sibling?.endAngle ?? 0;
    return { startAngle: angle, endAngle: angle };
  }


  function arc(wedge) {
    let transition = transitionArc(wedge);
    if (!transition) {
      return;
    }
    let { d, d_old, from, to, interpolator, type } = transition;
    return {
      duration: transitionDuration,
      easing: d3.easeCubic,
      css: (t, u) => {
        return "d: " + interpolator(transition.type === "out" ? u : t);
      },
    };
  }
</script>

<div class="container">
  <svg viewBox="-50 -50 100 100">
    {#each pieData as d, index (d.data.label)}
      <path
        bind:this={wedges[d.data.label]}
        d={d.arc}
        fill={colors(d.label ?? d.label)}
        class:selected={selectedIndex === index}
        tabindex="0"
        role="button"
        aria-label={`Select ${d.arc.label} slice`}
        on:click={(event) => toggleWedge(index, event)}
        on:keyup={(event) => toggleWedge(index, event)}
        on:keydown={(event) => handleKeydown(event, index)}
        style="--start-angle: {d.startAngle}rad; --end-angle: {d.endAngle}rad;"
        transition:arc
      />
    {/each}
  </svg>
  <ul class="legend">
    {#each pieData as d, index (d.label)}
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
    transform: rotate(var(--mid-angle))
	           	translateY(0)
	           	rotate(calc(-1 * var(--mid-angle)));
    transition-property: transform, opacity, fill;
    cursor: pointer;
    outline: none;
    --angle: calc(var(--end-angle) - var(--start-angle));
    --mid-angle: calc(var(--start-angle) + var(--angle) / 2);

		&.selected {
		transform: rotate(var(--mid-angle))
		           translateY(-6px) scale(1.1)
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
    transition: 300ms;
		transition-property: transform, opacity, fill;
    &:is(path) {
      fill: var(--color);
    }
  }
</style>
