import React from 'react'
import './index.css';

function Nav(props) {
  return (
    <div className='nav-wrapper'>
      {props.children}
    </div>
  )
}

export default Nav
