import React from 'react'
import { Heading } from 'rebass'
import styled from 'styled-components'

const PageTitle = styled(Heading).attrs({
  f: [3, 4],
})`
  color: ${props => props.theme.titleText};
  display: inline-block;
  padding: ${props => (props.theme.titleBg ? '.5rem 1rem' : '.5rem 0')};
  line-height: 1;
  margin-bottom: 1rem;
  background: ${props => (props.theme.titleBg ? props.theme.titleBg : null)};
  border-radius: ${props =>
    props.theme.titleRadius ? props.theme.titleRadius : null};
`

export default PageTitle
