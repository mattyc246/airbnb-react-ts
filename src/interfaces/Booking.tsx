import { Listing } from "./Listing";

export interface Booking {
  id: number;
  checkIn: Date;
  checkOut: Date;
  paymentStatus: string;
  listing: Listing;
}