export async function load() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())

  return {
    summaries: posts.map((post) => ({
      slug: post.id,
      title: post.title,
    })),
  }
}
