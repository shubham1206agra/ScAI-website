// import styles from '../styles/Home.module.css'
import Waves from "../components/Waves2/Waves";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import StartTopLanding from "../components/StartTopLanding/StartTopLanding";
import CardSwiper from '../components/CardSwiper/CardSwiper';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import LandingContent from "../components/LandingContent/LandingContent";
import DonorCard from "../components/DonorCard/DonorCard";

export default function Home() {
  return (
      <>
      <Header />
      <StartTopLanding text="Welcome to School of Artificial Intelligence (ScAI), IIT Delhi" />
      <Waves r={255} g={255} b={255} />
      <LandingContent />
      {/* <DonorCard /> */}
      <ScrollToTop />
      <Footer />
      </>
  )
}
