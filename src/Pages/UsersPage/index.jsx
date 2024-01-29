import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SendRequest } from "../../Hook/SendRequest";
import { usersURL } from "../../Links";
import Loading from "../../Components/Loading";
import './style.css';

const UsersPage = () => {

    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {sendRequestGet} = SendRequest();

    useEffect(() => {
        async function request() {
            setIsLoading(true);
            const result = await sendRequestGet(usersURL);
            setUsersData(result);
            setIsLoading(false);
        }
        request();
    }, []);    

    return(
        isLoading ? (
            <Loading/>
        ) : (
        <div className='UsersPage'>
            <div className="users-page">
                <h1>Users</h1>
            </div>
            <div className="Users">
                {usersData?.users?.map((user) => {
                    return(
                        <div className="UserCard" key={user.id}>
                            <img src={user.image} alt="img" />
                            <h2><span>FirstName - </span>{user.firstName}</h2>
                            <h2><span>LastName - </span>{user.lastName}</h2>
                            <h3><span>Age - </span>{user.age}</h3>
                            <button className="go-to-user-page">
                                <Link to={`/UsersPage/${user.id}`} className="user-link">User Page</Link>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
        )
    )
}

export default UsersPage;