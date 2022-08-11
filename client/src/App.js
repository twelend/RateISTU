import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';

import './App.css';
import Vector from './components/Vector/Vector.jsx';
import Home from './Pages/Home';
import Input from './components/Input/Input.jsx'
//import Login from './components/Login/Login';

function App() {
  return(
    <div>
      <Helmet>
        <title>Вход</title>
      </Helmet>
      <div className="link__container">
        <Link className="link" to="/home">Главная</Link>
      </div>
      <form >
            <div className="form">
                <h1>Вход</h1>
                <Input/>
            </div>
        </form>
    </div>
  )
}

function Routering () {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/" element={<App />} />
        </Routes>
      </Router>
      <Vector />
    </div>
  )
}

export default Routering;
