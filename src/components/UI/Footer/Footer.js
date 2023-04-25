import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <Link  to="/"  >Главная</Link >
                    <Link  to="work"  >Наши работы</Link >
                    <Link to="news"  >Полезная информация</Link>
                    <a >Доставка</a>
                    <a  >Заказ</a> {/*Предварительный расчет, описание о заказе, статус заказа*/}
                    <a  >Кто мы?</a>
        </footer>
    )
}

export default Footer