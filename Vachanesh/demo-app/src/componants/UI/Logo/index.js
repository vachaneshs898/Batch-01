import React from 'react'
import './index.css';
function Logo(props) {
  return (
    <div className='logo'>
      {props.children}
    </div>
  )
}

export default Logo
