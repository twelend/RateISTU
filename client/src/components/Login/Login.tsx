import React, { FormEvent } from 'react'

import Input from "../Input/Input"
import './login.css'

const Login = () => {

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form">
                <h1>Вход</h1>
                <Input/>
            </div>
        </form>
    </div>
  )
}

export default Login