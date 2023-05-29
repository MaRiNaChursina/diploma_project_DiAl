import React, { useState } from "react";
import Modal from "../components/UI/Modal/Modal";
import Carousel from "./UI/Carousel/Carousel";
import { useParams } from "react-router-dom";
import CardInsert from "./AdminP/CardAdmin/CardInsert";

function Card(props) {
  const {catalogName}=useParams()
   const {card} = props;
   const {chekCard} =props;
   const {mainCard} = props;
   const [modalActive, setModalActive] = useState();
   if (chekCard && !mainCard){
    return (
      <div className="cards">
          <img src={ card.imgCard}/>
        <h2>{card.title}</h2>
        <p>Примерная цена:  {card.price} ₽</p> 
        <button onClick={() => setModalActive(true)}>Подробнее</button>
        <Modal  active={modalActive} setActive={setModalActive}>
          <CardInsert card={card}/>
           
        </Modal>
      </div>
    );
   }
    else if(catalogName == card.catalogName || mainCard)
       return (
          <div className="cards">
              <img src={ card.imgCard}/>
            <h2>{card.title}</h2>
            <p>Примерная цена:  {card.price} ₽</p> 
            <button onClick={() => setModalActive(true)}>Подробнее</button>
            <Modal  active={modalActive} setActive={setModalActive}>
                <Carousel>
                  <div className="item item-1 model__content-img">
                    <img src={card.imgCard}/>
                  </div>
                  <div className="item item-2 model__content-img">
                    <img src={card.imgCard}/>
                  </div>
                  <div className="item item-3 model__content-img">
                    <img src={card.imgCard}/>
                  </div>
                  <div className="item item-4 model__content-img">
                    <img src={card.imgCard}/>
                  </div>
                </Carousel>
                <h2 className="model__content-title">{card.title}</h2>
                <p className="model__content-description">Примерная цена:  {card.price} ₽</p>         
            </Modal>
          </div>
        );}
   


export default Card;