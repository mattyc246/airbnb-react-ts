import Axios from "axios"
import { createContext, useState } from "react"
import { Listing } from "../interfaces/Listing"


export interface ListingContextData {
  listings: Listing[];
  isLoadingListings: boolean;
  fetchUserListings: () => void;
  fetchListings: () => void;
}

export const listingContextDefaultValue: ListingContextData = {
  listings: [],
  isLoadingListings: false,
  fetchUserListings: () => null,
  fetchListings: () => null,
}

export const useListingContextValue = (): ListingContextData => {
  const [listings, setListings] = useState<Listing[]>([])
  const [isLoadingListings, setIsLoadingListings] = useState<boolean>(false)

  const fetchListings = () => {
    setIsLoadingListings(true)
    Axios.get('http://localhost:3000/listings')
    .then((res) => {
      setListings(res.data)
      setTimeout(() => {
        setIsLoadingListings(false)
      }, 2000)
    })
  }

  const fetchUserListings = () => {
    setIsLoadingListings(true)
    Axios.get('http://localhost:3000/listings/me', {
      withCredentials: true
    })
    .then((res) => {
      setListings(res.data)
      setTimeout(() => {
        setIsLoadingListings(false)
      }, 2000)
    })
  }

  return {
    listings,
    isLoadingListings,
    fetchListings,
    fetchUserListings
  }
}

export const ListingContext = createContext<ListingContextData>(listingContextDefaultValue)