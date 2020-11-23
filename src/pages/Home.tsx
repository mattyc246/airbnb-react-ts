import React, { FunctionComponent } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import styled from "styled-components"
import MobileBg from "../assets/images/atoll.jpg"
import DesktopBg from "../assets/images/maldives.jpg"
import { Layout, LocationForm } from "../components"

const Content = styled.div`
  width: 100vw;
  height: calc(100vh - 86.75px);
  background-image: url(${MobileBg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 3vw;

  @media screen and (min-width: 560px) {
    background-image: url(${DesktopBg});
    height: calc(100vh - 90.88px);
  }
`

const StyledRow = styled(Row)`
  height: inherit;
`

const StyledCard = styled(Card)`
  height: 100%;
  background-color: rgba(255,255,255,0.4);
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-body {
    flex-grow: 1;
  }
`

const Home: FunctionComponent = () => {
  return (
    <>
      <Layout showFooter={false} padded={false}>
        <Content>
          <StyledRow className="h-100">
            <Col className="d-none d-lg-flex" lg={5} />
            <Col lg={7}>
              <StyledCard className="rounded">
                <Card.Body className="p-4">
                  <h1 className="text-center">Find your dream vacation</h1>
                  <LocationForm />
                </Card.Body>
              </StyledCard>
            </Col>
          </StyledRow>
        </Content>
      </Layout>
    </>
  )
}

export default Home
