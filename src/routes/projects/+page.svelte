<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import Pie from "$lib/Pie.svelte";
  import * as d3 from "d3";

  //     let pieData = [
  // 	{ value: 1, label: "apples" },
  // 	{ value: 2, label: "oranges" },
  // 	{ value: 3, label: "mangos" },
  // 	{ value: 4, label: "pears" },
  // 	{ value: 5, label: "limes" },
  // 	{ value: 5, label: "cherries" }
  // ];

  let colors = d3.scaleOrdinal(d3.schemeCategory10);
  let rolledData = d3.rollups(
    projects,
    (v) => v.length,
    (d) => d.year
  );

  let query = "";
  let filteredProjects = projects;
  $: filteredProjects = projects.filter((project) => {
    let values = Object.values(project).join("\n").toLowerCase();
    return values.includes(query.toLowerCase());
  });

  let pieData;

  // use a block statement ( {} ) to contain multiple commands, and then prepend that with $:
  $: {
    //Initialize to an empty object every time this runs
    pieData = {};

    // Calculate rolledData and pieData based on filteredProjects 
    rolledData = d3.rollups(
      filteredProjects,
      (v) => v.length,
      (d) => d.year
    );

    pieData = rolledData.map(([year, count]) => {
      return { value: count, label: year };
    });

  }

  let selectedYearIndex = -1;

  let selectedYear;
  $: selectedYear = selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null;

  let filteredByYear;
  $: filteredByYear = selectedYear != null
    ? filteredProjects.filter(project => project.year === selectedYear)
    : filteredProjects;

</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div>
    <Pie data={pieData} bind:selectedIndex={selectedYearIndex} /></div>

<input
  type="search"
  bind:value={query}
  aria-label="Search projects"
  placeholder="🔍 Search projects…"
/>

<h1>Jin Gao</h1>
<p>Jin is a passionate designer and tech lover!</p>
<img src="../images/tim.jpg" alt="Tim's photo" width="200" height="200" />

<!-- <pre>{ JSON.stringify(projects, null, "\t") }</pre> -->

<!-- add a count of projects at the top of the page by adding { projects.length } in the <h1> element. -->

<h1>{filteredProjects.length} projects</h1>
<h1>SelectedYear: {selectedYear}</h1>

<div class="projects">
  {#each filteredByYear as project}
    <Project data={project} hLevel="3" />
  {/each}
</div>

<style>
  .projects {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(15em, 1fr)
    ); /* Ensures responsive columns */
    gap: 1em; /* Space between grid items */
    margin-top: 1em;
  }
</style>
