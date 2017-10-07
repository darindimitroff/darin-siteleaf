import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Darin Dimitroff"
          meta={[
            {
              name: 'description',
              content: 'Inter-disciplinary digital designer living in Sofia.',
            },
          ]}
        />
        <div>{this.props.children()}</div>
      </div>
    )
  }
}
