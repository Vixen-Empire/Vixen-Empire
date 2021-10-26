import React, { useState } from 'react'
import { useHistory} from 'react-router'
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import {useAuth} from '../Context/Auth'
import '../css/login.css'




function Login() {
    const [user, setUser]= useState({email:'',password:''})
    const {signIn,signOut}=useAuth()
    const history = useHistory()
    const onInputChange = (e) => {
      const { name, value } = e.target;
  
      setUser({ ...user, [name]: value })
    };
  async function handleSubmit(e) {
    e.preventDefault()
   const userEmail = user.email
   const userPass = user.password

    const {error} = signIn({userEmail,userPass,cb:()=>{}})
    if(error){
      alert('error in sign in')
    }else{
      history.push('./den')
    }
  }
  async function googleLogin(e){
    e.preventDefault()
    const googleUser = await signIn({
      provider:'google'
    },{redirectTo:'http//localhost:3000/den'})
    setUser(googleUser)
  }
  
 const inputStyle ={
  width: '50vw',
  marginBottom: '1rem'
 }

   return   ( 
   <div className="login-container">
            <section className="login-banner">
                <h1>Your Adventure Awaits</h1>
                <h3>Sign In Below</h3>
                
                  <Button id='gBtn' variant='contained'onClick={googleLogin}><GoogleIcon id='gIcon'/>Sign in with Google</Button>
                
            </section>
            <section id='login-feild-contiainer'>
              <TextField style={inputStyle} id="loginInput" label="Email" name="email" value={user.email} onChange={onInputChange} />
              <TextField style={inputStyle} id="loginInput" label="Password" name="password" value={user.password} onChange={onInputChange} />
                <Button id="login-btn" onClick={handleSubmit} >Login</Button>
                <span id="or">or</span>
              <Link className="sign-up" to="/sign-up">Create Account</Link>
            </section>
           </div>)
           
}        
    


export default Login
