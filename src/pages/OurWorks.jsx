import React, { useEffect, useState } from "react";
import CatalogList from "../components/UI/CatalogCard/CatalogList";
import cards from "../data/catalogbd.js"

export default function OurWorks(){
    const [catalog,setCatalog] = useState("");
    
    useEffect(()=>{
        submitForm()
    },[])
    const submitForm = ()=>{
        
      
    
       fetch("http://dial.ru/catalogbd.php",{
            method:"GET",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            
        }).then(response => response.json())
        .then(response => {setCatalog(response);})
       
      
        
        
    }
   
    return(
        <div className="main__work">
            {/* <CatalogList cards = {cards}/> */}
            {catalog &&<><CatalogList catalog={catalog}/></>}
            
        </div>
    )
}