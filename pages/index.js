// import Waves from "../components/Waves2/Waves";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import StartTopLanding from "../components/StartTopLanding/StartTopLanding";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
// import LandingContent from "../components/LandingContent/LandingContent";
import ClipSlider from "../components/ClipSlider/ClipSlider";
import { Container, Row, Col } from "react-bootstrap";
import SpCard from "../components/NewsCard/SpCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChalkboardTeacher,
    faUserGraduate,
    faDonate,
} from "@fortawesome/free-solid-svg-icons";

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
            <Container fluid className="sp-container">
                <Row className="align-items-center">
                    <Col>
                        <SpCard
                            type="color"
                            color="red"
                            title="Faculty"
                            btnText="We are Hiring!"
                            link="/join/faculty"
                        >
                            <FontAwesomeIcon
                                style={{ fontSize: "7rem", color: 'white' }}
                                icon={faChalkboardTeacher}
                            />
                        </SpCard>
                    </Col>
                    <Col>
                        <SpCard
                            title="Students"
                            btnText="Interested in a PhD in AI?"
                            link="/join/students"
                        >
                            <FontAwesomeIcon
                                style={{ fontSize: "7rem" }}
                                icon={faUserGraduate}
                            />
                        </SpCard>
                    </Col>
                    <Col>
                        <SpCard
                            type="color"
                            color="purple"
                            title="Alumini / Well Wisher"
                            btnText="Support Us by becoming a Founding Donor."
                            link="/support"
                        >
                            <FontAwesomeIcon
                                style={{ fontSize: "7rem", color: 'white' }}
                                icon={faDonate}
                            />
                        </SpCard>
                    </Col>
                </Row>
            </Container>
            <Footer spAlign />
        </>
    );
}
