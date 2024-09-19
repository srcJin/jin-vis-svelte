<script>
  import { base } from "$app/paths";
  import ProjectGallery from "../lib/ProjectGallery.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1 class="big-title">Welcome to Jin's Visualization Treasure Box</h1>

<div class="self-intro-container">
  <div class="image-container">
    <img src="{base}/images/portrait_flipped.jpg" alt="Tim's photo" />
  </div>
  <div class="text-container">
    <h2>Hi, I'm Jin!</h2>
    <p>
       I'm a designer, software developer and a data visualization enthusiast. I love
      creating exploring new perspective of data and show them in intuitive and beautiful visualizations.
      My research interest is to develop interactive tools to facilitate decision-making in complex social systems.
    </p>
  </div>
</div>

<ProjectGallery />

<style>
  .self-intro-container {
    display: flex;
    align-items: center; /* Align items vertically */
    margin-top: 40px; /* Adds space above the self-intro section */
    margin-bottom: 40px; /* Adds space below the self-intro section */
  }

  .image-container {
    flex: 1; /* Takes 1/4 of the space */
    max-width: 25%; /* Limiting to 25% of the container width */
    display: flex;
    justify-content: center; /* Centering image horizontally */
  }

  .image-container img {
    width: 100%; /* Full width of the container */
    height: auto; /* Maintain aspect ratio */
    border-radius: 50%; /* Circle shape */
    object-fit: cover; /* Ensures the image covers the area without distortion */
  }

  .text-container {
    flex: 3; /* Takes remaining 3/4 of the space */
    text-align: left; /* Text aligned to the left */
    padding: 0 40px; /* Adds padding to the text */
  }

  .big-title {
    text-align: center;
    margin-top: 40px;
  }

  h2 {
    margin-top: 0; /* Reduces space above the name title */
  }
</style>
