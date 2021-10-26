import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useAuth} from './Auth'

function PrivateRoute({ component: Component, ...rest }) {
  const {user} = useAuth()
return (
<Route
  {...rest}
  render={({props,location}) =>
    user ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state:{from:location}
        }}
      />
    )
  }
/>
);
}

export default PrivateRoute