import React from "react";
import { useParams } from "react-router-dom";


function News(props) {
    const {title}=useParams()
     const {card} = props;

     {if(title == card.title)
    return (
      <div className="NewsCards">
          <img src={ card.imgCard}/>
         <h2>{card.title}</h2>
         <p>{card.text}</p>
        
      </div>
    );}
  }
  
  export default News;