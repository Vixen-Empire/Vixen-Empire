import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login, selectUser} from '../assets/redux/userSlice'
import {Link,Redirect} from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'
import { responseFailure, refreshTokenSetup} from '../assets/utiles/google-auth'
import '../css/login.css'


function Login() {
    
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
     
     // Gets User Profile information
        function responseGoogle(res) {

            dispatch(login({
                name:res.profileObj.name,
                email:res.profileObj.email
             }))
            refreshTokenSetup(res)
            console.log(user, res.profileObj)
        }
       if(user !== null){
           return <Redirect to="/den" />
       }
    return (
        
        <div className="login-container">
            <section className="login-banner">
                <h1>Your Adventure Awaits</h1>
                <h3>Sign In Below</h3>
            </section>
            <GoogleLogin className="google-btn" clientId="26301325702-51hihv2tkbh1njfq13b7ndcm0iq73e04.apps.googleusercontent.com" 
            onSuccess={responseGoogle} 
            onFailure={responseFailure}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
            />
            <span id="or">or</span>
            <Link className="sign-up" to="/sign-up">Create An Account</Link>
        </div>
        
    )
}

export default Login
