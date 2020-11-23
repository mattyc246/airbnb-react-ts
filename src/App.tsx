import React from 'react';
import './App.css';

import {Switch} from "react-router-dom"
import {PublicRoute, PrivateRoute} from "./routeHelpers"
import { Home, Dashboard, SignUp, Login } from './pages';

function App() {
  return (
    <Switch>
      <PublicRoute exact path="/" restricted={true} component={Home} />
      <PublicRoute path="/signup" restricted={true} component={SignUp} />
      <PublicRoute path="/login" restricted={true} component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
