import React from 'react'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';

import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import Help from '../components/Help/Help';


const Home = () => {

  const [modalActive, setModalActive] = useState(false);
  const [helpActive, setHelpActive] = useState(false);

  return (
    <div className='home'>
      <Helmet>
        <title>Главная</title>
      </Helmet>

      <div className="link__container">
        <Link className="link" to="/">Войти</Link>
      </div>

      <div className="form">
        <h1>Оцени свои навыки</h1>
        
        <div>
          <div className="form-button">
            <button onClick={() => setModalActive(true)} type="submit">Оценить</button>
          </div>
        </div>
        <div>
          <div className="help-page">
            <a onClick={() => setHelpActive(true)}>Значение звезд</a>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
      <Help active={helpActive} setActive={setHelpActive}/>
    </div>
  )
}

export default Home