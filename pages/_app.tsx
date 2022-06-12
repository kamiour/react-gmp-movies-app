import Head from 'next/head';
import { wrapper } from '../src/store';
import '../src/index.scss';
import appStyles from '../src/App.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Movie App</title>
      </Head>

      <div id="modal-container"></div>
      <div className={appStyles.App}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default wrapper.withRedux(MyApp);
