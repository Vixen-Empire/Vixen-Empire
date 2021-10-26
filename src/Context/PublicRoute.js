import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './Auth';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const {user} = useAuth()
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            user && restricted ?
                <Redirect to="/den" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;