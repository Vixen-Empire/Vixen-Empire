import React from 'react'
import {Auth, useAuth} from './Context/Auth'
import { Switch} from 'react-router';
import Den from './Pages/Den'
import Welcome from './Pages/Welcome'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import PrivateRoute from './Context/PrivateRoute'
import PublicRoute from './Context/PublicRoute'
import './css/index.css'




export default function App() {
    const {user}=useAuth()
  return (
    <Auth>
      <Switch>
        <PublicRoute restricted={false} exact path="/" component={Welcome} />
        <PublicRoute restricted={true} exact path="/login" component={Login}/>
        <PublicRoute restricted={false}exact path="/sign-up" component={SignUp} />
        <PrivateRoute exact path="/den" component={Den} />
      </Switch>
   </Auth>
  );
}
/*******************************************************
 * Copyright (C) 2021 Vixen Empire
 * 
 * This file is part of Vixen Empire.
 * 
 * Vixen Empire can not be copied and/or distributed without the express
 * permission of founder Elisa Alvarez
 *******************************************************/

