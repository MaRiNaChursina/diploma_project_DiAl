import React from "react";
import cards from "../../../data/bd";
import news from "../../../data/newsbd";
import List from "./List";
import CardNews from "./CardNews";


export default function CardsList(){
    const cardElement = cards.length;
    const newsLength = news.length;
    const newsList = news.map(news => 
        <li key={news.id}><CardNews newsLength={newsLength} news={news}/></li>);
    
    const cardElements = cards.map(card => 
        <li key={card.id}><List  length={cardElement} card={card}/></li>
    )
    return(
        <>
            <ul>
                {cardElements}
                
            </ul>
            <ul>
                {newsList}
                
            </ul>
        </>
    )
}

