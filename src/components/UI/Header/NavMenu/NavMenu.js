import React from "react";
import style from "./NavMenu.module.css"
import { Link } from "react-router-dom";

export default function NavMenu(){
    return(
        <nav className={style.NavList}>
            <Link to="/" className={style.link} >Главная</Link>
            <Link to="/work" className={style.link} >Наши работы</Link>
            <a className={style.link} >Полезная информация</a>
            <a className={style.link} >Доставка</a>
            <a className={style.link} >Заказ</a> {/*Предварительный расчет, описание о заказе, статус заказа*/}
            <a className={style.link} >Кто мы?</a>
        </nav>
    )
}