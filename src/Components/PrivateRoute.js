// import React from 'react'
// import { Route, Redirect, useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import {selectUser} from '../assets/redux/userSlice'

// function PrivateRoute({children, ...rest}) {

//     const {state} = useLocation()
//     const user = useSelector(selectUser)
//          //Redirects if user is not loged in
//          if(user !== null){
//           return <Redirect to={state.from ||'/'} />
//         }
//     return (
//       <Route {...rest} render={({location}) =>{
//           return user
//           ?children
//           :<Redirect to={{
//               pathname:'/den',
//               state: {from:location}
//             }} />
//       }}/>
//     )
// }

// export default PrivateRoute
