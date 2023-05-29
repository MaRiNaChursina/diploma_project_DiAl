import React from "react";
import Card from "./Card";
// import cards from "../data/bd";

export default function CardList(props){
    const {cards}=props;
    const {chekCard} =props;
    const {mainCard} = props;
    const leng=cards.length; 
    const arr= cards.slice(-3);
    arr.reverse();
    const arr2=cards.slice(0);
    arr2.reverse();
    let k=cards.length;
    // const el = cards.reverse().slice(0, 3);
    const cardElements =mainCard?
    arr.map(cards => 
        { while (k!=leng-3){
             k--;
          return(
            <>
            <Card card = {cards} chekCard={chekCard} mainCard={mainCard}/>
            </>)  
        
        }}
    ):arr2.map(cards => 
        <>
        <Card card = {cards} chekCard={chekCard} mainCard={false}/>
        </>
    )
  
    return(
        <ul>
            {cardElements}
        </ul>
    )
}