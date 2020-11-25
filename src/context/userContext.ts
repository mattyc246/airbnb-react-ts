import { createContext } from "react"

export interface User {
  fullName: string;
  email: string;
  isAuthenticated: boolean;
}

export interface UserContextData {
  user: User,
  setUser: (User: User) => void;
}

export const userContextDefaultValue: UserContextData = {
  user: {
    fullName: '',
    email: '',
    isAuthenticated: false
  },
  setUser(user: User){
    this.user = user
  }
}

export const UserContext = createContext<UserContextData>(userContextDefaultValue)