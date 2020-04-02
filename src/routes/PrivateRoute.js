import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from '../domain/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isLoggedIn()) {
        return <Component {...props} />
      }

      return (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }}
  />
)

export default PrivateRoute
