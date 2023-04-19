import React from "react";
import style from "./NavMenu.module.css"

export default function NavMenu(){
    return(
        <nav className={style.NavList}>
            <a className={style.link} >Главная</a>
            <a className={style.link} >Наши работы</a>
            <a className={style.link} >Полезная информация</a>
            <a className={style.link} >Доставка</a>
            <a className={style.link} >Заказ</a> {/*Предварительный расчет, описание о заказе, статус заказа*/}
            <a className={style.link} >Кто мы?</a>
        </nav>
    )
}