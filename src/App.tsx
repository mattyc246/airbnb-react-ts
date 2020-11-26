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

import {useUserContextValue, UserContext} from "./context/userContext"
import WithLoader from './components/WithLoader';

function App() {
  const userContextValue = useUserContextValue()

  return (
    <UserContext.Provider value={userContextValue}>
      <WithLoader>
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
      </WithLoader>
    </UserContext.Provider>
  );
}

export default App;
