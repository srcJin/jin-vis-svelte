<svelte:head>
<title>Projects</title>
</svelte:head>

<script>
    import projects from '$lib/projects.json';
    </script>
    

<h1> Jin Gao </h1>
<p> Jin is a passionate designer and tech lover! </p>
<img src="../images/tim.jpg" alt="Tim's photo" width="200" height="200">

<!-- <pre>{ JSON.stringify(projects, null, "\t") }</pre> -->

<!-- add a count of projects at the top of the page by adding { projects.length } in the <h1> element. -->

<h1> {projects.length} projects </h1>

<div class="projects">
    {#each projects as p}
	<article>
		<h2>{p.title}</h2>
		<img src={p.image} alt="">
		<p>{p.description}</p>
	</article>
{/each}
</div>