import React from "react";
import { Link } from "react-router-dom";


export default function CardNews (props){
    const leng = props;
    switch (leng.news.id){
        case leng.newsLength-1:
             case leng.newsLength-2:
                   case leng.newsLength-3: 
            return(
                <>
                    <div className="news">
                        <img src={ leng.news.imgCard}/>
                        <div className="news__text">
                            <h2>{leng.news.title}</h2> 
                            <p>{leng.news.discription}</p>
                            <Link to={`/news/${leng.news.title}`} className="catalog__cards">
                                Подробнее
                            </Link>
                        </div>
                    </div>
                </>
                
            )
    }

    
}