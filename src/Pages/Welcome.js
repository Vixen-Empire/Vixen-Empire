import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/fox.png'
import '../css/welcome.css'

function Welcome() {
    return (
        <div className="welcome-container">
            <div className="logo">
             <img alt="Vixen Empire Fox Logo" className="fox" src={logo}/>
            </div>
            <h1 className="title">Welcome To The empire</h1>
            <div className="welcome-btn">
            <Link to="/login"><button id="welcome-btn">enter</button></Link>
            </div>
        </div>
    )
}

export default Welcome
