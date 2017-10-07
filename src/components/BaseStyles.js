import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const BaseStyles = () => injectGlobal`
  ${reset}
  * {
      box-sizing: border-box;
  }
  ::selection {
    background: #BCF5DD;
  }
  body {
    line-height: 1.45;
  }
`
export default BaseStyles
