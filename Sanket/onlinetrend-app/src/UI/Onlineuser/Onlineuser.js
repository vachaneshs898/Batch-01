import React from 'react'
import './Onlineuser.css'
const Onlineuser = (props) => {
  return (
    <div className='online-wrapper'>
        <img src={props.img} alt={props.name} />
        <h1>{props.name}</h1>
        <button>{props.label}</button>
    </div>
  )
}

export default Onlineuser