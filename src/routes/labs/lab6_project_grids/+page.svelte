<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import Pie from "$lib/Pie.svelte";
  import * as d3 from "d3";

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
  $: selectedYear =
    selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null;

  let filteredByYear;
  $: filteredByYear =
    selectedYear != null
      ? filteredProjects.filter((project) => project.year === selectedYear)
      : filteredProjects;
</script>

<h1 class="big-title">Lab 6: Visualizing categorical data with D3</h1>

<svelte:head>
  <title>Lab 6: Visualizing categorical data with D3</title>
</svelte:head>

<div class="container">
  <div class="left-content">
    <h2>Reactive Project Grid</h2>

    <h3>
      In: <select bind:value={selectedYearIndex} class="year-select">
        <option value={-1}>All years</option>
        {#each pieData as { label }, index}
          <option value={index}>{label}</option>
        {/each}
      </select>
      <div>I created {filteredByYear.length} projects</div>
    </h3>

    <input
    type="search"
    bind:value={query}
    aria-label="Search projects"
    placeholder="🔍 Search projects…"
  />
  </div>
  <div class="right-content">
    <Pie data={pieData} bind:selectedIndex={selectedYearIndex} size="300" />
  </div>
</div>

<div class="projects">
  {#each filteredByYear as project}
    <Project data={project} hLevel="3" />
  {/each}
</div>

<style>
  .container {
    display: flex;
    justify-content: space-between;
  }

  .left-content {
    width: 50%;
    padding: 1rem;
  }

  .right-content {
    width: 50%;
    padding: 1rem;
    display: flex;
    justify-content: left;
    align-items: left;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(15em, 1fr)
    ); /* Ensures responsive columns */
    gap: 1em; /* Space between grid items */
    margin-top: 1em;
  }

  input[type="search"], .year-select {
    padding: 8px;
    margin: 10px 0;
    box-sizing: border-box; /* Includes padding and border in the element's width/height */
    border: 2px solid #ccc;
    border-radius: 4px;
  }

  .year-select:hover, .year-select:focus {
    border-color: #666;
  }
</style>
