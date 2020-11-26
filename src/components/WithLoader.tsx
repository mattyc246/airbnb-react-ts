import React, { useContext } from 'react'
import styled from "styled-components"
import { UserContext } from '../context/userContext'
import Loader from './Loader'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`

const WithLoader = ({children}: any) => {
  const { isLoading } = useContext(UserContext)
  return (
    <Wrapper>
      {
        isLoading ? <Loader /> : children
      }
    </Wrapper>
  )
}

export default WithLoader
