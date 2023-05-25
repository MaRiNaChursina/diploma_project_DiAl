import React, { useEffect, useState } from "react";
// import cards from "../data/bd";
import CardList from "./CardList";


function Cards(props) {
  const {chekCard}=props
  const [cards,setCards] = useState("");
    
    useEffect(()=>{
        submitForm()
    },[])
    const submitForm = ()=>{
        
      
    
    
       fetch("http://dial.ru/cardourwork.php",{
            method:"GET",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            
        }).then(response => response.json())
        .then(response => {setCards(response);})
       
      
        
        
    }
  return (
    <div className="cart">
        <h1>Наши работы</h1>
        {cards &&<><CardList cards = {cards} chekCard={chekCard}/></>}
        
        
    </div>
  );
}

export default Cards;
