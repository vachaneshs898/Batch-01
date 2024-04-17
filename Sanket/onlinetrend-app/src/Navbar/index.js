import React from 'react'
import Box from '../UI/Box';
import Logo from '../UI/Logo';
import './index.css'
import Menu from '../UI/Menu';



const Navbar = () => {
  return (
    <div className='navbar-content'>
      <nav>
      <Logo>Sanket</Logo>
            <Menu/>
        <Box className="box-arr">
            <img src='https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='User image'/>
            <h1>Sanket Hanche</h1>
        </Box>
      </nav>
    </div>
  )
}

export default Navbar;