import React from 'react'

import './help.css'

const Help = ({active, setActive}) => {
  return (
    <div className={active ? "help active" : "help"}>
        <div className="help__content" onClick={e => e.stopPropagation()}>
            <a onClick={() => setActive(false)}><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/></a>
            <div className="value-stars">
                <ol>
                    <li><solid>Trainee</solid>  —  Имеешь большое желание научиться программировать. Только начал учить теорию, то как работает компьютер и т.д.</li>
                    <li><solid>Junior</solid>   —  Понимаешь азы какого-либо языка программирования, можешь написать простую консольную программу</li>
                    <li><solid>Middle</solid>  —  Хорошо понимаешь языки и теорию, мало опыта в реальных проектах.</li>
                    <li><solid>Senior</solid>  —  Имеешь большую библиотеку решенных задач, есть свои проекты, владеешь 40% навыками в одной из сфер программирования. Готов к стажировке.</li>
                    <li><solid>Lead</solid>  —  Умеешь решать любые простые задачи и трудности не ставят тебя в тупик. Готов к более сложным проектам под руководством опытных коллег. Готов к работе и развитию в команде.</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Help