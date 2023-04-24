import React from "react";
import style from "./NavMenu.module.css"
import { NavLink } from "react-router-dom";

export default function NavMenu(){
    return(
        <nav className={style.NavList}>
            <NavLink  to="/" className={style.link} >Главная</NavLink >
            <NavLink  to="/work" className={style.link} >Наши работы</NavLink >
            <a className={style.link} >Полезная информация</a>
            <a className={style.link} >Доставка</a>
            <a className={style.link} >Заказ</a> {/*Предварительный расчет, описание о заказе, статус заказа*/}
            <a className={style.link} >Кто мы?</a>
        </nav>
    )
}