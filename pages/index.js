// import styles from '../styles/Home.module.css'
// import Waves from "../components/Waves2/Waves";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import StartTopLanding from "../components/StartTopLanding/StartTopLanding";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import LandingContent from "../components/LandingContent/LandingContent";
import ClipSlider from "../components/ClipSlider/ClipSlider";
// import NewsCard from "../components/NewsCard/NewsCard";
// import NewsCardPlain from "../components/NewsCard/NewsCardPlain";

export default function Home() {
  return (
      <>
      <Header alwcol />
      <ClipSlider />
      {/* <StartTopLanding text="Welcome to School of Artificial Intelligence (ScAI), IIT Delhi" />
      <Waves r={255} g={255} b={255} /> */}
      {/* <NewsCard />
      <NewsCardPlain /> */}
      <LandingContent />
      {/* <DonorCard /> */}
      <ScrollToTop />
      <Footer />
      </>
  )
}
