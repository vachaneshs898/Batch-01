import React from 'react'
import './MIddle.css'
import Middleinput from './Middleinput'
import Post from '../UI/Post/Post'
const Middle = () => {
  return (
    <div className='middle-content'>
        <Middleinput/>
        <Post/>
    </div>
  )
}

export default Middle