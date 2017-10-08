import React from 'react'
import { Heading } from 'rebass'
import styled from 'styled-components'

const PageTitle = styled(Heading).attrs({
  f: [3, 4],
})`
  color: ${props => props.theme.text};
  display: inline-block;
  padding: 1rem 0;
`

export default PageTitle
