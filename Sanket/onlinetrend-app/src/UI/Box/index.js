import React from 'react'
import './index.css'

const Box = (props) => {
    const { children, ...rest} = props
  return (
    <div {...rest} className='box-arr'>
        {children}
    </div>
  )
}

export default Box