import { error } from '@sveltejs/kit';

export async function load({ params }) {
    let [post, comments] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`).then(response => response.json()),
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}/comments`).then(response => response.json())
    ])

	if (!post) error(404)
    if (!comments) error(404)
    
    return {
        post,
        comments
    }
}

export const entries = async () => {
    let posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json())
    let entries = posts.map(post => {return {slug: post.id.toString()}})

    return entries
}
