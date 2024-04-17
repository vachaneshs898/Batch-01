import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Middle.css'

const Middle = () => {
    return (
        <div className='middle-wrapper'>
            <div className='top-nav'>
                <div className='user-img'>
                    <img src='https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0' alt='User profile' />
                    <input type='text' placeholder="What's on you mind" />
                </div>
                <div className='middle-nav'>
                    <div className='picture'>
                        <FontAwesomeIcon icon="fa-solid fa-images" />
                        <h1>Pictures/Video</h1>
                    </div>
                    <div className='tag-friend'>
                        <FontAwesomeIcon icon="fa-solid fa-user-plus" />
                        <h1>Tag Friends</h1>
                    </div>
                    <div className='activity'>
                        <FontAwesomeIcon icon="fa-solid fa-face-laugh-wink" />
                        <h1>Feeling/Activity</h1>
                    </div>
                </div>
            </div>
            <div className='viral-post'>
                <img src='https://wallpapercave.com/wp/wp6581266.jpg' alt='Money Heist' />
                <div className='review-post'>
                    <button></button>
                </div>
            </div>

        </div>
    )
}

export default Middle