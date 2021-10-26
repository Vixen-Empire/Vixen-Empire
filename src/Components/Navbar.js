import React, { useState } from 'react'
import Paw from '../assets/images/fox-paw.png'
import CloseIcon from '@mui/icons-material/Close';
import {useAuth} from '../Context/Auth'
import '../css/navbar.css'
function Navbar() {
    const [toggle,setToggle] = useState(false)
    const {signOut}=useAuth()
    const showMenu = ()=>setToggle(!toggle)

    async function logOut(e){
        e.preventDefault()
         const {error}= await signOut()
    }
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
                    <li onClick={logOut}>
                    Logout
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
