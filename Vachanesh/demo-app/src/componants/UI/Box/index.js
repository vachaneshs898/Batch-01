import React from 'react'
import './index.css'

function Box(props) {
    const { children, ...rest } = props;
    
    return (
        <div {...rest}>
            {children}
        </div>
    )
}

export default Box
