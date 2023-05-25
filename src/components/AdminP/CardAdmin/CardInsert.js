import React, { useState } from "react";

function CardInsert(props)
{
    const {card} = props;
    const [titles, setTitles] = useState(card.title);
    const [prices, setPrices] = useState(card.price);
    const [catalogNames, setCatalogNames] = useState(card.catalogName);
    const [lengths, setLengths] = useState(card.length);
    const [kitchens, setKitchens] = useState(card.form_kitchen);
    const [drawers, setDrawers] = useState(card.shape_of_the_upper_drawers);
    const [methods, setMethods] = useState(card.methods_of_opening_the_facade);
    const [facads, setFacads] = useState(card.facades);
    const [tables, setTables] = useState(card.table_top);
    const [catalogs, setCatalogs] = useState(card.catalog);
    const [walls, setWalls] = useState(card.wall_panel);
    const [loopses, setLoopses] = useState(card.loops);
    const [boxess, setBoxess] = useState(card.boxes);
    const [options, setOptions] = useState(card.box_option);
    const[answer, setAnswer] =useState (false);

    const submitForm = (e)=>{
        e.preventDefault();
        
        const sendData ={
            id:card.Id,
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
       fetch("http://dial.ru/upcard.php",{
            method:"POST",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(sendData)
        }).then(response =>  (response.status== 200)?setAnswer(true):setAnswer(false))
        
        
        
    }
    const submitForm1 = (e)=>{
        e.preventDefault();
        
        const sendData ={
            id:card.Id,
            
            
        }
        console.log(sendData)
       fetch("http://dial.ru/delcard.php",{
            method:"POST",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(sendData)
        }).then(response =>  (response.status== 200)?setAnswer(true):setAnswer(false))
        
        
        
    }

    return(
    <>
        {/* <img src={card.imgCard}/> */}
        <form >
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
        <button type="submit" onClick={submitForm}>Изменить</button>     
        </form>
        <button type="delet" onClick={submitForm1}>Удалить</button>
        
    </>
    )
}

export default CardInsert;