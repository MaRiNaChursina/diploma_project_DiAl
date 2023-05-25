import React from "react";
import Card from "./Card";
// import cards from "../data/bd";

export default function CardList(props){
    const {cards}=props;
    const {chekCard} =props;
    const cardElements = cards.map(cards => 
        <><Card card = {cards} chekCard={chekCard}/></>
    )
    return(
        <ul>
            {cardElements}
            
        </ul>
    )
}