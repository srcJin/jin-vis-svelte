<script>
    export let data = {}; // This defines the prop that will be passed from the parent 
    export let hLevel = 2;
  </script>

<article>
    <svelte:element this={"h" + hLevel}>{ data.title }</svelte:element>    <img src={data.image} alt="">
    <p>{data.description}</p>
</article>

<style>

article {
    display: grid;
    grid-template-rows: subgrid; /* Use the subgrid for row alignment */
    grid-row: span 3; /* Span each article across 3 rows */
    gap: 0.5em; /* Add spacing between elements inside each article */
}

h2 {
    margin: 0; /* Remove default margin to prevent excessive spacing */
}
</style>