import React from 'react'
import Welcome from './Pages/Welcome'
import { Switch, Route } from 'react-router';
import './css/index.css'
import Login from './Components/Login';
import Den from './Pages/Den'
import PrivateRoute from './Components/PrivateRoute';
import SignUp from './Components/SignUp';




export default function App() {
  
  return (
   <Switch>
   <Route exact path="/" component={Welcome} />
   <Route exact path="/login" component={Login}/>
   <Route exact path="/sign-up" component={SignUp} />
   <Route exact path="/den" component={Den} />
   </Switch>
  );
}


