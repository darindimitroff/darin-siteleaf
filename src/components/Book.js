import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image, Text } from 'rebass'

import InvisibleLabel from './InvisibleLabel'

const propTypes = {
  cover: PropTypes.string.isRequired,
  link: PropTypes.string,
}

const defaultProps = {
  link: '#',
}

const BookWrapper = styled.div`
  display: block;
  transform-origin: 0 50% 0;
  transform-style: preserve-3d;
  perspective: 1200px;
  :before {
    content: '';
    display: block;
    background-color: white;
    width: 99.9%;
    height: 99.9%;
    position: absolute;
    z-index: -1;
    border-radius: 4px;
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
  &:hover {
    box-shadow: ${props => props.theme.shadows.hover};
    transform: rotateY(-22deg);
  }
  &:after {
    content: '';
    width: 1rem;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.075),
      rgba(0, 0, 0, 0)
    );
    position: absolute;
    top: 0;
    left: 0.5rem;
    z-index: 2;
  }
`

const Book = props => (
  <div>
    <BookWrapper>
      <Cover href={props.link}>
        <Image src={props.cover} />
      </Cover>
    </BookWrapper>
    <InvisibleLabel>{props.name}</InvisibleLabel>
  </div>
)

Book.PropTypes = propTypes
Book.defaultProps = defaultProps

export default Book
