import React from 'react'
import { Heading, Text, Box } from 'rebass'

const IndexPage = () => (
  <Box pt={5}>
    <Heading mb={3} f={4}>
      👋 Hey, I'm Darin
    </Heading>
    <Text f={1}>
      A technical product designer living in Sofia. Currently working at{' '}
      <a href="http://www.spacefarm.digital" target="_blank">
        spacefarm
      </a>, a product design shop I co-founded with my partner Kalina.
    </Text>
  </Box>
)
export default IndexPage
