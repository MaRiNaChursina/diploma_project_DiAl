import React, { useState } from "react";
import Modal from "../UI/Modal/Modal";
import Carousel from "../UI/Carousel/Carousel";
import { motion } from "framer-motion";

export default function List (props){

    const leng = props;
    const [modalActive, setModalActive] = useState();

    const textAnimation = {
        hidden:{
            x: - 100 ,
            opacity: 0,
        }, 
        visible : {
            x: 0,
            opacity: 1,
        },
    }


    switch (leng.card.id){
        case leng.length-1:
            case leng.length-2:
                case leng.length -3:

            return(
                <motion.div initial= "hidden"
                whileInView="visible" className="cards">
                    {console.log(leng)}
                    <img src={ leng.card.imgCard}/>
                    <motion.h2 variants={textAnimation}>{leng.card.title}</motion.h2>
                    <motion.p variants={textAnimation}>Примерная цена:  {leng.card.price} ₽</motion.p> 
                    <motion.button variants={textAnimation} onClick={() => setModalActive(true)}>Подробнее</motion.button>
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
                </motion.div>  
            )

    }

    
}