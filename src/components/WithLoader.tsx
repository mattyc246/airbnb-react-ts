import React, { useContext } from 'react'
import styled from "styled-components"
import { UserContext } from '../context/userContext'
import Loader from './Loader'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`

const LoaderContainer = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`


const WithLoader = ({children}: any) => {
  const { isLoading } = useContext(UserContext)
  return (
    <Wrapper>
      {
        isLoading
          ? (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            )
          : children
      }
    </Wrapper>
  )
}

export default WithLoader
