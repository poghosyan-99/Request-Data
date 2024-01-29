import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { sendRequest2 } from "../../Hook/SendRequest";
import { generateIdURLs } from "../../Links";

import './style.css';

const Cart = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        async function request() {
            const idURLs = generateIdURLs(id);
            const result = await sendRequest2().sendRequestGet2(idURLs.cartsIdURL);
            setCartData(result);
        }
        request();
    }, []);

    const product = cartData?.products?.[1] || [];

    return (
        <div className="cartt">
            <button onClick={() => navigate(-1)} className="back-cart">Back</button>
            <h1>{id}</h1>
            <div className="CartsCard" key={cartData?.id}>
                <h2 className='cartId'>{cartData?.id}</h2>
                <div className="ProductsList">
                    <div className="ProductItem">
                        <h3>{product?.title}</h3>
                        <p>Price: ${product?.price}</p>
                        <p>Quantity: {product?.quantity}</p>
                        <p>Total: ${product?.total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
