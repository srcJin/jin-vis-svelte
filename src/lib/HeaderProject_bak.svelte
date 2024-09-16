<script>
    export let data = {};
    export let hLevel = 2;
    export let layout = "left"; // Default layout is "left"
</script>

<article class={layout === "left" ? "layout-left" : "layout-right"}>
    {#if layout === "left"}
        <img src={data.image} alt="" class="article-img">
        <div class="text-content">
            <svelte:element this={"h" + hLevel}>{ data.title }</svelte:element>
            <p>{data.description}</p>
        </div>
    {:else}
        <div class="text-content">
            <svelte:element this={"h" + hLevel}>{ data.title }</svelte:element>
            <p>{data.description}</p>
        </div>
        <img src={data.image} alt="" class="article-img">
    {/if}
</article>

<style>
.layout-left, .layout-right {
    display: grid;
    gap: 0.5em;
}

.layout-left {
    grid-template-columns: 1fr 2fr; /* Image 1/3, text 2/3 */
}

.layout-right {
    grid-template-columns: 2fr 1fr; /* Text 2/3, image 1/3 */
}

.article-img {
    width: 100%;
    height: auto;
    aspect-ratio: 1; /* Square image */
}

.text-content h2, .text-content h3 {
    margin: 0;
}
</style>
