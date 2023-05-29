import React, { useEffect, useState } from "react";
// import cards from "../data/bd";
import CardList from "./CardList";
import { Link } from "react-router-dom";


function Cards(props) {
  const {chekCard}=props;
  const {mainCard}=props;
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
        {!chekCard && !mainCard && <div className="cart__back"><Link to="work" >Вернутся назад</Link></div>}
        <h1>Наши работы</h1>
        {mainCard && <div className="cart__about"><Link  to="work">Подробнее</Link></div>}
        {cards &&<><CardList cards = {cards} chekCard={chekCard} mainCard={mainCard}/></>}
        
        
    </div>
  );
}

export default Cards;
