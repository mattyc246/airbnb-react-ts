import { User } from "./User";

export interface Listing {
  id: number;
  name: string;
  location: string;
  price: number;
  noOfGuests: number;
  user: User;
}