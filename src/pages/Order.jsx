import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";





export default function Main(){
   const [cheack, setCheack] = useState(false);
   const [cheack1, setCheack1] = useState(false);
    return(
        <div className="main__order">
            <div className="main_order_main">
            {!cheack1 &&<Link to="invoice" className="main__order_link" onClick={()=>cheack?setCheack(false):setCheack(true)}>
                {cheack?<p>Предварительный расчет</p>:<><p>Вы хотите узнать примерную стоимость кухонного гарнитура? Можете </p>
            <NavLink >произвести предварительный расчет</NavLink></>}
            </Link>}
            {!cheack && <Link to="orders" className="main__order_link" onClick={()=>cheack1?setCheack1(false):setCheack1(true)}>
                {cheack1?<p>Сделать заказ</p>:<><p>Если Вам необходима другая корпусная мебель, с радостью ждем Вашего заказа!
            </p>
            <NavLink  >Сделать заказ</NavLink></>}
            </Link>}
            </div>
            {(cheack || cheack1) && <Outlet />}
        </div>
    )
}