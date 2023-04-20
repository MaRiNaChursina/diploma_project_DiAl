import React from "react";
import cards from "../data/bd";
import CardList from "./CardList";

function Cards() {
  return (
    <div className="app">
        <h1>Карты</h1>
        <CardList cards = {cards}/>
    </div>
  );
}

export default Cards;
