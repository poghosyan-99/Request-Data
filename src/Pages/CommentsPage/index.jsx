import { useEffect, useState } from "react";
import { SendRequest } from "../../Hook/SendRequest";
import { commentsURL } from "../../Links";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import './style.css';

const CommentsPage = () => {

    const [commentsData, setCommentsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {sendRequestGet} = SendRequest();

    useEffect(() => {
        async function request() {
            setIsLoading(true);
            const result = await sendRequestGet(commentsURL);
            setCommentsData(result);
            setIsLoading(false);
        }
        request();
    }, []);
    
    return(
        isLoading ? (
            <Loading/>
        ) : (
        <div className="CommentsPage">
            <div className="comments-page">
                <h1>Comments</h1>
            </div>
            <div className="Comments">
                {commentsData?.comments.map((comment) => {
                    return(
                        <div className="CommentCard" key={comment?.id}>
                            <h2>{comment?.user?.username}</h2>
                            <p>{comment?.body}</p>
                            <button className="go-to-comment-page">
                                <Link to={`/CommentsPage/${comment?.id}`} className="comment-link">Comment Page</Link>
                            </button>
                            <h2>{comment?.id}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
        )
    )
}

export default CommentsPage;