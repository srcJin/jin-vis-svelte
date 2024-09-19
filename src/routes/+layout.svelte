<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import "../style.css";

  let pages = [
    { url: base + "/", title: "Home" },
    {
      title: "Projects",
      children: [
        { type: "divider", title: "6.C85 Course Projects" },
        { type: "link", url: base + "/projects/mbta_upzone", title: "MBTA Upzone+" },
        { type: "link", url: base + "/projects/police_misconduct", title: "Police Misconduct" },
        { type: "link", url: base + "/projects/american_population", title: "The Death and Life of American Population" },

        { type: "divider", title: "Web Applications" },
        { type: "link", url: base + "/projects/urban_mediators", title: "Urban Mediators" },
        { type: "link", url: base + "/projects/cre8ors", title: "Cre8ors" },
        { type: "link", url: base + "/projects/covid_map", title: "Covid Risk Level Map" },
        { type: "link", url: base + "/projects/weehive", title: "WeeHive" },
        { type: "link", url: base + "/projects/tangible_ideas", title: "Tangible Ideas" },
        // { type: "link", url: base + "/projects/from_sketch_to_design", title: "From Sketch to Design"},

        { type: "divider", title: "GIS Visualization" },
        { type: "link", url: base + "/projects/silkroad_urbanism", title: "Silkroad Urbanism"},
        { type: "link", url: base + "/projects/the_third_nature", title: "The Third Nature"},
        { type: "link", url: base + "/projects/boston_land_value", title: "Boston Land Value"},

        { type: "divider", title: "Visualization for Business" },
        { type: "link", url: base + "/projects/communicate_with_data", title: "Communicate with Data"},
      ],
    },
    {
      title: "Assignments",
      children: [
        { type: "link", url: base + "/assignments/a2", title: "A2: Exploratory Analysis" },
        { type: "link", url: base + "/assignments/a3", title: "A3: Visualization Design" },
        { type: "link", url: base + "/assignments/a4", title: "A4: Persuasive/Deceptive" },
      ],
    },
    {
      title: "Labs",
      children: [
        { type: "link", url: "https://srcjin.github.io/vis_lab_0_3/", title: "Lab 0-3:Static Page" },
        { type: "link", url: base + "/labs/lab5_svelte", title: "Lab 4-5: Svelte" },
        { type: "link", url: base + "/labs/lab6_project_grids", title: "Lab 6: Project Grids" },
        { type: "link", url: base + "/labs/lab7_commit_meta", title: "Lab 7: Commit Meta" },
        { type: "link", url: base + "/labs/lab8_bikewatching", title: "Lab 8: Bikewatching" },
        { type: "link", url: base + "/labs/lab9_storytelling", title: "Lab 9: Storytelling" },
      ],
    },
    { type: "link", url: base + "/about_me", title: "About Me" },
    { type: "link", url: "https://gao-jin.com", title: "Full Portfolio" },
    { type: "link", url: "https://github.com/srcJin", title: "GitHub" },
  ];

  let localStorage = globalThis.localStorage ?? {};
  let colorScheme = localStorage.colorScheme
    ? localStorage.colorScheme
    : "light dark";
  $: localStorage.colorScheme = colorScheme;

  let root = globalThis?.document?.documentElement;
  $: root?.style.setProperty("color-scheme", colorScheme);

  // Track which dropdown is open; null means no dropdown is open
  let openDropdown = null;

  // Object to store timeout IDs for each dropdown
  let timeoutIds = {};

  // Function to handle mouse entering a dropdown
  function handleMouseEnter(dropdownId) {
    // Clear any existing timeout for this dropdown
    if (timeoutIds[dropdownId]) {
      clearTimeout(timeoutIds[dropdownId]);
      timeoutIds[dropdownId] = null;
    }
    // Set the currently open dropdown
    openDropdown = dropdownId;
  }

  // Function to handle mouse leaving a dropdown
  function handleMouseLeave(dropdownId) {
    timeoutIds[dropdownId] = setTimeout(() => {
      if (openDropdown === dropdownId) {
        openDropdown = null;
      }
      timeoutIds[dropdownId] = null;
    }, 500); // Delay before hiding dropdown (3000ms = 3s)
  }
</script>

<!-- Lab 5 Step 1: Port the theme switcher to Svelte -->

<label
  class="color-scheme"
  style="position: absolute; top: 1rem; right: 1rem; font-size: 80%;"
>
  Theme:
  <select id="color-scheme-select" bind:value={colorScheme}>
    <option value="light dark">Auto</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</label>

<!-- Navigation Bar -->
<nav>
    {#each pages as p, index}
        {#if p.children}
            <div class="dropdown-wrapper" on:mouseenter={() => handleMouseEnter(index)} on:mouseleave={() => handleMouseLeave(index)}>
                <span>{p.title}</span>
                {#if openDropdown === index}
                    <div class="dropdown-content">
                        {#each p.children as child}
                            {#if child.type === 'link'}
                                <a href={child.url} class:current={"." + $page.route.id === child.url}>{child.title}</a>
                            {:else if child.type === 'divider'}
                                <div class="divider">{child.title}</div>
                            {/if}
                        {/each}
                    </div>
                {/if}
            </div>
        {:else}
            <a href={p.url} class:current={"." + $page.route.id === p.url} target={p.url.startsWith("http") ? "_blank" : null} rel={p.url.startsWith("http") ? "noopener noreferrer" : null}>{p.title}</a>
        {/if}
    {/each}
</nav>
<slot />

<style>
  /* Resetting the <ul> and <li> elements in the navigation to not affect layout and styling
     */
  nav ul,
  nav li {
    display: contents;
  }

  nav {
        display: flex;
        text-align: center;
        padding: 0.5em;
        margin-bottom: 1em;
        justify-content: space-between;
        --border-color: oklch(50% 10% 200 / 40%);
        border-bottom: 1px solid var(--border-color);    /* Cool gray bottom border */
        z-index: 9999;
    }
    
    nav a, .dropdown-wrapper {
        text-decoration: none; /* Remove underline */
        color: inherit; /* Use parent text color */
        text-align: center; /* Center text */
        flex: 1; /* Flex each link, including dropdown, to take up equal space */
        padding: 0.5em; /* Add spacing around the links */
        position: relative; /* For dropdown positioning */
        display: flex;
        justify-content: center; /* Ensure horizontal centering */
        align-items: center; /* Ensure vertical centering */
        border-bottom: 0.4em solid transparent; /* Reserve space for border */
        cursor: pointer; /* Change cursor to pointer for better UX */
    }
    
    nav a.current, .dropdown-wrapper.current {
        border-bottom-color: oklch(80% 3% 200); /* Visible border for current link */
    }
    
    /* Hover effect with box-shadow to prevent shifting */
    nav a:hover, .dropdown-wrapper:hover {
        background-color: color-mix(in oklch, var(--color-accent), canvas 85%);
        box-shadow: 0px 4px 0px var(--color-accent); /* Simulate border-bottom with shadow */
    }
    
    .divider {
    padding: 6px 12px;
    font-weight: bold;
    color: rgb(79, 79, 79);
    background-color: #d3d3d3;
    text-align: left;
}

    /* Ensure text in dropdown button is centered */
    .dropdown-wrapper span {
        text-align: center;
        width: 100%;
    }
    
    .dropdown-wrapper {
        position: relative; /* Ensure dropdown content is positioned relative to wrapper */
    }
    
    .dropdown-content {
        position: absolute;
        top: calc(100% + 10px); /* Add a small gap between the dropdown and navbar */
        left: 0;
        width: 200%; /* Adjust width as needed */
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
        z-index: 1;
        /* Optional: Add transition for smooth dropdown */
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    
    .dropdown-content a {
        padding: 6px 14px;
        text-decoration: none;
        display: block;
        text-align: left;
        color: inherit;
    }
    
    .dropdown-content a:hover {
        background-color: #e6e5e5;
    }
    
    /* Remove the CSS rule that shows the dropdown on hover */
    /* Previously, you might have had something like:
    .dropdown:hover .dropdown-content {
        display: block;
    }
    Remove or comment it out to prevent conflicts with JavaScript control.
    */
</style>
