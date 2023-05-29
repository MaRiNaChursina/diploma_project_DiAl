import React from "react";
// import card from "../../data/bd";
import news from "../../data/newsbd";
import CardNews from "./CardNews";
import style from "./Main.module.css";
import Cards from "../Cards";
import { Link } from "react-router-dom";


export default function CardsList(props){
    const {cards} = props;
      
    const newsLength = news.length;
    const newsList = news.map(news => 
        <CardNews className={style.main__card_news} key={news.id} newsLength={newsLength} news={news}/>);
   

        newsList.reverse();
    return(
        <div className={style.main}>
            <div className={style.main__new_work}>
                
                <Cards cards = {cards} chekCard={true} mainCard={true}/>
            </div>
            <div className={style.main__new_news}>
                {newsList}
                
            </div>
        </div>
    )
}

