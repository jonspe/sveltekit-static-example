<script>
	let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<div>{data.post.body}</div>

<button onclick={() => history.back()}>&lt; Takaisin</button>

<h2>Kommentit</h2>

<ul>
    {#each data.comments as comment}
        <li><b>{comment.email}</b><br>{comment.body}<br></li>
    {/each}
</ul>

<style>
    button {
        margin-top: 32px;
    }
    li {
        margin-bottom: 16px;
    }
</style>
