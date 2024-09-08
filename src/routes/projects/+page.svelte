<svelte:head>
<title>Projects</title>
</svelte:head>

<script>
    import projects from '$lib/projects.json';
    import Project from '$lib/Project.svelte';
    import Pie from '$lib/Pie.svelte';
    </script>
    

<h1> Jin Gao </h1>
<p> Jin is a passionate designer and tech lover! </p>
<img src="../images/tim.jpg" alt="Tim's photo" width="200" height="200">

<!-- <pre>{ JSON.stringify(projects, null, "\t") }</pre> -->

<!-- add a count of projects at the top of the page by adding { projects.length } in the <h1> element. -->

<h1> {projects.length} projects </h1>

<div class="projects">
    {#each projects as project}
    <Project data={project} hLevel=3 />
  {/each}
  
</div>

<div>
    <Pie />
</div>

<style>
.projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr)); /* Ensures responsive columns */
    gap: 1em; /* Space between grid items */
    margin-top: 1em;
}
</style>