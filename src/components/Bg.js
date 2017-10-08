import React from 'react'
import styled, { css } from 'styled-components'

import { Box } from 'rebass'

const Bg = styled(Box)`
  background-color: ${props => props.theme.bg};
  position: fixed;
  top: 0;
  min-height: 100%;
  width: 100%;
  z-index: -1;
  overflow: hidden;
`
export default Bg
