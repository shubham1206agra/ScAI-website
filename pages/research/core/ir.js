import React from "react";
import StartTop from "../../../components/StartTop/StartTop";
import Waves from "../../../components/Waves/Waves";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import Data from "../../../textComp/research/core/IR/Data";

const IR = () => {
    return (
        <React.Fragment>
            <Header />
            <StartTop
                text="Information Retrieval / Data Science"
                // image="/204c420e096e4706ee89dd37031dc33e.jpg"
                image="/img2.png"
            />
            <Waves r={255} g={255} b={255} />
            <Data />
            <ScrollToTop />
            <Footer />
        </React.Fragment>
    );
};

export default IR;
