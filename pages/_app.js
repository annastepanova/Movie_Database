import App from 'next/app'
import api from '../services/configureApi'
import Layout from '../components/Layout'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps, config }) {
  return (
    <Layout>
      <Component {...pageProps} config={config}/>
    </Layout>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const config = await api.getConfig()
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps, config }
}
