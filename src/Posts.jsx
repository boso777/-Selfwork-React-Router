import { useLoaderData } from "react-router";
import { Link } from "react-router";

export default function Posts(){

    const posts = useLoaderData();

    return(<>
        {posts.map((post)=>{
            return <h2 key={post.id}>{post.title} : <Link to={`/posts/details/${post.id}`}>Dettagli</Link></h2>
        })}
    </>)
}