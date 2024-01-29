import { useEffect, useState } from "react";
import { SendRequest } from "../../Hook/SendRequest";
import { todosURL } from "../../Links";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import './style.css';

const TodosPage = () => {

    const [todosData, setTodosData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {sendRequestGet} = SendRequest();

    useEffect(() => {
        async function request() {
            setIsLoading(true);
            const result = await sendRequestGet(todosURL);
            setTodosData(result);
            setIsLoading(false)
        }
        request();
    }, []);

    return(
        isLoading ? (
            <Loading/>
        ) : (
        <div className="TodosPage">
            <div className="todos-page">
                <h1>Todos</h1>
            </div>
            <div className="Todos">
                {todosData?.todos?.map((todo) => {
                    return(
                        <div className="TodoCard" key={todo?.id}>
                            <h2>UserId - {todo?.userId}</h2>
                            <p>{todo?.todo}</p>
                            <button className="go-to-todo-page">
                                <Link to={`/TodosPage/${todo?.id}`} className="todo-link">Todo Page</Link>
                            </button>
                            <h2>{todo?.id}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
        )
    )
}

export default TodosPage;