import express from 'express'
import mongoose from 'mongoose';

import { login, register } from './controllers/UserController.js';
import { loginValidator, registerValidator } from './validation.js';

const PORT = 3001;

mongoose
    .connect('mongodb://localhost:27017/rate?')
    .then(() => console.log('DataBase is work!'))
    .catch((err) => console.log('DataBase ERROR...', err))

const app = express();
app.use(express.json());

app.post('/auth/login', loginValidator, login);
app.post('/auth/register', registerValidator, register);

app.listen(PORT, (err) =>{
    if(err){
        return console.log(err);
    }
    console.log('Server is work!');
})