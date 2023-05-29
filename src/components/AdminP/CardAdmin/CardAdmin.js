import React, { useState } from "react";
import Cards from "../../Cards";
import { Link, Outlet } from "react-router-dom";

function CardAdmin(){
    const chekCard = true;
    const [chekadd,setChekadd] = useState (false)

    return(
        <>
        <br/>
         <Link to="add" onClick={()=>chekadd?setChekadd(false):setChekadd(true)}>{chekadd?<>Вернутся к картам</>:<>Добавить</>}</Link>
          {chekadd? <> <Outlet /></>:<Cards chekCard={chekCard} />} 
        </>
    )
}

export default CardAdmin;