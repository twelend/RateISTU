import { body } from 'express-validator'

export const registerValidator = [
    body('email', 'Неверный формат почты').isEmail(), 
    body('password', 'Пароль должен быть не меньше 5 символов').isLength({ min: 5}),
    body('name', 'Укажите Имя').isLength({ min: 2}),
]

export const loginValidator = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть не меньше 5 символов').isLength({min: 5})
]