import React from 'react'
import './index.css'

function Typography(props) {
    const { type = 'title' } = props
    return (
        <div className={`typography ${type}`}>
            {props.children}
        </div>
    )
}

export default Typography
