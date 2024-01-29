import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { sendRequest2 } from "../../Hook/SendRequest";
import { generateIdURLs } from "../../Links";

import './style.css';

const User = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function request() {
            const idURLs = generateIdURLs(id);
            const result = await sendRequest2().sendRequestGet2(idURLs.usersIdURL);
            setUserData(result);
        }
        request();
    },[]);

    return(
        <div className="Userr">
            <button onClick={() => navigate(-1)} className="back-user">Back</button>
            <h1>{id}</h1>
            <div className="UserCard" key={userData?.id}>
               <img src={userData?.image} alt="img" />
               <h2><span>FirstName - </span>{userData?.firstName}</h2>
               <h2><span>LastName - </span>{userData?.lastName}</h2>
               <h3><span>Age - </span>{userData?.age}</h3>
            </div>
        </div>
    )
}
export default User;