import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
        .then(response => response.json())
    
	if (!post) error(404);

    return {
        post
    }
}