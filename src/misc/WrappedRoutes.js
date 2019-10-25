import React from "react"
import { Redirect } from "react-router-dom"

import PrivateLayout from './PrivateLayout'
import PublicLayout from './PublicLayout'
import Route from './Route'
// import { prefix } from '../menus'

const AuthRoute = ({ component: Component, path, exact, ...rest }) => {
    const isAuthenticated = rest.isAuthenticated
    let componentNode = (props) => <Redirect
        to={{
            pathname: "/login",
            state: { from: props.location }
        }}
    />
    
    if (isAuthenticated === 'success') {
        componentNode = (props) => <Component {...props} {...rest} />
    }
    return <Route
        path={path} 
        exact={exact}
        layout={PrivateLayout}
        component={componentNode} 
    />
}

const DefaultRoute = ({ component: Component, path, exact, ...rest }) => {
    return <Route
        path={path}
        exact
        layout={PublicLayout}
        component={(props) => <Component {...rest} {...props}/>}
    />
}

export {
    AuthRoute,
    DefaultRoute
}
