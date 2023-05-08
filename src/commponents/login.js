import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Zgloszenie from './zgloszenie';

function Login() {
    let [count, setCount] = useState({ log: '', passwd: ''});
    const { register, handleSubmit } = useForm();

    const handleRegistration = (data) => {
        zmiana(data.log, data.passwd)
        console.log(data);
    }

    let zmiana = async (a, b) => {
        setCount(count = { log: a, passwd: b })
        try {
            const res = await fetch("https://apkareact.korelacja.eu/server/select_login")
            const jsonData = await res.json()
            console.log(jsonData)

            let check = false
            for (let i = 0; i < jsonData.length; i++) {
                if (jsonData[i].login == a && jsonData[i].password == b)
                    check = true
            }

            if (check) {
                document.querySelector('.form_login').style.display = 'none'
                document.querySelector('.lb').style.display = 'none'
                document.querySelector('.container_zgł').style.display = 'inline-block'

            }

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <div className='container_zgł'>
                <Zgloszenie login={count.log}></Zgloszenie>
            </div>
            <form onSubmit={handleSubmit(handleRegistration)} className="form_login">
                <input placeholder="Nazwa użytkownika" type="text" name="log" {...register('log')} required /><br></br>
                <input placeholder="Hasło" type="password" name="passwd" {...register('passwd')} required /><br></br>
                <input type="submit" value="Zaloguj" /> <br /><br />
            </form>
            <div className='lb'>
                <Link to="/react-app-tpn-kl/register">Nie masz jeszcze konta? Zarejestruj się</Link>
            </div>
        </div>
    );
}


export default Login;