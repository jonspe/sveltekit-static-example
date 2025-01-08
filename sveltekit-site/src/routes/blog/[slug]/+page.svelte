<script>
	let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.body}</div>

<button onclick={() => history.back()}>&lt; Takaisin</button>

<style>
    button {
        margin-top: 32px;
    }
</style>
