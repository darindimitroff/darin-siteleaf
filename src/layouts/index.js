import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import BaseStyles from '../components/BaseStyles'

import { Provider, Container } from 'rebass'

class TemplateWrapper extends React.Component {
  render() {
    BaseStyles()
    return (
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
        <Container>{this.props.children()}</Container>
      </Provider>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
