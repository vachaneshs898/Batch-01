import React from 'react'
import './UI/Menu/index.css'

const Menu = () => {
    const menu_list = [
        {
            name: "Home",
            href: ""
        },
        {
            name: "Contact Us",
            href: ""
        }
    ]

    return (
        <div className='menu-list'>
            <ul>
                {
                    menu_list.map((user) =>
                    (
                            <li href={user.href}>{user.name}</li>
                    )

                    )
                }
            </ul>
        </div>
    )
}

export default Menu