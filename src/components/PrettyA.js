import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const PrettyA = styled.a`
  ${space} ${width} ${fontSize} ${color} font-weight: 800;
  color: inherit;
  text-decoration: none;
  transition: ${props => props.theme.hoverTransition};
  &:hover {
    opacity: ${props => (props.hoverColor ? '1' : '.65')};
    color: ${props => (props.hoverColor ? props.hoverColor : null)};
  }
`

export default PrettyA
