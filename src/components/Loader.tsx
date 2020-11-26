import React from 'react'
import styled from 'styled-components'
import LoaderGif from "../assets/images/loader.gif"

const LoaderImage = styled.img`
  width: 150px;
  margin: 1.5rem auto;
  display: block;
`

const Loader = () => {
  return (
    <LoaderImage src={LoaderGif} alt="loader gif"/>
  )
}

export default Loader
