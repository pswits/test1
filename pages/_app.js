import Navbar from '../componets/navbar'
import '../app/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>

    <Component {...pageProps} />
  </>
}

export default MyApp

