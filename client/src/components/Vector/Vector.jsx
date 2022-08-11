import React from 'react'
import "./vector.css"

import vector from '../../assets/Vectors.svg'
import mobileVector from '../../assets/mobVector.svg'

const Vector = () => {
  return (
    <div className='vectors'>
        <img className='mainImg' src={vector} alt="icon" />
        <img className='mobileImg' src={mobileVector} alt="icon" />
    </div>
  )
}

export default Vector