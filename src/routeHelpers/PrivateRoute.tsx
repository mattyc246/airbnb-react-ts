import React, { FunctionComponent, useContext } from "react";
import { UserContext } from "../context/userContext"
import {Route, Redirect, RouteComponentProps, RouteProps} from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: FunctionComponent<RouteComponentProps>;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({component: Component, ...rest}) => {
  const { user } = useContext(UserContext)
  return(
    <Route {...rest} render={props => (
      user.isAuthenticated
      ? <Component {...props} />
      : <Redirect to="/login" />
    )} />
  )
}

export default PrivateRoute;