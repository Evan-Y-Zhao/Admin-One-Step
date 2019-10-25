import React, { PureComponent } from 'react'
import { Switch, Redirect, withRouter, Route } from "react-router-dom"
import { compose } from 'recompose'
import { AuthRoute, DefaultRoute } from './misc/WrappedRoutes'
import loading from './components/Loadable'
// import { prefix } from './menus'
import 'Stylesheets/index.scss'
import { injectIntl } from 'react-intl'
import { connect } from "react-redux"

const Feedback = loading(() => import('Pages/Feedback'))
const Login = loading(() => import('./pages/Login'))

// Add any route that needs authentication to access here.
// Both private routes and the following public routes are capable of adding sub routes.
// Refer to https://reacttraining.com/react-router/web/example/route-config for detail

const privateRoutes = [
  {
    path: '/feedback',
    exact: true,
    component: Feedback,
  }
]

// add the public route here.
const publicRoutes = [
  {
    path: "/login",
    exact: true,
    component: Login
  },

]

class App extends PureComponent {

  render() {
    
    return (
      <Switch>
        <Route exact path='./' render={() => {
            return <Redirect
                    to={{
                        pathname: "/feedback",
                    }}
                />
        }}/>
        {
          publicRoutes.map((route, i) => {
            return <DefaultRoute key={`public_route_${i}`} {...route} {...this.props} />
          })
        }
        {
          privateRoutes.map((route, i) => {
            return <AuthRoute key={`private_route_${i}`} {...route} {...this.props} />
          })
        }
        <Redirect to={{ pathname: "/login" }}/>
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;

  return {
    isAuthenticated: auth.isAuthenticated,
  };
};

const mapDispatchToProps = {

};

export default compose(
  injectIntl,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App)
