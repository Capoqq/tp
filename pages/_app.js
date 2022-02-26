import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import { persistor, store } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
function MyApp({ Component, pageProps }) {
  return(
   <>

    <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </>
  ); 
}

export default MyApp
