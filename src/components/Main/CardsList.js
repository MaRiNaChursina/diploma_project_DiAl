import React from "react";
import cards from "../../data/bd";
import news from "../../data/newsbd";
import List from "./List";
import CardNews from "./CardNews";
import style from "./Main.module.css";


export default function CardsList(){
    const cardElement = cards.length;
    const newsLength = news.length;
    const newsList = news.reverse().map(news => 
        <CardNews className={style.main__card_news} key={news.id} newsLength={newsLength} news={news}/>);
    const cardElements = cards.reverse().map(card => 
        <List key={card.id} length={cardElement} card={card}/>
    )
   
    return(
        <div className={style.main}>
            <div className={style.main__new_work}>
                {cardElements}
                
            </div>
            <div className={style.main__new_news}>
                {newsList}
                
            </div>
        </div>
    )
}

