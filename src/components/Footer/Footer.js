import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <footer>
            <div className="footer">
                <Link  to="/"  >Главная</Link >
                <Link  to="work"  >Наши работы</Link >
                <Link to="news"  >Полезная информация</Link>
                <div className="footer__logo">
                    <img src="./imges/logo.svg"/>
                    <p>DiAl</p>

                </div>
                <a >Доставка</a>
                <a  >Заказ</a> {/*Предварительный расчет, описание о заказе, статус заказа*/}
                <a  >Кто мы?</a>
                <Link to='admin'>Для сотрудников</Link>
            </div>
            <div className="footer__document">
                <p>Website author:</p>
                <a href="https://github.com/MaRiNaChursina/diploma_project_DiAl/tree/master">Marina Chursina</a>
            </div>  
        </footer>
    )
}

export default Footer