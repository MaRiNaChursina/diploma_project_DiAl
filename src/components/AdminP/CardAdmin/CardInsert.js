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
        <h2>Данные о {titles}</h2>
        <form >
        <label > Название продукта: 
        <input value={titles} onChange={(e)=>setTitles(e.target.value)}/> </label><br/>
        <label> Стоимость продукта: 
            <input value={prices} onChange={(e)=>setPrices(e.target.value)}/></label><br/>
        <label> Название каталога:
            <input value={catalogNames} onChange={(e)=>setCatalogNames(e.target.value)}/></label><br/>
        <label>Общая дллина изделия:
            <input value={lengths} onChange={(e)=>setLengths(e.target.value)}/></label><br/>
        <label>Форма изделия:
            <input value={kitchens} onChange={(e)=>setKitchens(e.target.value)}/></label><br/>
        <label> Способ открывания:
            <input value={drawers} onChange={(e)=>setDrawers(e.target.value)}/></label><br/>
        <label>Фасады:
            <input value={methods} onChange={(e)=>setMethods(e.target.value)}/></label><br/>
        <label>Название цвета:
            <input value={facads} onChange={(e)=>setFacads(e.target.value)}/></label><br/>
        <label>Петли:
            <input value={tables} onChange={(e)=>setTables(e.target.value)}/></label><br/>
        <label>Ящики:
            <input value={catalogs} onChange={(e)=>setCatalogs(e.target.value)}/></label><br/>
        <label>Дополнительные параметры:
            <input value={walls} onChange={(e)=>setWalls(e.target.value)}/></label> <br/>
        <label>Дополнительные параметры:
            <input value={loopses} onChange={(e)=>setLoopses(e.target.value)}/></label><br/>
        <label>Дополнительные параметры:
            <input value={boxess} onChange={(e)=>setBoxess(e.target.value)}/></label><br/>
        <label>Дополнительные параметры:
            <input value={options} onChange={(e)=>setOptions(e.target.value)}/></label> <br/>
        <button type="submit" onClick={submitForm}>Изменить</button>     
        </form>
        <button type="delet" onClick={submitForm1}>Удалить</button>
        
    </>
    )
}

export default CardInsert;