﻿import React from "react";
import CatalogList from "../components/UI/CatalogCard/CatalogList";
import cards from "../data/catalogbd.js"

export default function OurWorks(){
   
    return(
        <div className="Main">
            <CatalogList cards = {cards}/>
        </div>
    )
}