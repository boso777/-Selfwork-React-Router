import { createBrowserRouter } from "react-router";
import Layout from '../Views/Layout';
import Posts from "../Posts";
import Homepage from "../Views/Homepage";
import { getAllPostsLoader } from "./loader";
import { getSinglePostLoader } from "./loader";
import Detail from "../Views/Detail";
import Login from "../Views/Login";
import Register from "../Views/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout, 
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: "posts",
                Component: Posts,
                loader: getAllPostsLoader,
            },
            {
                path: "posts/details/:id",
                Component: Detail,
                loader: getSinglePostLoader,
            },
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
                Component: Register,
            }

    ]
    }
]);

export default router;