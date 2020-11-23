import React, { FunctionComponent } from 'react'
import {Route, Redirect, RouteComponentProps, RouteProps} from "react-router-dom"
import isLogin from "../utils/isLogin"

interface PublicRouteProps extends RouteProps {
  component: FunctionComponent<RouteComponentProps>;
  restricted: boolean;
}

const PublicRoute: FunctionComponent<PublicRouteProps> = ({component: Component, restricted, ...rest}) => {
  return (
    <Route {...rest} render={props => (
    isLogin() && restricted
    ? <Redirect to="/dashboard" />
    : <Component {...props} />
    )} />
  )
}

export default PublicRoute
