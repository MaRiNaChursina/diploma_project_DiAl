import React, { useState } from "react";
import style from "./NavMenuMobile.module.css";
import {SlClose, SlMenu} from "react-icons/sl"
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"




export default function NavMenuMobiles() {
    const [menuActive, setMenuActive] = useState(true);
    return(
        <div className={style.menu}>
           {menuActive ? <SlMenu className={style.logo} onClick={() => setMenuActive(false)}/>: <SlClose className={style.logo} onClick={() => setMenuActive(true)}/>}
           <div menuActive >
                <motion.nav  className={menuActive ? style.navLinkActive: style.navLink}>
                    <NavLink  to="/" className={style.link} >Главная</NavLink >
                    <NavLink  to="work" className={style.link} >Наши работы</NavLink >
                    <NavLink to="news" className={style.link} >Полезная информация</NavLink>
                    <a className={style.link} >Доставка</a>
                    <NavLink to="order" className={style.link} >Заказ</NavLink> {/*Предварительный расчет, описание о заказе, статус заказа*/}
                    <a className={style.link} >Кто мы?</a>
                </motion.nav>
            </div>
        </div>
    )
}