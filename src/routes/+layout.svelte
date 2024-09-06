<script>
import { page } from '$app/stores';
import "../style.css";

let pages = [
    { url: "./", title: "Home" },
    { url: "projects", title: "Projects" },
    { url: "contact", title: "Contact" },
    { url: "cv", title: "CV" },
    { url: "https://github.com/srcJin", title: "GitHub" }
];

let colorScheme = "light dark"
let root = globalThis?.document?.documentElement;
$: root?.style.setProperty("color-scheme", colorScheme);

// Lab 5 Step 1: Port the theme switcher to Svelte

</script>

<label class="color-scheme" style="position: absolute; top: 1rem; right: 1rem; font-size: 80%;">
    Theme:
    <select id="color-scheme-select" bind:value={ colorScheme }>
        <option value="light dark">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</label>

<nav>
    {#each pages as p}
    <a 
        href={p.url} 
        class:current={ "." + $page.route.id === p.url } 
        target={p.url.startsWith("http") ? "_blank" : null} 
        rel={p.url.startsWith("http") ? "noopener noreferrer" : null} 
    >
        {p.title}
    </a>
    {/each}
</nav>

<slot />


<style>

/* Resetting the <ul> and <li> elements in the navigation to not affect layout and styling */
    nav ul, nav li {
    display: contents;
}


nav {
    display: flex;
    text-align: center;
    padding: 0.5em;
    margin-bottom: 1em;
    justify-content: space-between;
    /* border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: oklch(80% 3% 200) */
    --border-color: oklch(50% 10% 200 / 40%);
    border-bottom: 1px solid var(--border-color);    /* Cool gray bottom border */
    
}

nav a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Use parent text color */
    text-align: center; /* Center text */
    flex: 1; /* Flex each link to take up equal space */
    padding: 0.5em; /* Add spacing around the links */
  }
  
nav a.current {
border-bottom: 0.4em solid oklch(80% 3% 200); /* Thick bottom border for current link */

}

nav a:hover {
    border-bottom: 0.4em solid var(--color-accent);
    background-color: color-mix(in oklch, var(--color-accent), canvas 85%);
}

</style>