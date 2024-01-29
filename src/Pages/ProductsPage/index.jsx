import { useEffect, useState } from 'react';
import {SendRequest} from '../../Hook/SendRequest';
import {productsURL} from '../../Links';
import { Link } from "react-router-dom";
import Loading from '../../Components/Loading';
import AddProducts from '../Forms/AddProducts';

import './style.css';

const ProductsPage = () => {

    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {sendRequestGet} = SendRequest();

    useEffect(() => {
        async function request() {
            setIsLoading(true);
            const result = await sendRequestGet(productsURL);
            setProductsData(result);
            setIsLoading(false);
        }
        request();
    }, []);


    const addData = (data) => {
        setProductsData({products: [...productsData.products, data]});
    };

    return(
        isLoading ? (
            <Loading />
        ) : (
            <div className="ProductsPage">
                <div className="products-page">
                    <h1>Products</h1>
                </div>
                <div className="Products">
                    {productsData?.products?.map((product) => {
                        return(
                            <div className="ProductCard" key={product?.id}>
                                <img src={product.image ? product.image : product?.images[0]} alt="img" />
                                <h2 className='title'>{product?.title}</h2>
                                <button className='price'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span> $</span>{product?.price}
                                </button>
                                <p className='description'><span>&#9931;</span>{product?.description}</p>
                                <button className="go-to-product-page">
                                    <Link to={`/ProductsPage/${product?.id}`} className="product-link">Product Page</Link>
                                </button>
                                <h2>{product?.id}</h2>
                            </div>
                        )
                    })}
                </div>
                <AddProducts addData={addData} productsData={productsData} setProductsData={setProductsData} />
            </div>
        )
    )
}

export default ProductsPage;
