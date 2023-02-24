import PropTypes from 'prop-types'
import React from "react"

import { Header, Main, Section } from '../../components'
import { Container } from './styles'
export function Home({ props }) {

  console.log(props)
  return (
    <Container>
      <Header />
      <Section />
      <Main />
      {/* <AboutUs /> */}

    </Container>
  )
}


Home.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string
  })
}