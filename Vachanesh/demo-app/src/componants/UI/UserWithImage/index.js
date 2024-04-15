import React from 'react'
import Card from '../Card'
import UserImg from '../UserImg'
import Typography from '../Typography'
import './index.css'

function UserWithImage(props) {
    const { name, src } = props
    return (
        <Card className="inline-flex user-item">
            <UserImg src={src} size="small" />
            <Typography>{name}</Typography>
        </Card>
    )
}

export default UserWithImage
