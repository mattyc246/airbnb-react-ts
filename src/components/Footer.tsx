import React, { FunctionComponent } from 'react';
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100vw;
  height: 50px;
  border-top: 1px solid rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer: FunctionComponent = () => {
  return (
    <StyledFooter>
      <small>2020 CloneBNB &copy;</small>
    </StyledFooter>
  )
}

export default Footer
