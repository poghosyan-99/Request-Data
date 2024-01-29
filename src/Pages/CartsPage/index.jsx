import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import { SendRequest } from "../../Hook/SendRequest";
import { cartsURL } from "../../Links";
import Loading from "../../Components/Loading";

import './style.css';

const CartsPage = () => {

  const [cartsData, setCartsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {sendRequestGet} = SendRequest();

  useEffect(() => {
    async function request() {
      setIsLoading(true);
      const result = await sendRequestGet(cartsURL);
      setCartsData(result);
      setIsLoading(false);
    }
    request();
  }, []);

  return (
    isLoading ? (
      <Loading/>
    ) : (
    <div className="CartsPage">
      <div className="carts-page">
        <h1>Carts</h1>
      </div>
      <div className="Carts">
        {cartsData?.carts?.map((cart) => {
          return (
            <div className="CartsCard" key={cart?.id}>
              <h2 className='cartId'>{cart?.id}</h2>
              <div className="ProductsList">
                {cart?.products.map((product) => {
                  return (
                    <div className="ProductItem" key={product?.id}>
                      <h3>{product?.title.slice(0, 15)}</h3>
                      <p>Price: ${product?.price}</p>
                      <p>Quantity: {product?.quantity}</p>
                      <p>Total: ${product?.total}</p>
                    </div>
                  );
                })}
              </div>
              <button className="go-to-cart-page">
                <Link to={`/CartsPage/${cart?.id}`} className="cart-link">Cart Page</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
    )
  );
};

export default CartsPage;
