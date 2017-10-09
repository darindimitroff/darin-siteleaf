import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'
import CD from '../assets/cd.svg'

import { Image, Absolute, Relative } from 'rebass'

import InvisibleLabel from '../components/InvisibleLabel'

import CleanA from '../components/CleanA'

const propTypes = {
  cover: PropTypes.string.isRequired,
  link: PropTypes.string,
}

const defaultProps = {
  link: '#',
}

const GameWrapper = styled.div`
  display: block;
  transform-origin: 0 50% 0;
  transform-style: preserve-3d;
  perspective: 1200px;
  position: relative;
  :before {
    content: '';
    display: block;
    background-color: ${darken(0.2, '#0647e9')};
    width: 99.9%;
    height: 99.9%;
    position: absolute;
    z-index: -1;
    border-radius: 4px;
    z-index: 1;
  }
`

const Cover = styled.a.attrs({
  target: 'blank',
})`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.rest};
  transition: ${props => props.theme.transition};
  display: block;
  transform-origin: 0rem 0;
  margin-bottom: 0.5rem;
  position: relative;
  border: 4px solid #0647e9;
  border-right-width: 3px;
  border-left: 0;
  border-radius: 4px 6px 6px 4px;
  z-index: 3;
  &:hover {
    box-shadow: ${props => props.theme.shadows.hover};
    transform: rotateY(-28deg);
  }
`

const Game = props => (
  <Relative>
    <GameWrapper title={props.name}>
      <Cover href={props.link}>
        <Image src={props.cover} />
      </Cover>
      <Absolute z={2} style={{ top: '50%', transform: 'translateY(-50%)' }}>
        <Image src={CD} w="97%" center />
      </Absolute>
    </GameWrapper>
    <InvisibleLabel>{props.name}</InvisibleLabel>
  </Relative>
)

Game.PropTypes = propTypes
Game.defaultProps = defaultProps

export default Game
