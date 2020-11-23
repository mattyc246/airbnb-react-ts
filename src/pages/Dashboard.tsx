import React from 'react'
import styled from 'styled-components'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import { Layout } from "../components"

const StyledBody = styled(Card.Body)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Dashboard = () => {
  return (
    <Layout showFooter={false} padded={true}>
      <h1 className="text-center my-4">Welcome back, {`{{Put name here}}`}!</h1>
      <Container>
        <Row>
          <Col className="my-4" lg={6}>
            <Card>
              <StyledBody>

              </StyledBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Dashboard
