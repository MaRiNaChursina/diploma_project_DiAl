import React from "react";

import news from "../../../data/newsbd"
import News from "./News";

export default function NewsCard () {
    
    const description = news.map(news =>
    <li key={news.id}><News card = {news}/></li>
    )
    return(
        <ul>

           {description}
        </ul>
    )
}