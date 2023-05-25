import React, { useState } from "react";

function CardAdd (){
    const [imgCard, setImgCard] = useState(null);
    const [titles, setTitles] = useState(null);
    const [prices, setPrices] = useState(null);
    const [catalogNames, setCatalogNames] = useState(null);
    const [lengths, setLengths] = useState(null);
    const [kitchens, setKitchens] = useState(null);
    const [drawers, setDrawers] = useState(null);
    const [methods, setMethods] = useState(null);
    const [facads, setFacads] = useState(null);
    const [tables, setTables] = useState(null);
    const [catalogs, setCatalogs] = useState(null);
    const [walls, setWalls] = useState(null);
    const [loopses, setLoopses] = useState(null);
    const [boxess, setBoxess] = useState(null);
    const [options, setOptions] = useState(null);
    const[answer, setAnswer] =useState (false);

    const submitForm = (e)=>{
        e.preventDefault();
        
        const sendData ={
            imgCard:imgCard,
            length:lengths,
            form_kitchen:kitchens,
            shape_of_the_upper_drawers:drawers,
            methods_of_opening_the_facade:methods,
            facades:facads,
            table_top:tables,
            wall_panel:walls,
            loops:loopses,
            boxes:boxess,
            catalog:catalogs,
            box_option:options,
            title:titles,
            price:prices,
            catalogName:catalogNames,
            
        }
        console.log(sendData)
       fetch("http://dial.ru/addCard.php",{
            method:"POST",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(sendData)
        }).then(response => console.log(response))
           

                // (response.status== 200)?setAnswer(true):setAnswer(false)
       
       
        
        
        
    }

    return(
    <>
        {/* <img src={card.imgCard}/> */}
        <form onSubmit={submitForm}>
        <input value={imgCard} onChange={(e)=>setImgCard(e.target.value)}/><br/>
        <input value={titles} onChange={(e)=>setTitles(e.target.value)}/><br/>
        <input value={prices} onChange={(e)=>setPrices(e.target.value)}/><br/>
        <input value={catalogNames} onChange={(e)=>setCatalogNames(e.target.value)}/><br/>
        <input value={lengths} onChange={(e)=>setLengths(e.target.value)}/><br/>
        <input value={kitchens} onChange={(e)=>setKitchens(e.target.value)}/><br/>
        <input value={drawers} onChange={(e)=>setDrawers(e.target.value)}/><br/>
        <input value={methods} onChange={(e)=>setMethods(e.target.value)}/><br/>
        <input value={facads} onChange={(e)=>setFacads(e.target.value)}/><br/>
        <input value={tables} onChange={(e)=>setTables(e.target.value)}/><br/>
        <input value={catalogs} onChange={(e)=>setCatalogs(e.target.value)}/><br/>
        <input value={walls} onChange={(e)=>setWalls(e.target.value)}/> <br/>
        <input value={loopses} onChange={(e)=>setLoopses(e.target.value)}/><br/>
        <input value={boxess} onChange={(e)=>setBoxess(e.target.value)}/><br/>
        <input value={options} onChange={(e)=>setOptions(e.target.value)}/> <br/>
        <button type="submit" >Добавить</button>     
        </form>
        
    </>
    )
}

export default CardAdd;