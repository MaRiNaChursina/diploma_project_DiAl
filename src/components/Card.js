import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import Modal from "../components/UI/Modal/Modal";

function Card(props) {
   const {card} = props;
   const [modalActive, setModalActive] = useState();
  return (
    <div className="cards">
        <img src={card.imgCard}/>
       <h2>{card.title}</h2>
       <p>Примерная цена:  {card.price} ₽</p> 
       <button onClick={() => setModalActive(true)}>Подробнее</button>
       <Modal  active={modalActive} setActive={setModalActive}>
          <div className="model__content-img">
            <img src={card.imgCard}/>
          </div>
          <h2 className="model__content-title">{card.title}</h2>
          <p className="model__content-description">Примерная цена:  {card.price} ₽</p>         
       </Modal>
    </div>
  );
}

export default Card;