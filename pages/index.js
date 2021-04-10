// import Waves from "../components/Waves2/Waves";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import StartTopLanding from "../components/StartTopLanding/StartTopLanding";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
// import LandingContent from "../components/LandingContent/LandingContent";
import ClipSlider from "../components/ClipSlider/ClipSlider";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header alwcol />
            <ClipSlider />
            {/* <StartTopLanding text="Welcome to School of Artificial Intelligence (ScAI), IIT Delhi" />
      <Waves r={255} g={255} b={255} /> */}
            {/* <NewsCard />
      <NewsCardPlain /> */}
            {/* <LandingContent /> */}
            {/* <DonorCard /> */}
            <ScrollToTop />
            <Container fluid>
                <Row style={{ fontSize: "1.2rem" }}>
                    <Link href="/join/faculty">
                        <Col
                            style={{
                                backgroundColor: "#c21717",
                                textAlign: "center",
                                zIndex: "10",
                            }}
                        >
                            <a href="/join/faculty" className="spLink">
                                We are Hiring!
                            </a>
                        </Col>
                    </Link>
                    <Link href="/join/students">
                        <Col style={{ textAlign: "center", zIndex: "10" }}>
                            Interested in a PhD in AI?
                        </Col>
                    </Link>
                    <Link href="/support">
                        <Col
                            style={{
                                backgroundColor: "#55415d",
                                textAlign: "center",
                                zIndex: "10",
                            }}
                        >
                            <a href="/support" className="spLink">
                                Support Us by becoming a Founding Donor.
                            </a>
                        </Col>
                    </Link>
                </Row>
            </Container>
            <Footer spAlign />
        </>
    );
}
