import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { sendRequest2 } from "../../Hook/SendRequest";
import { generateIdURLs } from "../../Links";

import './style.css';

const Todo = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [todoData, setTodoData] = useState({});

    useEffect(() => {
        async function request() {
            const idURLs = generateIdURLs(id);
            const result = await sendRequest2().sendRequestGet2(idURLs.todosIdURL);
            setTodoData(result);
        }
        request();
    }, []);


    return(
        <div className="todoo">
            <button onClick={() => navigate(-1)} className="back-todo">Back</button>
            <h1>{id}</h1>
            <div className="TodoCard" key={todoData?.id}>
                <h2>UserId - {todoData?.userId}</h2>
                <p>{todoData?.todo}</p>
                <h2>{todoData?.id}</h2>
            </div>
        </div>
    )
}
export default Todo;