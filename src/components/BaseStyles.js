import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const BaseStyles = () => injectGlobal`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    min-height: 100%;
  }
  body {
    font-size: 1rem;
    line-height: 1.45;
  }
  ::selection {
    background: #FAFACF;
  }
`
export default BaseStyles
