import  { useState } from "react";
import { createRandomId } from "../../../Hook/CreateRandomID";


import './style.css';

const AddQuotes = ({quotesData, setQuotesData, addData}) => {

    const [newQuote, setNewQuote] = useState({
        author: '',
        quote: '',
    });

    const [img, setImg] = useState("");

    const createNewImg = (e) => {
        const images = URL.createObjectURL(e.target.files[0]);
        setImg(images);
    };

    const addFunc = (e) => {
        const {name, value} = e.target;
        setNewQuote({ ...newQuote, [name]: value });
    };

    const submitFunc = (e) => {
        e.preventDefault();
        const newObj = {
            id: createRandomId(quotesData),
            image: img,
            author: newQuote.author,
            quote: newQuote.quote,
            
        }
        addData(newObj)
        setNewQuote({
            author: '',
            quote: '',
        });
    };

    return(
        <div className="AddQuote">
            <form onSubmit={submitFunc}>
                <input type="file" name="image" onChange={createNewImg} />
                <input type="text" name="author" placeholder="Author" value={newQuote.author} onChange={addFunc} />
                <input type="text" name="quote" placeholder="Quote" value={newQuote.quote} onChange={addFunc} />
                <button className="add-quote">
                    Add Quote
                </button>
            </form>
        </div>
    )
}

export default AddQuotes;