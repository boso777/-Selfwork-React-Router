export const getAllPostsLoader = async()=>{
    const promise = await fetch (`https://jsonplaceholder.typicode.com/posts`);
    const json = await promise.json();
    return json;
}

export const getSinglePostLoader = async({params})=>{
    // console.log(params);
    const id = params.id;
    const promise = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await promise.json();
    return json;
}
