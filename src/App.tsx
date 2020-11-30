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
import { ListingContext, useListingContextValue } from './context/listingContext';
import BookListing from './pages/BookListing';

function App() {
  const userContextValue = useUserContextValue()
  const listingContextValue = useListingContextValue()

  return (
    <UserContext.Provider value={userContextValue}>
      <ListingContext.Provider value={listingContextValue}>
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
            <PrivateRoute exact path="/listings/manage" component={ManageListings} />
            <PrivateRoute path="/listings/:id" component={BookListing} />
            <PrivateRoute exact path="/bookings" component={Bookings} />
            <PrivateRoute path="/bookings/manage" component={ManageBookings} />
          </Switch>
        </WithLoader>
      </ListingContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
