import React, { FunctionComponent } from "react";
import {Route, Redirect, RouteComponentProps, RouteProps} from "react-router-dom";
import isLogin from "../utils/isLogin"

interface PrivateRouteProps extends RouteProps {
  component: FunctionComponent<RouteComponentProps>;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render={props => (
      isLogin()
      ? <Component {...props} />
      : <Redirect to="/login" />
    )} />
  )
}

export default PrivateRoute;