import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'

import UserModel from '../models/User.js'

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            name: req.body.name,
            email: req.body.email,
            passwordHash: hash, 
        })

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        },
        'secret1221',
        {
            expiresIn: '5d',
        });

        const { passwordHash, ... userData } = user._doc;

        res.json({
            ... userData,
            token,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            massage: 'Не удалось зарегистрироваться',
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne( {email: req.body.email} );

        if(!user){
            return res.status(404).json({
                massage: 'Неверный логин или пароль...'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if(!isValidPass){
            res.status(404).json({
                massage: 'Неверный логин или пароль',
            })
        };

        const token = jwt.sign({
            _id: user._id,
        }, 'secret1221',
        {
            expiresIn: '1d',
        });
        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
            token,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            massage: 'Не получилось авторизоваться',
        })
    }
} 