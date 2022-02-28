import '/styles/globals.css'

import { SWRConfig } from 'swr'

// 템플릿 전역 설정 
function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
