import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";



export default function CatalogList({cards}){
    const cardElements = cards.map(card => 
        <li key={card.id}> 
        <Link to={`/work/${card.catalogName}`} className="catalog__cards">
            <img src={ card.imgCard}/>
            <h2>{card.title}</h2> 
        </Link>
        </li>
    )
    return(
        <ul className="catalog__card">
            {cardElements}
        </ul>
    )
}