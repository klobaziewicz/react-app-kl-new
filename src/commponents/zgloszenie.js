import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

function Zgloszenie(props) {
    let [count, setCount] = useState({ login: props.login, loaded: false, droga: {}, wybrana_droga: '', liczba_osob: '', data: '' });
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        if (!count.loaded)
            select_dr()
    })

    const select_dr = async () => {
        try {
            const response = await fetch("https://apkareact.korelacja.eu/server/select_drogi")
            const jsonData = await response.json()
            console.log(jsonData);

            setCount(count = { loaded: true, droga: jsonData, wybrana_droga: count.wybrana_droga })
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleRegistration = (data) => {
        console.log(data);
        zmiana(data)
    }

    let zmiana = async (a) => {
        setCount(count = { loaded: true, droga: count.droga, wybrana_droga: count.wybrana_droga, liczba_osob: a.liczba_osob, data: a.data })
        //
        try {
            //
            const response = await fetch("https://apkareact.korelacja.eu/server/insert_zgloszenia/?login="+props.login+"&droga="+count.wybrana_droga+"&data="+a.data+"&liczba_osob="+a.liczba_osob)
            const jsonData1 = await response.json()
        } catch (error) {
            console.log(error.message);
        }
    
    }

    return (
        <div className='zgloszenie'>
            <h2>zalogowano jako: {props.login}</h2>
            <div className='form_zgloszenie'>
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <input placeholder="Ilość osób" type="number" name="liczba_osob" {...register('liczba_osob')} required /><br></br>
                    <input type="date" name="data" {...register('data')} required /><br></br>

                    <select onChange={(event) => setCount(count = { wybrana_droga: event.target.value })} value={count.wybrana_droga}>
                        {count.loaded ?
                            Object.keys(count.droga).map(key => (
                                <option key={key} name={count.droga[key].droga} value={count.droga[key].droga}>{count.droga[key].droga}</option>
                            ))
                            : <option value='a' />}
                    </select> <br />

                    <input type="submit" value="Dodaj" />
                </form>
            </div>
        </div>
    );
}


export default Zgloszenie;