import React, { useState } from "react";
import ParamOrder from "./ParamOrder";
import Grafic from "./Grafic";

 function DataBD (props){
    const [chek,setChek] = useState(false)
    const {day} = props;
    let days=[];
    let kol=[];
    let n=0,k=0;
    const el = day.map(item => 
    <li key={item.Id}>
        <ParamOrder item={item}/>
    </li>)
    for(let i=0;i<day.length-1;i++){
        if (day[i].date !== day[i+1].date ){
            k=0;
            n++;
        }
        k++;
        days[n]=day[i].date;
        kol[n]=k; 
    }
   
     
    return(
        <>
        <Grafic days={days} kol={kol}/>
        <button onClick={()=> chek?setChek(false):setChek(true)}>Посмотреть заказы полученные из сайта</button>
        {chek && <ul>
            {el}
            
        </ul>}
        
        
        </>
    )
}
export default DataBD;