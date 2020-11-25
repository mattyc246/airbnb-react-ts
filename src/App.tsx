import React from 'react';
import './App.css';

import {Switch} from "react-router-dom"
import {PublicRoute, PrivateRoute} from "./routeHelpers"
import {
  Home,
  Dashboard,
  SignUp,
  Login,
  Profile,
  PublicProfile,
  ManageProfile,
  Listings,
  ManageListings,
  Bookings,
  ManageBookings
} from './pages';

import {userContextDefaultValue, UserContext} from "./context/userContext"

function App() {
  return (
    <UserContext.Provider value={userContextDefaultValue}>
      <Switch>
        <PublicRoute exact path="/" restricted={true} component={Home} />
        <PublicRoute path="/signup" restricted={true} component={SignUp} />
        <PublicRoute path="/login" restricted={true} component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PublicRoute exact path="/profile" restricted={false} component={Profile} />
        <PrivateRoute exact path="/profile/manage" component={ManageProfile} />
        <PublicRoute  path="/profile/:id" restricted={false} component={PublicProfile} />
        <PublicRoute exact path="/listings" restricted={false} component={Listings} />
        <PrivateRoute path="/listings/manage" component={ManageListings} />
        <PrivateRoute exact path="/bookings" component={Bookings} />
        <PrivateRoute path="/bookings/manage" component={ManageBookings} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
