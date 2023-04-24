import React, { useState } from "react";
import NavMenu from "./NavMenu/NavMenu";
import style from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import NavMenuMobiles from "./NavMenuMobile/NavMenuMobiles";




export default function Header(){
   
    
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
   
    return (
        <header>
            <div className={style.header}>
                <div className={style.logo}>
                    <img className={style.img} src="./imges/logo.svg"/>
                    <p className={style.logo_p}>DiAl</p>
                </div>
                <div className={style.burgerMenu}>
                    {isDesktop? <NavMenu/>: <NavMenuMobiles />}
                </div>
            </div>
        </header>
    )
}