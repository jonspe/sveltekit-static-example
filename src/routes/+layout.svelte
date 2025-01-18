<script>
  import { fade } from "svelte/transition"
  import { page } from "$app/state"
  import { base } from "$app/paths"

  let { children } = $props()
</script>

<svelte:head>
  <title>Staattinen SvelteKit Blogi</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<nav>
  <div>
    <img id="logo" alt="" src="favicon.png" />
    <a href="{base}/">Koti</a>
    <a href="{base}/blog">Blogi</a>
    <a href="{base}/about">Tietoja</a>
  </div>
</nav>

{#key page.url.pathname}
  <main in:fade={{ duration: 400 }}>
    {@render children()}
  </main>
{/key}

<style>
  :global(html),
  :global(body) {
    overflow-x: hidden;
  }
  nav {
    background-color: white;
    height: 64px;
    box-shadow: 0 12px 12px 0px rgb(225, 225, 225);
    margin-bottom: 96px;
    padding: 0 16px;
  }
  nav > div {
    margin: 0 auto 0 auto;
    display: flex;
    width: 960px;
  }
  #logo {
    width: 64px;
    height: 64px;
  }
  a {
    text-decoration: none;
    font-weight: 700;
    align-self: center;
    margin-left: 32px;
  }
  a:hover {
    color: black;
  }
  :global(body) {
    margin: 0;
    background-color: #eee;
  }
  :global(*) {
    font-family: Arial;
    font-size: large;
    color: #666;
  }
  main {
    max-width: 960px;
    margin: auto;
    padding: 0 16px;
  }
  :global(*::first-letter) {
    text-transform: capitalize;
  }
</style>
