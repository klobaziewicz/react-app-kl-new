import '../App.css';
import Home from './home';
import Warunki from './warunki';
import Register from './register';
import Admin from './admin';
import '../styles/index.scss';
import topr from '../images/topr.png'
import tpn from '../images/tpn.png'
import hm from '../images/home.svg'
import info from '../images/info.png'
import regist from '../images/write.png'
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function App() {
  return (
    <div className='container'>
      <Router>

        <div className='nav'>
          <div className='images'>
            <img alt='tpn image' src={topr}></img>
            <img alt='topr image' src={tpn}></img>
          </div>

          <ul className='wide-list'>
            <li>
              <Link to="/react-app-tpn-kl/">Home</Link>
            </li>
            <li>
              <Link to="/react-app-tpn-kl/warunki">Warunki</Link>
            </li>
            <li>
              <Link to="/react-app-tpn-kl/register">Rejestracja</Link>
            </li>
          </ul>

          <ul className='narrow-list'>
            <li>
              <Link to="/react-app-tpn-kl/"><img alt='home image' src={hm}></img></Link>
            </li>
            <li>
              <Link to="/react-app-tpn-kl/warunki"><img alt='info image' src={info}></img></Link>
            </li>
            <li>
              <Link to="/react-app-tpn-kl/register"><img alt='register image' src={regist}></img></Link>
            </li>
          </ul>

        </div>

        <Routes>
          <Route path="/react-app-tpn-kl/" element={<Home />} />
          <Route path="/react-app-tpn-kl/warunki" element={<Warunki />} />
          <Route path="/react-app-tpn-kl/register" element={<Register />} />
          <Route path="/react-app-tpn-kl/admin" element={<Admin />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
