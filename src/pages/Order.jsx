import React from "react";
import { NavLink, Outlet } from "react-router-dom";





export default function Main(){
   
    return(
        <div className="main__order">
            <p></p>
            <NavLink to="orders">Сделать заказ</NavLink>
            <NavLink to="invoice">Произвести предварительный расчет</NavLink>
            <Outlet />
        </div>
    )
}