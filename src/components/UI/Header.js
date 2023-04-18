import React from "react";
import NavMenu from "./NavMenu";

export default function Header(){
    return (
        <div className="header">
            <div className="header__Logo">
                <img src="./imges/logo.svg"/>
                <p>DiAl</p>
            </div>
            <NavMenu/>
        </div>
    )
}