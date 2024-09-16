<script>
  import projects from "$lib/dummyprojects.json";
  import HeaderProject from "$lib/HeaderProject.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1 class="big-title">Welcome to Jin's Visualization Treasure Box</h1>


<img src="images/tim.jpg" alt="Tim's photo" width="200" height="200" />

<div class="projects">
  {#each projects.slice(0, 3) as project}
    <HeaderProject data={project} hLevel="3" />
  {/each}
</div>

<style>
    .projects {
        display: grid;
        grid-template-columns: 1fr; /* Ensures responsive columns */
        gap: 1em; /* Space between grid items */
        margin-top: 1em;
    }
    </style>