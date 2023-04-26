import React from "react";
import { useParams } from "react-router-dom";


function News(props) {
    const {title}=useParams()
     const {card} = props;

     {if(title == card.title)
    return (
      <div className="news__cards">
         <h2>{card.title}</h2>
         <img src={ card.imgCard}/>
         <p>{card.text}</p>
        
      </div>
    );}
  }
  
  export default News;