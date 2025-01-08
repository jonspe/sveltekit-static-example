<script>
	let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.body}</div>

<button onclick={() => history.back()}>&lt; Takaisin</button>

<h2>Kommentit</h2>

<ul>
    {#each data.comments as comment}
        <li><b>{comment.name}</b><br>{comment.body}<br><span>{comment.email}</span></li>
    {/each}
</ul>

<style>
    button {
        margin-top: 32px;
    }
    li {
        margin-bottom: 16px;
    }
    span {
        text-align: right;
    }
</style>
