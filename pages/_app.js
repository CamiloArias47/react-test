import { UiContextProvider } from 'context/UIcontext'
import Head from 'components/head'
import Menu from 'components/menu'
import { UiWindows } from 'components/windowsUi'
import {globalStyles} from 'styles/global'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <UiContextProvider>
        <Head/>
        <div className='landingpage'>
          <Menu/>
          <Component {...pageProps} />
          <UiWindows />
        </div>
      </UiContextProvider>
      <style jsx global>{globalStyles}</style>
    </>
  ) 
}

export default MyApp
