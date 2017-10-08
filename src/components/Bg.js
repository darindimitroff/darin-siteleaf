import React from 'react'
import styled from 'styled-components'

import { Box } from 'rebass'

const Bg = styled(Box)`
  background-color: ${props => props.theme.bg};
  position: relative;
  min-height: 100vh;
`

export default Bg
