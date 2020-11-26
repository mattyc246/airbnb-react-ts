import React from 'react'
import styled from 'styled-components'
import LoaderGif from "../assets/images/loader.gif"

const LoaderContainer = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 150px;
    margin: 0 auto;
    display: block;
  }
`

const Loader = () => {
  return (
    <LoaderContainer>
      <img src={LoaderGif} alt="loader gif"/>
    </LoaderContainer>
  )
}

export default Loader
