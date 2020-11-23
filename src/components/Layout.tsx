import React, { FunctionComponent } from 'react'
import styled from "styled-components"
import { StyledComponent } from "../interfaces"
import Navigator from "./Navigator"
import Footer from "./Footer"

interface LayoutProps {
  showFooter: boolean;
  padded: boolean;
}

const StyledMain = styled.main<StyledComponent>`
  min-height: ${props => props.showFooter ? 'calc(100vh - 86.75px - 50px)' : 'calc(100vh - 86.75px)'};
  width: 100vw;
  ${props =>
    props.padded ? 'padding: 1rem;' : ''
  }

  @media screen and (min-width: 992px){
    min-height: ${props => props.showFooter ? 'calc(100vh - 90.88px - 50px)' : 'calc(100vh - 90.88px)'};
  }
`

const Layout: FunctionComponent<LayoutProps> = ({children, showFooter, padded}) => {
  return (
    <>
      <Navigator />
      <StyledMain showFooter={showFooter} padded={padded}>
        {children}
      </StyledMain>
      {
        showFooter
        ? <Footer />
        : ""
      }
    </>
  )
}

export default Layout
