import './navbar.css';

const navbar = () => {
  return (
    <div className='navbar-content'>
        <div className='wrapper'>
            <div className='user-profile'>
                <img src='https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0' alt='user profile' />
            </div>
            <div>
                <h1>Sanket Hanche</h1>
            </div>
            <div className='user-story'>

            </div>
            <button className='btn primary'>Sign Out</button>
        </div>
    </div>
  )
}

export default navbar;