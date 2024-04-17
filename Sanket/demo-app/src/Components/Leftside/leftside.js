import React from 'react'
import User_data from './Online'
import './Leftside.css'

const Leftside = () => {
  return (
    <div className='left-wrapper'>
        <div className='user-data'>
            <div className='post-data'>
                <h1>360</h1>
                <h2>Post</h2>
            </div>
            <div className='followers-data'>
                <h1>112k</h1>
                <h2>Followers</h2>
            </div>
            <div className='following-data'>
                <h1>104k</h1>
                <h2>Following</h2>
            </div>
        </div>
        <div className='online-data'>
            <User_data/>
        </div>
    </div>
  )
}

export default Leftside