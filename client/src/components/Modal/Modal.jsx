import React, { useState, useEffect } from 'react'
import Stars from '../Stars/Stars'

import "./modal.css"

const Modal = ({active, setActive}) => {
    const [ selectedSkill, setSelectedSkill] = useState(0)
    const [selectedKey, setSelectedKey] = useState(0)
    const [skill, setSkill] = useState([])

    const data = {
        "Базы данных": [ "PostgreSQL", "MySQL"],
        "Клиентский веб" : [ "Vue.js", "jQuery"],
        "Серверная часть" : [ "PHP", "Laravel", "Windows Forms"],
        "Десктопная разработка" : [ "C#", "WPF", "Windows Forms"],
        "Мобильная разработка" : [ "Cordova", "Xamarin"],
        "Компьютерное зрение/машинное обучение" : [ "C++", "OpenCV", "Python", "TenserFlow"]
    }
    
  return (
    <div className={active ? "modal active" : "modal"}>
        <div className="modal__content">
        <a onClick={() => setActive(false)}><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" /></a>
            <h1>Оцени свои навыки</h1>
            <form action="">
                <div className="modal_select">
                    <h3>Выбрать навык</h3>
                    {/* Skills */}
                    <div className="select-wrapper">
                        <select onChange={() => {
                                    setSelectedSkill(value)
                                    setSkill(data[value])
                                    console.log(skill)
                                }} className='form_select'>
                            {
                                Object.keys(data).map((value, index) => <option  value={index} key={index}>{value}</option>)
                            }
                        </select>
                    </div>
                    <h3 className='lang_h3'>Выбрать язык</h3>
                    {/* Languages */}
                    <div className="select-wrapper">
                        <select onChange ={(el) => el.target.value} className='form_select'>
                            { skill.map((value, index) => <option  value={index} key={index}>{value}</option>) }
                        </select>
                    </div>
                    <div className="stars">
                        <Stars />
                    </div>
                </div>
                <div className="modal_form">
                    <div className={(selectedKey && selectedSkill) ? "form-button_disabled" : "form-button"}>
                        <button disabled={(selectedKey && selectedSkill)} type="submit">Отправить</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Modal