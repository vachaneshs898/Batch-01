import React from 'react'
import './Input.css'

export const Input = ({text, result}) => {
    return (
        <div className='input'>
            <div className='input-wrapper'>
                <div className='resultText'>
                    <h1>{result}</h1>
                </div>
                <div className='inputText'>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}
