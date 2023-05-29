import React, { useEffect, useState } from "react";

import CardsList from "../components/Main/CardsList";
import OrderForm from "../components/OrderForm/OrderForm";
import LogoAdmin from "../components/AdminP/LogoAdmin";
import InvoiceForm from "../components/OrderForm/InvoiceForm";
import Grafic from "../components/AdminP/Grafic";





export default function Main(){
    const [cards,setCards] = useState("");
    
    useEffect(()=>{
        submitForm()
    },[])

    const submitForm = ()=>{
        
      
    
    
       fetch("http://dial.ru/cardourwork.php",{
            method:"GET",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            
        }).then(response => response.json())
        .then(response => {setCards(response);})
       
      
        
        
    }
    return(
        <div className="main">
            {/* <Grafic/> */}
            {/* <LogoAdmin/> */}
            <CardsList cards={cards}/>
            {/* <InvoiceForm/> */}
        </div>
    )
}