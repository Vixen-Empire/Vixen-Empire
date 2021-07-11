import React from 'react'
import { Switch, Route } from 'react-router';
import Login from './Components/Login';
import Den from './Pages/Den'
import Welcome from './Pages/Welcome'
import SignUp from './Components/SignUp';
import './css/index.css'



export default function App() {

  return (
    <div>
    
      <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/den" component={Den} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/sign-up" component={SignUp} />
     </Switch>
     
  </div>
  );
}


