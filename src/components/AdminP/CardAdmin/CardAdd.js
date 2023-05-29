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
        <h2>Создание нового продукта</h2>
        <form onSubmit={submitForm}>
            <label> Указать полное название картинки:
        <input value={imgCard} onChange={(e)=>setImgCard(e.target.value)}/></label><br/>
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
        <button type="submit" >Добавить</button>     
        </form>
        
    </>
    )
}

export default CardAdd;