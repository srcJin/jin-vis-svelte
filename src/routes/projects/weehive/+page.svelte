<svelte:head>
    <title>WeeHive - A Collaborative Beekeeping Solution for Uncertain Climate Era</title>
</svelte:head>

<main>
    <h1>WeeHive - A Collaborative Beekeeping Solution for Uncertain Climate Era</h1>
    <p>WeeHive is an innovative smart beekeeping platform designed to cater to the needs of beekeepers in China. The platform consists of a bee hive monitoring hardware system and a user-friendly WeChat mini-program that helps beekeepers monitor Bee hive data.</p>
    <p>WeeHive won the 2023 Young Climate Prize, 2023 China Internet Plus Competition Bronze Price, and the project is selected to be presented on IDEO and MIT Climate Energy Price Conference. Now it received MIT Sandbox Innovation Fund and continue developing to the next phase.</p>
    
    <div class="responsive-iframe">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XBptLW-lmeQ?si=MKBSW3k7RfxY1OQT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <!-- <h2>Prototype Phase</h2>
    <img src="/images/projects/weehive/weehive1.jpg" alt="WeeHive Prototype 1">
    <img src="/images/projects/weehive/weehive2.jpg" alt="WeeHive Prototype 2">
    <img src="/images/projects/weehive/weehive3.jpg" alt="WeeHive Prototype 3">
    <img src="/images/projects/weehive/weehive4.jpg" alt="WeeHive Prototype 4">
    <img src="/images/projects/weehive/weehive5.jpg" alt="WeeHive Prototype 5"> -->


    <img src="/images/projects/weehive/weehive_product1.png" alt="WeeHive Product Development 1">

    <h2>Market Survery</h2>
    <img src="/images/projects/weehive/weehive_product2.png" alt="WeeHive Product Development 2">
    <img src="/images/projects/weehive/weehive_product3.png" alt="WeeHive Product Development 3">

    <h2>User Flow</h2>
    <img src="/images/projects/weehive/weehive_product4.png" alt="WeeHive Product Development 4">
    <img src="/images/projects/weehive/weehive_product5.png" alt="WeeHive Product Development 5">


    <h2>Technical Implementation</h2>

    <h3>Frontend Design Document</h3>
    <img src="/images/projects/weehive/Chapter_5_Frontend_Design_Document_Beta/Untitled.png" alt="Frontend Design Document Wireframe">
    <img src="/images/projects/weehive/weehive_product6.png" alt="WeeHive Product Development 6">


    <h3>Backend Design Document</h3>
    <img src="/images/projects/weehive/Chapter_4_Backend_Design_Document_Alpha/Untitled.png" alt="Backend Design Document">


    <h1>Features and Reactive Components</h1>

    <h2>1. Responsible Layout</h2>
    <p>I use CSS to create two versions of the layout, one for desktop use and one for mobile use.</p>
    <img src="/images/projects/weehive/Chapter_5_Frontend_Design_Document_Beta/3.gif" alt="Responsive Layout">

    <h2>2. User Statistics & Abstracted Map</h2>
    <p>This hexagonal map is an entrance to show the current user number and a quick switch for the user to enter that region. The user can click on one of the hexagons and after an animation, the user will be directed to the selected region's central map.</p>
    <img src="/images/projects/weehive/Chapter_5_Frontend_Design_Document_Beta/1.gif" alt="User Statistics & Abstracted Map">

    <h2>3. Interactive Map</h2>
    <p>Powered by leaflet, the app provides a multi-layer map that allows users to view vegetation cover and a fun to watch watercolor map.</p>
    <img src="/images/projects/weehive/Chapter_5_Frontend_Design_Document_Beta/4.gif" alt="Interactive Map">

    <h2>4. Like/Favorite Buttons</h2>
    <p>User can like and favorite a post or reply by clicking the icons. The icons will update their appearance to show their states. It will also update the like counts automatically.</p>
    <img src="/images/projects/weehive/Chapter_5_Frontend_Design_Document_Beta/5.gif" alt="Like/Favorite Buttons">

    <h2>5. Post Filtering Function</h2>
    <p>By pressing the filter button, the user can filter out different types of posts. Notice the icons are automatically calculated by the type of the post.</p>
    <img src="/images/projects/weehive/Chapter_5_Frontend_Design_Document_Beta/2.gif" alt="Post Filtering Function">

    <h2>6. Relationship: Following and User Filtering</h2>
    <img src="/images/projects/weehive/Chapter_5_Frontend_Design_Document_Beta/6.gif" alt="Relationship: Following and User Filtering">




</main>

<style>
    .responsive-iframe {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 56.25%;
    }
    .responsive-iframe iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
        height: auto;
        margin-top: 20px;
    }
</style>