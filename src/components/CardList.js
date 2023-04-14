import React from "react";
import Card from "./Card";

export default function CardList({cards}){
    const cardElements = cards.map(card => 
        <li key={card.id}><Card card = {card}/></li>
    )
    return(
        <ul>
            {cardElements}
        </ul>
    )
}