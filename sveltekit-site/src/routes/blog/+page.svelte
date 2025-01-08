<script>
    let { data } = $props();
</script>

<h1>Blog</h1>
<ol>
    {#each data.summaries as {slug, title}}
        <li>
            <a href="/blog/{slug}">{title}</a>
        </li>
    {/each}
</ol>
