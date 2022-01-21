import Head from 'components/head'
import Menu from 'components/menu'
import {globalStyles} from 'styles/global'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head/>
      <div>
        <Menu/>
        <Component {...pageProps} />
      </div>
      <style jsx global>{globalStyles}</style>
    </>
  ) 
}

export default MyApp
