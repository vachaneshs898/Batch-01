import React from 'react';
import './index.css';
function UserImg(props) {
    const { size = 'medium', src } = props;
    return (
        <img className={`image-wrapper ${size}`} src={src} />
    )
}

export default UserImg
