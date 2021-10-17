import React from 'react'
import{withRouter} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import FoxStatBar from '../Components/FoxStatBar'
import SelectedFox from '../Components/SelectedFox'
import '../css/den.css'

function Den() {
    return (
        <div className="den-container">
   
            <Navbar />
            <div className="main-den-content">
             <SelectedFox />
             <FoxStatBar />
            </div>
        </div>
    )
}

export default withRouter(Den)
