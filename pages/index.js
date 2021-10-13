// import Waves from "../components/Waves2/Waves";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import StartTopLanding from "../components/StartTopLanding/StartTopLanding";
import StartTop from "../components/StartTop/StartTop";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import LandingContent from "../components/LandingContent/LandingContent";
import ClipSlider from "../components/ClipSlider/ClipSlider";
import { Container, Row, Col } from "react-bootstrap";
import SpCard from "../components/NewsCard/SpCard";
import Waves from "../components/Waves/Waves";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChalkboardTeacher,
    faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import Dona from "../public/donation.svg";
import { useState, useEffect } from "react";

export default function Home() {
    const [width, updateWidth] = useState(0);
    const resizeEvent = () => updateWidth(window.innerWidth);
    useEffect(() => {
        updateWidth(window.innerWidth);
        window.addEventListener("resize", (e) => resizeEvent());
        return () => {
            window.removeEventListener("resize", (e) => resizeEvent());
        };
    });
    return (
        <>
            <Header alwcol />
            {width < 1275 ? (
                <>
                    <StartTop image="/land-temp.jpg"/>
                    {/* <StartTopLanding text="Welcome to School of Artificial Intelligence (ScAI), IIT Delhi" /> */}
                    <Waves r={255} g={255} b={255} />
                    <LandingContent />
                </>
            ) : (
                <ClipSlider />
            )}
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
                                style={{ fontSize: "7rem", color: "white" }}
                                icon={faChalkboardTeacher}
                            />
                        </SpCard>
                    </Col>
                    <Col>
                        <SpCard
                            title="Students"
                            btnText="Interested in a PhD in AI?"
                            link="/join/phd"
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
                            title="Alumni / Well Wisher"
                            btnText="Support Us by becoming a Founding Donor."
                            link="/support"
                        >
                            <Dona />
                        </SpCard>
                    </Col>
                </Row>
            </Container>
            <Footer spAlign />
        </>
    );
}
