import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DataBD from "./DattaBD";

export default function  FormAdmin () {
    const [day,setDay] = useState("");
    const[cheked,setCheked] = useState(false);
    useEffect(()=>{
        submitForm()
    },[])
    const submitForm = ()=>{
       fetch("http://dial.ru/cart_list.php",{
            method:"GET",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            
        }).then(response => response.json())
        .then(response => {setDay(response);})
        
    }
    
 return(
    <>
    
         <NavLink to="card" onClick={()=>cheked?setCheked(false):setCheked(true)}>{cheked?"Вернутся назад":"Карточки товара"}</NavLink>  
         <NavLink>Статьи</NavLink>
         <NavLink>Просмотреть заказы</NavLink> 
         {cheked ?<> <Outlet /></>:<>
         {day &&<><DataBD day={day}/></>}</>}
        
    </>           
 )
}