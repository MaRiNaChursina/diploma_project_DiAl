import React from "react";
import style from "./NavMenu.module.css"
import { NavLink } from "react-router-dom";

export default function NavMenu(){
    return(
        <nav className={style.NavList}>
            <NavLink  to="/" className={style.link} >Главная</NavLink >
            <NavLink  to="/work" className={style.link} >Наши работы</NavLink >
            <NavLink to="news" className={style.link} >Полезная информация</NavLink>
            <a className={style.link} >Доставка</a>
            <NavLink to="order" className={style.link} >Заказ</NavLink> {/*Предварительный расчет, описание о заказе, статус заказа*/}
            <a className={style.link} >Кто мы?</a>
        </nav>
    )
}