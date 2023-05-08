import React from 'react';
//import { useForm } from "react-hook-form";
//import './styles/index.scss';

function Wpis(props) {
    return (
    <div className='wpis'>
        <h2>{props.data}</h2>
        <p>{props.info}</p>
    </div>
    );
}

export default Wpis;