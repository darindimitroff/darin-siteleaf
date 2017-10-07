import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

import { Provider, Container } from 'rebass'

const TemplateWrapper = ({ children }) => (
  <Provider
    theme={{
      font: 'Nitti Grotesk',
      fontSizes: [15, 22, 33, 50, 75, 112],
      weights: [400, 600],
    }}
  >
    <Helmet
      title="Darin Dimitroff"
      meta={[
        {
          name: 'description',
          content: 'A technical product designer living in Sofia.',
        },
      ]}
    />
    <Container>{children()}</Container>
  </Provider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
