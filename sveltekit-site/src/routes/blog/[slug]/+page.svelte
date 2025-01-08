<script>
	let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.body}</div>
