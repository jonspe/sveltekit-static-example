<script>
    let { data } = $props();
</script>

<h1>Blogi</h1>
<p>
    Tämä data on haettu sivuston rakentamisen aikana osoitteesta
    <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder.typicode.com</a>
</p>

<ol>
    {#each data.summaries as {slug, title}}
        <li>
            <a href="/blog/{slug}">{title}</a>
        </li>
    {/each}
</ol>

<style>
    a:hover {
        color: black;
    }
    li {
        margin-bottom: 12px;
    }
</style>
