import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from "react";
import { sendRequest2 } from "../../Hook/SendRequest";
import { generateIdURLs } from "../../Links";

import './style.css';

const Quote = () => {
    const navigate = useNavigate();
    const { id } = useParams(); 

    const [quoteData, setQuoteData] = useState({});

    useEffect(() => {
        async function request() {
            const idURLs = generateIdURLs(id);
            const result = await sendRequest2().sendRequestGet2(idURLs.quotesIdURL);
            setQuoteData(result);
        }
        request();
    }, []); 
    

    return(
        <div className="quotee">
            <button onClick={() => navigate(-1)} className="back-quote">Back</button>
            <h1>{id}</h1>
            <div className="QuoteCard" key={quoteData?.id}> 
                <h2>{quoteData?.author}</h2>
                <p>{quoteData?.quote}</p>
                <h2>{quoteData?.id}</h2>
            </div>
        </div>
    )
}

export default Quote;
