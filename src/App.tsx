import React from 'react';
import './App.css';

import {Switch} from "react-router-dom"
import {PublicRoute, PrivateRoute} from "./routeHelpers"
import { Home, Dashboard, SignUp } from './pages';

function App() {
  return (
    <Switch>
      <PublicRoute exact path="/" restricted={false} component={Home} />
      <PublicRoute path="/signup" restricted={true} component={SignUp} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
