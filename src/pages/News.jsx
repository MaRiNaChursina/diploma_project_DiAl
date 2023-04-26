import React from "react";
import cards from "../data/newsbd.js"
import NewsList from "../components/UI/NewsCard/NewsList";

export default function OurWorks(){
   
    return(
        <div className="main__news">
            <NewsList cards = {cards}/>
        </div>
    )
}