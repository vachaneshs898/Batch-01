import React from 'react';
import './Nav.css';
import Text from './text';


const Nav = () => {
    return (
        <div className='nav-content'>
            <div className='nav-wrapper'>
                <div className='user-profile'>
                    <img src='https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0' alt='User profile' />
                </div>
                <div className='user-name'>
                    <h1>Sanket hanche</h1>
                </div>
                <Text/>
                <button className='btn'>Sign Out</button>
            </div>
        </div>
    )
}

export default Nav;