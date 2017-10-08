import React from 'react'
import Link from 'gatsby-link'
import { Text, Box, Measure } from 'rebass'
import PrettyHeading from '../components/PrettyHeading'
import FluidContainer from '../components/FluidContainer'

import PrettyA from '../components/PrettyA'

const IndexPage = () => (
  <FluidContainer pt={6}>
    <PrettyHeading mb={3} f={4} is="h1">
      👋 Hey, I'm Darin
    </PrettyHeading>
    <Measure>
      <Text f={1}>
        A technical product designer living in Sofia. Currently working at{' '}
        <PrettyA
          href="http://www.spacefarm.digital"
          target="_blank"
          hoverColor="#5538fa"
        >
          spacefarm
        </PrettyA>, a product design shop I co-founded with my partner Kalina.
      </Text>
      <Link to="/books">Books</Link>
      <Link to="/movies">Movies</Link>
    </Measure>
  </FluidContainer>
)
export default IndexPage
