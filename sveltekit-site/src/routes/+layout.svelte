<script>
    import { fade } from "svelte/transition"
    import { page } from '$app/state'

    let { children } = $props()
</script>

<nav>
    <div>
        <img id="logo" alt="" src="favicon.png" />
        <a href="/">Koti</a>
        <a href="/components">Komponentit</a>
        <a href="/blog">Blogi</a>
    </div>
</nav>

{#key page.url.pathname}
    <main in:fade>
        {@render children()}
    </main>
{/key}

<style>
    nav {
        background-color: white;
        height: 64px;
        box-shadow: 0 12px 12px 0px rgb(225, 225, 225);
        margin-bottom: 96px;
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
    }
</style>

