import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image, Text } from 'rebass'

import CleanA from '../components/CleanA'

const propTypes = {
  poster: PropTypes.string.isRequired,
  link: PropTypes.string,
}

const defaultProps = {
  link: '#',
}

const MoviePoster = styled(CleanA).attrs({ target: '_blank' })`
  display: block;
  transition: ${props => props.theme.transition};
  backface-visibility: none;
  img {
    border-radius: 1px;
  }
  p {
    transition: ${props => props.theme.transition};
    backface-visibility: none;
  }
  &:hover {
    transform: scale(1.025) translateY(-4px);
    p {
      transform: scale(1.025) translateY(3px);
    }
  }
`

const Movie = props => (
  <MoviePoster href={props.link} title={props.name}>
    <Image mb={2} src={props.poster} />
    <Text center color="white">
      {props.name}
    </Text>
  </MoviePoster>
)

Movie.PropTypes = propTypes
Movie.defaultProps = defaultProps

export default Movie
