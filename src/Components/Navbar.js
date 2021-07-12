import React, { useState } from 'react'
import Paw from '../assets/images/fox-paw.png'
import CloseIcon from '@material-ui/icons/Close';
import '../css/navbar.css'
function Navbar() {
    const [toggle,setToggle] = useState(false)

    const showMenu = ()=>setToggle(!toggle)
    return (
        <div className="den-navbar-container">
            {toggle
            ?<CloseIcon id="close-menu-icon" onClick={showMenu}/>
            : <img id="paw-menu-icon" onClick={showMenu} src={Paw} alt="fox paw button for drop down sidebar menu" />
           }
            <nav className={toggle ? 'den-navbar active' :'den-navbar'}>
                <ul className="den-nav-items">
                    <li>My Skulk</li>
                    <li>Explore</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
