import React, { useEffect } from 'react'
import { useState } from "react";

import './input.css'
import'../../App.css'

const Input = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email - не может быть пустым");
  const [passwordError, setPasswordError] = useState('Пароль - не может быть пустым');
  const [formValid, setFormValid] = useState(false)

  
  useEffect(() => {
    if(emailError || passwordError){
      setFormValid(false)
    }
    else{
      setFormValid(true)
    }
  }, [emailError, passwordError])


  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLowerCase())){
      setEmailError("Email некорректный!")
      if(!e.target.value){
        setEmailError("Email - не может быть пустым")
      }
    }
    else{
      setEmailError('')
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 5){
      setPasswordError("Пароль меньше 5 символов")
      if(!e.target.value){
        setPasswordError("Пароль - не может быть пустым")
      }
    }
    else{
      setPasswordError('')
    }
  }

  const blurHandler = (e) =>{
    switch(e.target.name){
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }
  return (
    <div className="input_form">
      {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
      <label>
        <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} className="form_input" name="email" type="text" placeholder="Логин"></input>
      </label>

      {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
      <label>
        <input value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} className="form_input" name="password" type="password" placeholder="Пароль"></input>
      </label>
      <div className={formValid ? "form-button" : "form-button_disabled"}>
        <button disabled={!formValid} type="submit">Войти</button>
      </div>
    </div>
  )
}
Input.defaultProps = { type: "text", placeHolder: ""};

export default Input