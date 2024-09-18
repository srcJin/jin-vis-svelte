<script>
  import { base } from "$app/paths";
    import HeaderProject from "$lib/HeaderProject.svelte";
    import projects from "$lib/full_projects.json";
  
    import { writable } from "svelte/store";
  
    import { fade } from "svelte/transition";

    // Use writable store for reactivity
    let activeTab = writable('Featured');
    let searchQuery = writable('');
  
    // Convert to normal variables for reactive update
    $: displayedProjects = filterProjects($activeTab, $searchQuery);
  
    // Filter projects based on the active tab and search query
    function filterProjects(tab, query) {
      let filtered = projects;
      if (tab !== "All") {
        filtered = filtered.filter((project) =>
          tab === "Featured" ? project.featured : project.category === tab
        );
      }
      if (query) {
        filtered = filtered.filter(
          (project) =>
            project.title.toLowerCase().includes(query.toLowerCase()) ||
            project.description.toLowerCase().includes(query.toLowerCase())
        );
      }
      return filtered;
    }
  
    function groupByType(projects) {
      return projects.reduce((acc, project) => {
        (acc[project.type] = acc[project.type] || []).push(project);
        return acc;
      }, {});
    }
  </script>
  
  <!-- Tab UI -->
  <div class="tabs">
    <button
      class:selected={$activeTab === "Featured"}
      on:click={() => $activeTab = "Featured"}
      transition:fade={{ duration: 300 }}>Featured</button>
    <button
      class:selected={$activeTab === "Projects"}
      on:click={() => $activeTab = "Projects"}
      transition:fade={{ duration: 300 }}>Projects</button>
    <button
      class:selected={$activeTab === "Assignments"}
      on:click={() => $activeTab = "Assignments"}
      transition:fade={{ duration: 300 }}>Assignments</button>
    <button
      class:selected={$activeTab === "Labs"}
      on:click={() => $activeTab = "Labs"}
      transition:fade={{ duration: 300 }}>Labs</button>
    <div class="search-container">
      <span class="emoji">🔍</span>
      <input
        type="text"
        placeholder="Search projects..."
        bind:value={$searchQuery}
      />
    </div>
  </div>
  
  <!-- Display Projects using HeaderProject Component -->
  <div class="project-display">
    {#if $activeTab === "Projects"}
      {#each Object.entries(groupByType(displayedProjects)) as [type, projects]}
        <h3>{type}</h3>
        {#each projects as project}
          <HeaderProject
            data={project}
            hLevel="3"
            layout={project.layout || "left"}
          />
        {/each}
      {/each}
    {:else}
      {#each displayedProjects as project}
        <HeaderProject
          data={project}
          hLevel="3"
          layout={project.layout || "left"}
        />
      {/each}
    {/if}
  </div>
  

<style>
  .tabs {
    /* background-color: white; */
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #ccc;
  }

  .tabs button {
    padding: 8px 16px;
    margin-right: 10px;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    transition:
      background-color 0.3s,
      border-bottom-color 0.3s;
  }

  .tabs button:hover {
    background-color: #f9f9f9;
  }

  .tabs button.selected {
    border-bottom-color: #007bff;
    color: #007bff;
  }

  .search-container {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-left: auto;
  }

  .search-container .emoji {
    margin-right: 8px;
  }

  .search-container input {
    flex-grow: 1;
    padding: 8px 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
  }

  .project-display {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        padding: 20px;
    }
    .project-display h3 {
        grid-column: 1 / -1;
        /* padding: 10px; */
        background-color: rgb(228, 228, 228);
        text-align: center;
    }
</style>
