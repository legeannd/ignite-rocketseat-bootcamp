import { Authprovider } from '../contexts/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Authprovider>
      <Component {...pageProps} />
    </Authprovider>
  )
}

export default MyApp
