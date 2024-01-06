import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='nav--head'>
            <div className="nav--logo">
                <span className='logo'>vimal^</span>
            </div>
            <div className="nav--menus">
                <ul>
                    <li><Link to={'/home'} className='li'>Home</Link> </li>
                    <li><Link to={"/about"} className='li'>About</Link> </li>
                    <li><Link to={"/contect"} className='li'>Contect</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header