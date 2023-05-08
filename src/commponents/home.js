import '../App.css';
import Login from './login';
import Footer from './footer';
import '../styles/index.scss';
import ph from '../images/ph.png'
import hm from '../images/hm.png'
import ml from '../images/ml.png'
import React from "react";

function Home() {
    return (
        <div className="App">
            <div className='bgImg'></div>
            <a href='#header'>
                <button className='imgButton'>Zaloguj</button>
            </a>
            <div className='header' id='header'>
                <h1>Zaloguj się i zgłoś wyjście taternickie</h1>
            </div>
            <div className="main">
                <Login></Login>
            </div>
            <div className='aside'>
                <h2>Kontakt</h2>
                <div className='aside_icons'>
                    <div className='B_icon'>
                        <img alt="phone icon" src={ph} className='big_icon'></img>
                        <span>+48 18 20 23 200</span>
                    </div>
                    <div className='B_icon'>
                        <img alt="mail icon" src={ml} className='big_icon'></img>
                        <span>sekretariat@tpn.pl</span>
                    </div>
                    <div className='B_icon'>
                        <img alt="home icon" src={hm} className='big_icon'></img>
                        <span><a href='https://tpn.pl/'>tpn.pl</a></span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}


export default Home;