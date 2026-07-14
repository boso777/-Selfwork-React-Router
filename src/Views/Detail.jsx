import { useLoaderData } from "react-router";


export default function Detail(){

    const post = useLoaderData();

    return(<>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </>)
}