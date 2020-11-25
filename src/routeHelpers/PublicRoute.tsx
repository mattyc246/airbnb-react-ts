import React, { FunctionComponent, useContext } from 'react'
import { UserContext } from "../context/userContext"
import {Route, Redirect, RouteComponentProps, RouteProps} from "react-router-dom"

interface PublicRouteProps extends RouteProps {
  component: FunctionComponent<RouteComponentProps>;
  restricted: boolean;
}

const PublicRoute: FunctionComponent<PublicRouteProps> = ({component: Component, restricted, ...rest}) => {
  const { user } = useContext(UserContext)
  return (
    <Route {...rest} render={props => (
    user.isAuthenticated && restricted
    ? <Redirect to="/dashboard" />
    : <Component {...props} />
    )} />
  )
}

export default PublicRoute
