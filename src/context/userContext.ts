import Axios from "axios"
import { createContext, useState, useEffect } from "react"
import { User } from "../interfaces/User"


export interface UserContextData {
  user: User,
  isLoading: boolean,
  updateUser: (User: User) => void;
  fetchUser: () => void;
}

export const userContextDefaultValue: UserContextData = {
  user: {
    fullName: '',
    email: '',
    isAuthenticated: false
  },
  isLoading: false,
  updateUser: (user: User) => null,
  fetchUser: () => null
}

export const useUserContextValue = (): UserContextData => {
  const [user, setUser] = useState<User>({
    fullName: '',
    email: '',
    isAuthenticated: false
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    Axios.get('http://localhost:3000/users/me', {
      withCredentials: true
    })
    .then((res) => {
      setUser({
        fullName: res.data.fullName,
        email: res.data.email,
        isAuthenticated: true
      })
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    })
    .catch((err) => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      if(err.response.status === 401) return
    })
  }, [])

  const updateUser = (user: User) => {
    setUser(user)
  }

  const fetchUser = () => {
    Axios.get('http://localhost:3000/users/me', {
      withCredentials: true
    }).then((res) => {
      console.log(res)
    })
    // return user
  }

  return {
    user,
    isLoading,
    updateUser,
    fetchUser,
  }
}

export const UserContext = createContext<UserContextData>(userContextDefaultValue)