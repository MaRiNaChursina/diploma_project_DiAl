import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";



export default function CatalogList(props){
    const {catalog} =props;
    const cardElements = catalog.map(days => 
        <li key={days.id}> 
        <Link to={`/work/${days.catalogName}`} className="catalog__cards">
            <img src={ days.imgCard}/>
            <h2>{days.title}</h2> 
        </Link>
        </li>
    )
    return(
        <ul className="catalog__card">
            {cardElements}
        </ul>
    )
}