import Axios from "axios"
import { createContext, useState } from "react"
import { Listing } from "../interfaces/Listing"


export interface ListingContextData {
  listings: Listing[];
  isLoadingListings: boolean;
  fetchUserListings: () => void;
  fetchListings: () => void;
  fetchListingById: (id: string) => Listing | null;
}

export const listingContextDefaultValue: ListingContextData = {
  listings: [],
  isLoadingListings: false,
  fetchUserListings: () => null,
  fetchListings: () => null,
  fetchListingById: () => null
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

  const fetchListingById = (id: string) => {
    const listing = listings.filter(listing => listing.id === parseInt(id))[0]
    return listing
  }

  return {
    listings,
    isLoadingListings,
    fetchListings,
    fetchUserListings,
    fetchListingById
  }
}

export const ListingContext = createContext<ListingContextData>(listingContextDefaultValue)