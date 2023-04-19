import React, { useState } from "react";
import style from "./NavMenuMobile.module.css";
import {SlClose, SlMenu} from "react-icons/sl"


export default function NavMenuMobiles() {
    const [menuActive, setMenuActive] = useState(true);
    return(
        <div className={style.menu}>
           {menuActive ? <SlMenu className={style.logo} onClick={() => setMenuActive(false)}/>: <SlClose className={style.logo} onClick={() => setMenuActive(true)}/>}
           <div menuActive>
                <nav className={menuActive ? style.navLinkActive: style.navLink}>
                    <a className={style.link} >Главная</a>
                    <a className={style.link} >Наши работы</a>
                    <a className={style.link} >Полезная информация</a>
                    <a className={style.link} >Доставка</a>
                    <a className={style.link} >Заказ</a> {/*Предварительный расчет, описание о заказе, статус заказа*/}
                    <a className={style.link} >Кто мы?</a>
                </nav>
            </div>
        </div>
    )
}