import React from 'react'
import './Leftside.css'
import Onlineuserlink from '../UI/Onlineuser/Onlineuserlink'

const Leftside = (props) => {
    return (
        <div className='left-wrapper'>
            <div className='left-content'>
                <div className='left-profile'>
                    <h1>{props.title}</h1>
                    <img src={props.img} alt={props.name} />
                    <h2>{props.name}</h2>
                </div>
                <div className='personal-details'>
                    <div className='post-details'>
                        <h1>{props.post_title}</h1>
                        <h2>{props.number}</h2>
                    </div>
                    <div className='following-details'>
                        <h1>{props.following_title}</h1>
                        <h2>{props.fo_number}</h2>
                    </div>
                    <div className='followers-details'>
                        <h1>{props.followers_title}</h1>
                        <h2>{props.foll_number}</h2>
                    </div>
                </div>
            </div>
            <h1>Active Users</h1>
            <div className='active_list'>
                <Onlineuserlink />
                <Onlineuserlink />
                <Onlineuserlink />
                <Onlineuserlink />
            </div>

        </div>
    )
}

export default Leftside