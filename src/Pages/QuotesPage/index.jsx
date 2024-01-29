import { useEffect, useState } from "react";
import {Images} from './Images';
import { SendRequest } from "../../Hook/SendRequest";
import { quotesURL } from "../../Links";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import AddQuotes from "../Forms/AddQuotes";

import './style.css';

const QuotesPage = () => {

    const [quotesData, setQuotesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {sendRequestGet} = SendRequest();

    useEffect(() => {
        async function request() {
            setIsLoading(true);
            const result = await sendRequestGet(quotesURL);
            setQuotesData(result);
            setIsLoading(false);
        }
        request();
    }, []);

    const addData = (data) => {
        setQuotesData({quotes: [...quotesData.quotes, data]});
    };

    return(
        isLoading ? (
            <Loading/>
        ) : (
        <div className="QuotesPage">
            <div className="quotes-page">
                <h1>Quotes</h1>
            </div>
            <div className="Quotes">
                {quotesData?.quotes?.map((quote) => {
                    const quoteImg = Images.find(image => image.id === quote.id);
                    return(
                        <div className="QuoteCard" key={quote?.id}> 
                        <img src={quote.image ? quote.image : quoteImg?.img} alt='img' />
                            <h2>{quote?.author}</h2>
                            <p>{quote?.quote}</p>
                            <button className="go-to-quote-page">
                                <Link to={`/QuotesPage/${quote?.id}`} className="quote-link">Quote Page</Link>
                            </button>
                            <h2>{quote?.id}</h2>
                        </div>
                    )
                })}
            </div>
            <AddQuotes addData={addData} quotesData={quotesData} setQuotesData={setQuotesData} />
        </div>
        )
    )
}

export default QuotesPage;