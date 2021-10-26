import React, {useState,useEffect, useContext} from 'react'
import {supabase} from '../assets/utiles/superbaseClient'

const AuthContext = React.createContext()

export function Auth({children}){
  const [user, setUser]= useState()
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
   
   const session = supabase.auth.session()
    if(session){
      const loggedIn = session.user
      setUser(loggedIn)
    }
   const {data:listener} = supabase.auth.onAuthStateChange(
     async (event,session)=>{
      if(session){
        const loggedIn = session.user 
        return setUser(loggedIn)
        
      }
       
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