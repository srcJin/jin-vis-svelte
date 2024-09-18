<!-- src/components/GitHubStats.svelte -->
<script>
  import { base } from "$app/paths";
    // Props to receive username or other customizable data
    export let username = 'srcJin';

    async function fetchGitHubData(user) {
        const response = await fetch(`https://api.github.com/users/${user}`);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch data');
        }
    }

    let data = null;
    let error = null;

    // Fetch data on mount
    import { onMount } from 'svelte';
    onMount(async () => {
        try {
            data = await fetchGitHubData(username);
        } catch (e) {
            error = e.message;
        }
    });
</script>

{#if error}
    <p class="error">{error}</p>
{:else if data}
    <dl class="stats-grid">
        <dt>Followers</dt>
        <dd>{data.followers}</dd>
        <dt>Following</dt>
        <dd>{data.following}</dd>
        <dt>Public Repos</dt>
        <dd>{data.public_repos}</dd>
        <dt>Public Gists</dt>
        <dd>{data.public_gists}</dd>
    </dl>
{:else}
    <p>Loading...</p>
{/if}

<style>
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto auto;
        text-align: center;
        gap: 20px;
        margin-top: 20px;
    }

    dt {
        grid-row: 1;
        font-size: 1.2em;
        color: #333;
    }

    dd {
        grid-row: 2;
        font-size: 2em;
        color: #666;
    }

    .error {
        color: red;
    }
</style>
