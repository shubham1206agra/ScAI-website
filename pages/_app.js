import '../styles/globals.css';
import '../styles/CardSwiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import '../styles/ClipSlider.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>School of Artificial Intelligence, IIT Delhi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// MyApp.getInitialProps = async (ctx) => {
//   const appProps = await App.getInitialProps(ctx);
//   return { ...appProps };
// }

export default MyApp
