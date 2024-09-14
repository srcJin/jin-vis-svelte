<script>
	import * as d3 from 'd3';

	export let data = [];
	let pieData;

	let arcData;
	let arcs;
	export let colors = d3.scaleOrdinal(d3.schemeTableau10);
	let wedges = {};
	let oldData = [];
	export let transitionDuration = 3000; // in ms


	function transitionArcs() {
		let wedgeElements = Object.values(wedges);

		d3.selectAll(wedgeElements).transition("arc")
			.duration(transitionDuration)
			.styleTween("d", function (_, index) {
			let wedge = this;
			let label = Object.keys(wedges)[index];
			let transition = transitionArc(wedge, label);
			return transition?.interpolator;
			});
	}

	function sameArc(d, d_old) {
  		// Check for falsy values (null, undefined)
  		if (!d && !d_old) return true;

  		// If both are defined, check if startAngle and endAngle are the same
  		return d && d_old && d.startAngle === d_old.startAngle && d.endAngle === d_old.endAngle;
	}

	function transitionArc (wedge, label) {
		label ??= Object.entries(wedges).find(([label, w]) => w === wedge)[0];
		let d = pieData.find(d => d.label === label);
		let d_old = oldData.find(d => d.label === label);
		// if (!d || !d_old) {
		// 	return;
		// }
		if (sameArc(d_old, d)) {
			return null;
		}

		// Calculations that will only be done once per element go here
		let from = d_old ? {...d_old} : getEmptyArc(label, oldData);
		let to = d ? {...d} : getEmptyArc(label, pieData);
		console.log(label, from, to);
		let angleInterpolator = d3.interpolate(from, to);
		let interpolator = t => `path("${ arcGenerator(angleInterpolator(t)) }")`;
		// Later, when creating the object for transition, add the 'type' property
		let type = d ? d_old ? "update" : "in" : "out";
		return {d, d_old, from, to, interpolator, type};
	}


	function getEmptyArc (label, data = pieData) {
		// Union of old and new labels in the order they appear
		let labels = d3.sort(new Set([...oldData, ...pieData].map(d => d.label)));
		let labelIndex = labels.indexOf(label);
		let sibling;
		for (let i = labelIndex - 1; i >= 0; i--) {
			sibling = data.find(d => d.label === labels[i]);
			if (sibling) {
				break;
			}
		}

		let angle = sibling?.endAngle ?? 0;
		console.log("HERE", angle);
		return {startAngle: angle, endAngle: angle};
	}

	let sliceGenerator = d3.pie().value(d => d.value).sort(null);

	$: {
		// pieData = data.map(d => ({...d}));
		oldData = pieData;
		pieData = d3.sort(data, d => d.label);
		arcData = sliceGenerator(pieData);
		arcs = arcData.map(d => arcGenerator(d));
		pieData = pieData.map((d, i) => ({...d, ...arcData[i], arc: arcs[i]}));
		transitionArcs();
	}

	// let total = 0;
	// let colors = ['gold', 'purple'];
	// let colors = d3.scaleOrdinal(d3.schemeTableau10);

	let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

	export let selectedIndex = -1;

	function toggleWedge (index, event) {
		if (!event.key || event.key === "Enter") {
			selectedIndex = selectedIndex===index?-1:index
		}
	}

	function arc (wedge) {
		// Calculations that will only be done once per element go here
		let transition = transitionArc(wedge);
		if (!transition) {
			return;
		}
		let {d, d_old, from, to, interpolator, type} = transition;
		return {
			duration: transitionDuration,
			easing: d3.easeCubic,
			css: (t, u) => {
				// t is a number between 0 and 1 that represents the transition progress; u is 1 - t
				// TODO return CSS to be applied for the current t as a string
				return "d: " + interpolator(transition.type === "out" ? u : t)
			}
		}
	}

	
	// for (let d of data) {
	// 	total += d; 
	// }

	// let angle = 0;
	// // let arcData = [];

	// for (let d of data) {
	// 	let endAngle = angle + (d / total) * 2 * Math.PI;
	// 	arcData.push({ startAngle: angle, endAngle });
	// 	angle = endAngle;
	// }

	// let arcs = arcData.map(d => arcGenerator(d));

</script>

<div class="container">
	<svg viewBox="-50 -50 100 100">
		{#each pieData as d, index (d.label)}
			<path d={d.arc} style="
			--start-angle: { d.startAngle }rad;
			--end-angle: { d.endAngle }rad;" fill={colors(d.label)}
				role="button"
                tabindex="0"
                aria-label="A clickable pie chart element"
				class:selected={selectedIndex === index}
				on:click={e => toggleWedge(index, e)}
                on:keyup={e => toggleWedge(index, e)}
				bind:this={ wedges[d.label] } 
				transition:arc/>
		{/each}
	</svg>

	<ul class="legend">
		{#each pieData as d, index}
			<li style="--color: { colors(d.label) }" class:selected={selectedIndex === index}>
				<span class="swatch"></span>
				{d.label} <em>({d.value})</em>
			</li>
		{/each}
	</ul>
</div>

<style>

	.container {
	  display: grid;
	  grid-template-columns: minmax(300px, auto) 1fr; /* Ensures SVG has space and legend takes up the rest */
	  grid-auto-flow: column; /* Places items in columns, going to new rows as necessary */
	  overflow-x: auto; /* Allows scrolling if items can't fit */
	}


	.legend {
 		display: grid;
  		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Adjust the minmax value as needed */
  		gap: 0.5rem;
	}



    svg {
		min-width: 300px;
		max-width: 20em;
		margin-block: 2em;

		/* Do not clip shapes outside the viewBox */
		overflow: visible;
	}


	.legend li {
        display: flex;
        align-items: center;
        margin-bottom: 0.5em;
		margin-right: 1em;
    }

	.legend .swatch {
        width: 1em;
        height: 1em;
        border-radius: 50%;
        margin-right: 0.5em;
        transition: 300ms;
		transition-property: transform, opacity, fill;
        background-color: var(--color);
    }

	svg:has(path:hover, path:focus-visible) {
		path:not(:hover, :focus-visible) {
			opacity: 50%;
	}
}

	path {
		transform: rotate(var(--mid-angle))
	           	translateY(0)
	           	rotate(calc(-1 * var(--mid-angle)));
		cursor: pointer;
		transition: 300ms;
		transition-property: transform, opacity, fill;
		outline: none;
		--angle: calc(var(--end-angle) - var(--start-angle));
		--mid-angle: calc(var(--start-angle) + var(--angle) / 2);
		--angle: calc(var(--end-angle) - var(--start-angle));
		--mid-angle: calc(var(--start-angle) + var(--angle) / 2);
		fill-opacity: 75%;

		&.selected {
		transform: rotate(var(--mid-angle))
		           translateY(-6px) scale(1.1)
		           rotate(calc(-1 * var(--mid-angle)));
	}
	}

	.selected {
		--color: oklch(44.93% 0.143 136) !important;
		transition: 300ms;
		transition-property: transform, opacity, fill;
		&:is(path) {
			fill: var(--color);
			fill: var(--color);
	}
	}
</style>