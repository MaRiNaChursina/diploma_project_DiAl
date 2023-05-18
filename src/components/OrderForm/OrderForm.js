import axios from "axios";
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
        const sendData ={
            first_name: data.first_name,
            phone: data.phone
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
                <p><label htmlFor="first_name:">Имя <em>*</em></label><input type="text" id="name" name="first_name" onChange={handelChange} value={data.first_name}/></p>
                <p><label htmlFor="phone:">E-mail</label><input type="text" id="phone" name="phone" onChange={handelChange} value={data.phone}/></p>
                <button type="submit" >Отправить форму</button>
        </form>
    )
}