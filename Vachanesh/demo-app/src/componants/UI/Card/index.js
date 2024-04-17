import React from 'react'
import './index.css';

function Card(props) {
  return (
    <div className={`card-wrapper ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card
