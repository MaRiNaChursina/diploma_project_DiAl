import React, { useState } from "react";
import style from "./NavMenuMobile.module.css";
import {SlClose, SlMenu} from "react-icons/sl"
import { Link } from "react-router-dom";




export default function NavMenuMobiles() {
    const [menuActive, setMenuActive] = useState(true);
    return(
        <div className={style.menu}>
           {menuActive ? <SlMenu className={style.logo} onClick={() => setMenuActive(false)}/>: <SlClose className={style.logo} onClick={() => setMenuActive(true)}/>}
           <div menuActive>
                <nav className={menuActive ? style.navLinkActive: style.navLink}>
                    <Link to="/" className={style.link} >Главная</Link>
                    <Link to="/work" className={style.link} >Наши работы</Link>
                    <a className={style.link} >Полезная информация</a>
                    <a className={style.link} >Доставка</a>
                    <a className={style.link} >Заказ</a> {/*Предварительный расчет, описание о заказе, статус заказа*/}
                    <a className={style.link} >Кто мы?</a>
                </nav>
            </div>
        </div>
    )
}