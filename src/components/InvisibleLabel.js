import React from 'react'
import { Text } from 'rebass'
import styled from 'styled-components'

const InvisibleLabel = styled(Text)`
  opacity: 0;
  width: 1px;
  height: 1px;
  position: absolute;
`
export default InvisibleLabel
