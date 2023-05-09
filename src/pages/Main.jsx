import React from "react";

import CardsList from "../components/Main/CardsList";
import OrderForm from "../components/OrderForm/OrderForm";
import LogoAdmin from "../components/AdminP/LogoAdmin";





export default function Main(){
   
    return(
        <div className="main">
            <LogoAdmin/>
            {/* <CardsList/> */}
        </div>
    )
}