import '../styles/global.css'
import { ChallengesContextProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContextProvider> 
      <Component {...pageProps} />
    </ChallengesContextProvider>
  )
}

export default MyApp
