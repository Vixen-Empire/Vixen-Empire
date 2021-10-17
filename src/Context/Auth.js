import React, {useState,useEffect, useContext} from 'react'
import { Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {supabase} from '../assets/utiles/superbaseClient'

const AuthContext = React.createContext()

export function Auth({children}){
  const [user, setUser]= useState()
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
   
   const session = supabase.auth.session()
   setUser(()=>{
     if(session){
       return session.user
     }else{
       null
     }
   })
   setLoading(false)

   const {data:listener} = supabase.auth.onAuthStateChange(
     async (event,session)=>{
       setUser(()=>{
        if(session){
          return session.user
        }else{
          null
        }
      })
       setLoading(false)
     }
   )
   return ()=>{
    if(listener) listener.unsubscribe()
  } 
  },[])
  
  const value ={
    signUp:(data)=>supabase.auth.signUp(data),
    signIn:(data)=>supabase.auth.signIn(data),
    signOut:(data)=>supabase.auth.signOut(),
    user
  }
   
  return(
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}