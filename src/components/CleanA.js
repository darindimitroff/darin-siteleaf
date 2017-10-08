import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const CleanA = styled.a`
  ${space} ${width} ${fontSize} ${color} display: block;
  min-width: 0 !important;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  position: relative;
`

export default CleanA
