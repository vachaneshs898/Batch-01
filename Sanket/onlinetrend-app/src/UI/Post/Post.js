import React from 'react'
import Button from '../Button/Button'
const Post = (props) => {
    return (
        <div className='post-content'>
            <div className='top-post'>
                <img src={props.src} alt={props.alt} />
                <h1>{props.name}</h1>
                <Button>Follow +</Button>
            </div>
        </div>
    )
}

export default Post