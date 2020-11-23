import React from 'react';
import './App.css';

import {Switch} from "react-router-dom"
import {PublicRoute, PrivateRoute} from "./routeHelpers"
import { Home, Dashboard } from './pages';

function App() {
  return (
    <Switch>
      <PublicRoute path="/" restricted={false} component={Home} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
