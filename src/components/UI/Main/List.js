import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Carousel from "../Carousel/Carousel";

export default function List (props){
    const leng = props;
    const [modalActive, setModalActive] = useState();
    switch (leng.card.id){
        case leng.length-1:
            case leng.length-2:
                case leng.length -3:
            return(
            
                    <div className="cards">
                        {console.log(leng)}
                        <img src={ leng.card.imgCard}/>
                        <h2>{leng.card.title}</h2>
                        <p>Примерная цена:  {leng.card.price} ₽</p> 
                        <button onClick={() => setModalActive(true)}>Подробнее</button>
                        <Modal  active={modalActive} setActive={setModalActive}>
                            <Carousel>
                                <div className="item item-1 model__content-img">
                                <img src={leng.card.imgCard}/>
                                </div>
                                <div className="item item-2 model__content-img">
                                <img src={leng.card.imgCard}/>
                                </div>
                                <div className="item item-3 model__content-img">
                                <img src={leng.card.imgCard}/>
                                </div>
                                <div className="item item-4 model__content-img">
                                <img src={leng.card.imgCard}/>
                                </div>
                            </Carousel>
                            <h2 className="model__content-title">{leng.card.title}</h2>
                            <p className="model__content-description">Примерная цена:  {leng.card.price} ₽</p>         
                        </Modal>
                    </div>
                   
               
                
            )
    }

    
}