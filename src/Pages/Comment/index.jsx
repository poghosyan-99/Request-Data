import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { sendRequest2 } from "../../Hook/SendRequest";
import { generateIdURLs } from "../../Links";

import './style.css';

const Comment = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [commentData, setCommentData] = useState({});

    useEffect(() => {
        async function request() {
            const idURLs = generateIdURLs(id);
            const result = await sendRequest2().sendRequestGet2(idURLs.commentsIdURL);
            setCommentData(result);
        }
        request();
    }, []);


    return(
        <div className="commentt">
            <button onClick={() => navigate(-1)} className="back-comment">Back</button>
            <h1>{id}</h1>
            <div className="CommentCard" key={commentData?.id}>
                <h2>{commentData?.user?.username}</h2>
                <p>{commentData?.body}</p>
                <h2>{commentData?.id}</h2>
            </div>
        </div>
    )
}
export default Comment;