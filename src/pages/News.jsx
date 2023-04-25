﻿import React from "react";
import cards from "../data/newsbd.js"
import NewsList from "../components/UI/NewsCard/NewsList";

export default function OurWorks(){
   
    return(
        <div className="Main">
            <NewsList cards = {cards}/>
        </div>
    )
}