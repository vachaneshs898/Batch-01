import React from 'react'
import './index.css'
const Logo = (props) => {
  return (
    <div className='logo-wrapper'>
        {props.children}
    </div>
  )
}

export default Logo