import React, { useState, useEffect, Component } from 'react';
import { useForm } from "react-hook-form";
import '../styles/index.scss';
import Footer from './footer';
import Wpis from './wpis';

function Warunki() {
    let [count, setCount] = useState({ loaded: false, inf: '', data: {} });
    const { register, handleSubmit } = useForm();
    const description = 'aaa'
    const regex1=/T/i;
    const regex2=/Z/i;

    useEffect(() => {
        //console.log(count.inf);
        select_qr()
    })

    const select_qr = async () => {
        try {
            const response = await fetch("https://apkareact.korelacja.eu/server/select")
            const jsonData1 = await response.json()
            //sortuję
            let jsonData = [...jsonData1].sort((a, b) => b.id - a.id);
            console.log(jsonData);

            //sprawdzam, czy data jest aktualna
            if (Object.keys(jsonData).length != Object.keys(count.data).length)
                setCount(count = { inf: count.inf, loaded: true, data: jsonData })

        } catch (error) {
            console.log(error.message);
        }
    }

    const handleInfo = (data) => {
        zmiana(data.info)
        console.log(data.info);
    }

    let zmiana = async (a) => {
        setCount(count = { loaded: false, inf: a, data: {} })
        //
        try {
            const response = await fetch("https://apkareact.korelacja.eu/server/add/?info="+a)
            const jsonData1 = await response.json()
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div>
            <div className='container_w'>
                <h1>Warunki wspinaczkowe</h1>
                <form className='form2' onSubmit={handleSubmit(handleInfo)}>
                    <input placeholder="Napisz informację o warunkach" type="text" name="info" {...register('info')} required /><br></br>
                    <input type="submit" className='btn2' value="Dodaj informację" />
                </form>
                <div className='info'>
                    <div className='cont_info'>
                        {count.loaded ? 
                        Object.keys(count.data).map(key => (
                            <Wpis key={key} id={count.data[key].id} info={count.data[key].info} data={count.data[key].data.replace(regex1, ' ').replace(regex2, '')}/>
                        ))
                        : <div>brak informacji/nie wczytano informacji</div>}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}


export default Warunki;