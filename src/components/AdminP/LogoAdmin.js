import React from "react";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";


export default function LogoAdmin (){
    const [data, setData] = useState({
        username:"",
        password:""
    })
    const handelChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value});
        
    }
  
    const submitForm = (e)=>{
        e.preventDefault();
        const sendData ={
            username: data.username,
            password: data.password
        }
        
        console.log(sendData)
        fetch("http://logo.ru/do_login.php",{
            method:"POST",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(sendData)
        })
        .then ((result)=>{
            console.log(result);
            if (result.redirected == true) {return(<><h1>dsfse</h1></>); }
        })
    }

   return( 
        
             <>
                <form onSubmit={submitForm} >
                        <legend>Контактная информация</legend>
                        <p><label htmlFor="username">Имя <em>*</em></label><input type="text" id="username" name="username" onChange={handelChange} value={data.username}/></p>
                        <p><label htmlFor="password">Пароль</label><input type="password" id="password" name="password" onChange={handelChange} value={data.password}/></p>
                        <button type="submit" >Отправить форму</button>
                        
                </form>
               
        </>
        )
        
    
}