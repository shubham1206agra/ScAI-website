import '../styles/globals.css';
import '../styles/CardSwiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import '../styles/ClipSlider.scss';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// MyApp.getInitialProps = async (ctx) => {
//   const appProps = await App.getInitialProps(ctx);
//   return { ...appProps };
// }

export default MyApp
