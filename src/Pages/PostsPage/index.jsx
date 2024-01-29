import { useEffect, useState } from "react";
import { SendRequest } from "../../Hook/SendRequest";
import { postsURL } from "../../Links";
import Loading from "../../Components/Loading";
import { Link } from "react-router-dom";

import './style.css';

const PostsPage = () => {

    const [postsData, setPostsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {sendRequestGet} = SendRequest();

    useEffect(() => {
        async function request() {
            setIsLoading(true);
            const result = await sendRequestGet(postsURL);
            setPostsData(result);
            setIsLoading(false);
        }
        request();
    }, []);

    return(
        isLoading ? (
            <Loading/>
        ) : (
        <div className="PostsPage">
            <div className="post-page">
                <h1>Posts</h1>
            </div>
            <div className="Posts">
                {postsData?.posts.map((post) => {
                    return(
                        <div className="PostCard" key={post?.id}>
                            <h2>{post?.title.slice(0, 20)}</h2>
                            <p>{post?.body.slice(0, 70)}</p>
                            <button className="go-to-post-page">
                                <Link to={`/PostsPage/${post?.id}`} className="post-link">Post Page</Link>
                            </button>
                            <h2>{post?.id}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
        )
    )
}

export default PostsPage;