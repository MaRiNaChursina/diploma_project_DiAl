import React from "react";

import CardsList from "../components/Main/CardsList";
import OrderForm from "../components/OrderForm/OrderForm";





export default function Main(){
   
    return(
        <div className="main">
            {/* <OrderForm/> */}
            <CardsList/>
        </div>
    )
}