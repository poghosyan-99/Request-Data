import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { sendRequest2 } from "../../Hook/SendRequest";
import { generateIdURLs } from "../../Links";

import './style.css';

const Product = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [productData, setProductData] = useState({});

    useEffect(() => {
        async function request() {
            const idURLs = generateIdURLs(id);
            const result = await sendRequest2().sendRequestGet2(idURLs.productsIdURL);
            setProductData(result);
        }
        request();
    }, []);

    return(
        <div className="productt">
            <button onClick={() => navigate(-1)} className="back-product">Back</button>
            <h1>{id}</h1>
            <div className="ProductCard" key={productData?.id}>
                <img src={productData.image ? productData.image : productData?.images?.[0]} alt="img" />
                <h2 className='title'>{productData?.title}</h2>
                <button className='price'>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span> $</span>{productData?.price}
                </button>
                <p className='description'><span>&#9931;</span>{productData?.description}</p>
                <h2>{productData?.id}</h2>
            </div>
        </div>
    )
}

export default Product;