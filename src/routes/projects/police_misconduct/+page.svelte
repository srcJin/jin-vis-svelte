<script>
  import { base } from "$app/paths";
  import * as d3 from "d3";
  // import data from "./example_data.js";
  //   import data from "/a4_data_small.js";
  //   import data from "/a4_data_full.js";

  import {onMount} from "svelte";

  let data;

  onMount(async () => {
    data = await fetch(base + "/a4_data_full.json").then((response) =>
      response.json()
    );

    async function renderChart(containerId) {
      const width = 1000;
      const height = 1000;

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const links = data.links.map((d) => Object.assign({}, d));
      const nodes = data.nodes.map((d) => Object.assign({}, d));

      // Sort nodes by total_abuse_count and select the top N
      const topNodesForLabels = nodes
        .sort((a, b) => b.total_abuse_count - a.total_abuse_count)
        .slice(0, 25); // Change 5 to however many labels you want

      // Reheat the simulation when drag starts, and fix the subject position.
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      // Update the subject (dragged node) position during drag.
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      // Restore the target alpha so the simulation cools after dragging ends.
      // Unfix the subject position now that it’s no longer being dragged.
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      // Create a simulation with several forces.
      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          d3.forceLink(links).id((d) => d.id)
        )
        .force("charge", d3.forceManyBody().strength(-800))
        .force("x", d3.forceX(width / 2).strength(0.5))
        .force("y", d3.forceY(height / 2).strength(0.5));

      const svg = d3
        .create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-1000, -1000, width * 3, height * 3])
        .attr(
          "style",
          "max-width: 100%; height: auto; border: 1px solid black;"
        );

      const link = svg
        .append("g")
        .attr("stroke", "#444")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", (d) => Math.sqrt(d.value));

      const ranks = [
        "Inspector",
        "Deputy Inspector",
        "Captain",
        "Lieutenant",
        "Sergeant",
        "Detective",
        "Police Officer",
      ];

      const colorScale = d3
        .scaleLinear()
        .domain([0, ranks.length - 1])
        .range(["#8B0000", "#FFE4E1"]) // Start with red, end with grey
        .interpolate(d3.interpolateRgb);

      const node = svg
        .append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.0)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", (d) => d.total_abuse_count)
        // Set the radius based on the 'size' property
        .attr("fill", (d) => {
          const index = ranks.indexOf(d.rank_incident); // Find the rank's index
          return colorScale(index); // Apply the color scale based on the index
        });

      const label = svg
        .append("g")
        .selectAll("text")
        .data(topNodesForLabels)
        .join("text")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y)
        // .text((d) => d.id) // Display the full_name or any other identifier
        .text(
          (d) => `From Precinct ${d.precinct}, ${d.total_abuse_count} Cases `
        ) // Display precinct and number of cases

        .attr("font-family", "Helvetica, sans-serif") // Specify Helvetica, fallback to sans-serif
        .attr("font-size", "36px")
        .attr("font-weight", "bold") // Make the text bold
        .attr("fill", "black")
        .attr("text-anchor", "middle") // Center the text horizontally around the node's center
        .attr("dy", ".35em"); // Vertically center the text

      node.append("title").text((d) => d.id);

      // Add a drag behavior.
      node.call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

      simulation.on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

        // Update label positions on each tick
        svg
          .selectAll("text")
          .attr("x", (d) => d.x)
          .attr("y", (d) => d.y);
      });

      document.querySelector(containerId).appendChild(svg.node());
    }

    renderChart("#container", data);
  });
</script>


<h1>Police Misconduct is a Collective Practice Influenced by Their Surroundings 
</h1>
<h2>A Drawing Highlighting Dinstive Precinct Social Networks</h2>

    <h2>
        <a href="{base}/assignments/a4/" target="_blank">Design Document</a>
    </h2>


<div id="container"></div>

<style>
  h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 1em;
    align-text: center;
  }

  h3 {
    font-size: 1em;
    font-weight: bold;
    margin-top: 1em;
    align-text: center;
  }

  #container {
    margin-top: 1em;
  }
</style>

