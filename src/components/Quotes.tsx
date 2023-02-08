import axios from "axios";
import { useEffect, useState } from "react";
import { Quotes} from "../models/Quote";

export function Quote(){
    const [quotes, setQuotes] = useState <Quotes[]>([]);




    useEffect(() => {
        axios.get<Quotes[]>('https://grandcircusco.github.io/demo-apis/quotes.json')
        .then(response => setQuotes(response.data))
    });

    return(
        <div className="Quotes">
            <ul>
                {quotes.map((quote) => <li>{quote.author}: {quote.text}</li>)}
            </ul>
        </div>
    )
}