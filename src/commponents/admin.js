import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";


function Admin() {
    let [count, setCount] = useState({ loaded: false, data: {} });

    useEffect(() => {
        if (!count.loaded)
            select_zgloszenia()
    })

    let select_zgloszenia = async () => {
        try {
            const res = await fetch("https://apkareact.korelacja.eu/server/select_zgloszenia")
            const jsonData = await res.json()
            setCount(count = { loaded: true, data: jsonData })
            console.log(jsonData)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='container_admin'>
            <h4>Panel admina</h4>
            <div className='lista_zgloszen'>
                <table>
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>login</th>
                            <th>droga</th>
                            <th>data</th>
                            <th>liczba osób</th>
                        </tr>
                        {count.loaded ?
                            Object.keys(count.data).map(key => (
                                <tr key={key}>
                                    <td>{count.data[key].id}</td>
                                    <td>{count.data[key].login}</td>
                                    <td>{count.data[key].droga}</td>
                                    <td>{count.data[key].data.substr(0,10)}</td>
                                    <td>{count.data[key].liczba_osob}</td>
                                </tr>
                            ))
                            : <tr></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Admin;