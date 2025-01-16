<script>
  import { base } from "$app/paths"

  let { data } = $props()

  const postsPerPage = 10
  let currentPostIndex = $state(0)

  let paginated = $derived(data.summaries.slice(currentPostIndex, currentPostIndex + postsPerPage))

  const previous = function () {
    currentPostIndex = currentPostIndex - postsPerPage
    if (currentPostIndex < 0) {
      currentPostIndex = 0
    }
  }

  const next = function () {
    currentPostIndex = currentPostIndex + postsPerPage
    if (currentPostIndex > data.summaries.length - postsPerPage) {
      currentPostIndex = data.summaries.length - postsPerPage
    }
  }
</script>

<h1>Blogi</h1>
<p>
  Tämä data on haettu sivuston rakentamisen aikana osoitteesta
  <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder.typicode.com</a>
</p>

<ol>
  {#each paginated as { slug, title } (slug)}
    <li value={slug}>
      <a href="{base}/blog/{slug}">{title}</a>
    </li>
  {/each}
</ol>

<button onclick={previous}>Taakse</button>
<button onclick={next}>Seuraava</button>

<style>
  a:hover {
    color: black;
  }
  li {
    margin-bottom: 12px;
  }
</style>
