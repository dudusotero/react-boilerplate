import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'
import { SignIn, SignUp, Settings } from './components/routes'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: '/signin', state: { from: props.location } }}
      />
    ))
    }
  />
)

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>Home</h1>} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <PrivateRoute path="/settings" component={Settings} />
    <Route path="*" component={() => <h1>Page 404</h1>} />
  </Switch>
)

export default Routes
