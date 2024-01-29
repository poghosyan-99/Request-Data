import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { sendRequest2 } from "../../Hook/SendRequest";
import { generateIdURLs } from "../../Links";
import './style.css';

const Post = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [postData, setPostData] = useState({});

    useEffect(() => {
        async function request() {
            const idURLs = generateIdURLs(id);
            const result = await sendRequest2().sendRequestGet2(idURLs.postsIdURL);
            setPostData(result);
        }
        request();
    }, []);

    return(
        <div className="postt">
            <button onClick={() => navigate(-1)} className="back-post">Back</button>
            <h1>{id}</h1>
            <div className="PostCard" key={postData?.id}>
                <h2>{postData?.title}</h2>
                <p>{postData?.body}</p>
                <h2>{postData?.id}</h2>
            </div>
        </div>
    )
}
export default Post;