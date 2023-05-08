import React from 'react';
//import { useForm } from "react-hook-form";
import '../styles/index.scss';
import yt from '../images/yt.png'
import tw from '../images/tw.png'
import fb from '../images/fb.png'
import ig from '../images/ig.png'

function Footer() {
    return (
    <div className='footer'>
        <p>Autor Krzysztof Łobaziewicz</p>
        <a href='https://www.facebook.com/TatrzanskiParkNarodowy'><img src={fb} alt="facebook icon" className='icon'></img></a>
        <a href="https://twitter.com/Tatrzanski_PN"><img src={tw} alt="twitter icon" className='icon'></img></a>
        <a href="https://www.youtube.com/user/TPNVideo/videos"><img alt="youtube icon" src={yt} className='icon' href="https://www.youtube.com/user/TPNVideo/videos"></img></a>
        <a href="https://www.instagram.com/tatrzanskiparknarodowy/"><img alt="instagram icon" src={ig} className='icon' href="https://www.instagram.com/tatrzanskiparknarodowy/"></img></a>
    </div>
    );
}


export default Footer;