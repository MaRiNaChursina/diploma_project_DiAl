import React from "react";

function Card(props) {
   const {card} = props;
  return (
    <div className="cards">
        <img src={card.imgCard}/>
       <h2>{card.title}</h2>
       <p>{card.price}</p>
    </div>
  );
}

export default Card;