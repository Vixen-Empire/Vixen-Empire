import React, { useState,useEffect } from 'react'
import { useHistory} from 'react-router'
import { Link } from 'react-router-dom'

import {useAuth} from '../Context/Auth'
import TextFeild from '@material-ui/core/TextField'
import '../css/login.css'
import { supabase } from '../assets/utiles/superbaseClient'



function Login() {
    const [user, setUser]= useState({email:'',password:''})
    const {signIn}=useAuth()
    const history = useHistory()
    const onInputChange = (e) => {
      const { name, value } = e.target;
  
      setUser({ ...user, [name]: value })
    };
  async function handleSubmit(e) {
    e.preventDefault()
   const userEmail = user.email
   const userPass = user.password

    const {error} = signIn({userEmail,userPass})
    if(error){
      alert('error in sign in')
    }else{
      history.push('./den')
    }
  }
  async function googleLogin(){
    const{user,session,error} = await supabase.auth.signIn({
      provider:'google'
    },{
      redirectTo:'http://localhost:3000/den'
    })
  }
   return   ( 
   <div className="login-container">
            <section className="login-banner">
                <h1>Your Adventure Awaits</h1>
                <h3>Sign In Below</h3>
            </section>
            <section id='login-feild-contiainer'>
              <TextFeild className="login-feild" label="Email" name="email" value={user.email} onChange={onInputChange} />
              <TextFeild className="login-feild" label="Password" name="password" value={user.password} onChange={onInputChange} />
                <button className="login-btn" onClick={handleSubmit} >Login</button>
                <span id="or">or</span>
              <Link className="sign-up" to="/sign-up">Create Account</Link>
            </section>
           </div>)
           
}        
    


export default Login
