import React from "react";


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
                        <h2>{leng.news.title}</h2>
                        <p>{leng.news.discription}</p>
                    </div>
                </>
                
            )
    }

    
}