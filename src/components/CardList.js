import React from "react";
import Card from "./Card";
import cards from "../data/bd";

export default function CardList(){
    
    const cardElements = cards.map(cards => 
        <li key={cards.id}><Card card = {cards}/></li>
    )
    return(
        <ul>
            {cardElements}
            
        </ul>
    )
}