import React from 'react'
import './Clickable_item.css';

const Clickable_item = ({symbol, color,handleClick}) => {
  return (
    <div 
    onClick={() =>{handleClick(symbol)}}
    className='btn-wrapper'
    style={{backgroundColor:color}}
    >{symbol}</div>
  )
}

export default Clickable_item