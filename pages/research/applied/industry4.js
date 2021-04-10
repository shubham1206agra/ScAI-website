import React from "react";
import StartTop from "../../../components/StartTop/StartTop";
import Waves from "../../../components/Waves/Waves";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import Data from "../../../textComp/research/applied/Industry4/Data";

const Ind4 = () => {
    return (
        <React.Fragment>
            <Header />
            <StartTop
                text="Industry 4.0"
                // image="/204c420e096e4706ee89dd37031dc33e.jpg"
                image="/dataimg/ind4-bg.jpg"
                objPos="center"
            />
            <Waves r={255} g={255} b={255} />
            <Data />
            <ScrollToTop />
            <Footer />
        </React.Fragment>
    );
};

export default Ind4;
