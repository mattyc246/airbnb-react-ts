import { createContext, useState } from "react"

export interface Listing {
  name: string;
  location: string;
  price: number;
  noOfGuests: number;
}

export interface ListingContextData {
  listings: Listing[] | [];
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
    setListings([])
  }

  const fetchUserListings = () => {
    setListings([])
  }

  return {
    listings,
    isLoadingListings,
    fetchListings,
    fetchUserListings
  }
}

export const ListingContext = createContext<ListingContextData>(listingContextDefaultValue)