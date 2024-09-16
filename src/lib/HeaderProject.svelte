<script>
    export let data = {}; // This defines the prop that will be passed from the parent 
    export let hLevel = 2;
  </script>

<article>
    <a href={data.link} style="text-decoration: none; color: inherit;">
        <img src={data.image} alt="" class="article-img">
        <svelte:element this={"h" + hLevel}>{ data.title }</svelte:element>
    </a>
    <p>{data.description}</p>
</article>

<style>

article {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
    gap: 0.1em; /* 减少 gap 使得标题和描述之间更紧凑 */
    text-align: center;
    padding: 0.1em;
    margin-bottom: 0.5em; /* 增加文章之间的距离 */
}

.article-img {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
}

h2 {
    margin: 0; /* 保持标题的紧凑性 */
}

p {
    margin-top: -0.5em; /* 减少描述与标题之间的距离 */
    margin-bottom: 0; /* 去除描述的下边距 */
    line-height: 1.4em; /* 增加可读性 */
    font-size: 1em; /* 减小描述的字体大小 */
    text-align: left;
}

a {
    text-decoration: none;
    color: inherit;
}

</style>