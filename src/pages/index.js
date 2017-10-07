import React from 'react'
import { Text, Box, Measure } from 'rebass'
import PrettyHeading from '../components/PrettyHeading'

const IndexPage = () => (
  <Box pt={5}>
    <PrettyHeading mb={3} f={4} is="h1">
      👋 Hey, I'm Darin
    </PrettyHeading>
    <Measure>
      <Text f={1}>
        A technical product designer living in Sofia. Currently working at{' '}
        <a href="http://www.spacefarm.digital" target="_blank">
          spacefarm
        </a>, a product design shop I co-founded with my partner Kalina.
      </Text>
    </Measure>
  </Box>
)
export default IndexPage
