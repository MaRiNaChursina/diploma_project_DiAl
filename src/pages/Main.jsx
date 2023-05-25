import React from "react";

import CardsList from "../components/Main/CardsList";
import OrderForm from "../components/OrderForm/OrderForm";
import LogoAdmin from "../components/AdminP/LogoAdmin";
import InvoiceForm from "../components/OrderForm/InvoiceForm";
import Grafic from "../components/AdminP/Grafic";





export default function Main(){
   
    return(
        <div className="main">
            {/* <Grafic/> */}
            {/* <LogoAdmin/> */}
            <CardsList/>
            {/* <InvoiceForm/> */}
        </div>
    )
}