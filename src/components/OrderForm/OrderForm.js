
import React from "react";
import { useState } from "react";

export default function OrderForm (){
    const [data, setData] = useState({
        first_name:"",
        phone:""
    })
    const handelChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value});
        
    }
    const submitForm = (e)=>{
        e.preventDefault();
        let dat = new Date();
        let ddat = dat.getDate();
        ddat=ddat+" "+(dat.getMonth()+1);
        ddat=ddat+" "+dat.getFullYear();
        const sendData ={
            first_name: data.first_name,
            phone: data.phone,
            date:ddat
        }
        console.log(sendData)
        fetch("http://dial.ru/index1.php",{
            method:"POST",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(sendData)
        })
        .then ((result)=>{
            sendData(result.data);
        })
    }
    return(
        <form onSubmit={submitForm} >
                <legend>Контактная информация</legend>
                <p><label htmlFor="first_name:">Как к Вам обращаться</label><input type="text" id="name" name="first_name" onChange={handelChange} value={data.first_name} required/></p>
                <p><label htmlFor="phone:">Номер телефона</label><input type="text" id="phone" name="phone" onChange={handelChange} value={data.phone} required/></p>
                <button type="submit" >Отправить форму</button>
        </form>
    )
}