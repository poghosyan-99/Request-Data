// import { productsData, setProductsData } from '../../ProductsPage';
import { useState } from "react";
import { createRandomId } from "../../../Hook/CreateRandomID";

import './style.css';

const AddProducts = ({addData, productsData, setProductsData}) => {

    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        description: '',
    });

    const [img, setImg] = useState("");

    const createNewImg = (e) => {
        const images = URL.createObjectURL(e.target.files[0]);
        setImg(images);
    };

    const addFunc = (e) => {
        const {name, value} = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const submitFunc = (e) => {
        e.preventDefault();
        const newObj = {
            id: createRandomId(productsData),
            image: img,
            title: newProduct.title,
            price: newProduct.price,
            description: newProduct.description,
        }
        addData(newObj);
        setNewProduct({
            title: '',
            price: '',
            description: '',
        });
    };

    return(
        <div className="AddProduct">
            <form onSubmit={submitFunc}>
                <input type="file" name="image" onChange={createNewImg} />
                <input type="text" name="title" placeholder="Title" value={newProduct.title} onChange={addFunc} />
                <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={addFunc} />
                <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={addFunc} />
                <button className="add-product">
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProducts;