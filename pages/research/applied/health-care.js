import React from "react";
import StartTop from "../../../components/StartTop/StartTop";
import Waves from "../../../components/Waves/Waves";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import Data from "../../../textComp/research/applied/HealthCare/Data";

const HealthCare = () => {
    return (
        <React.Fragment>
            <Header />
            <StartTop
                text="Health Care"
                // image="/dataimg/health-bg.jpg"
                image="/img2.png"
            />
            <Waves r={255} g={255} b={255} />
            <Data />
            <ScrollToTop />
            <Footer />
        </React.Fragment>
    );
};

export default HealthCare;
