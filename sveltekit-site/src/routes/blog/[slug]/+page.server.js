import { error } from '@sveltejs/kit';

export async function load({ params }) {
    let [post, comments, users] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`).then(response => response.json()),
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}/comments`).then(response => response.json()),
        fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json())
    ])

	if (!post) error(404)
    if (!comments) error(404)
    if (!users) error(404)
    
    return {
        post,
        comments
    }
}