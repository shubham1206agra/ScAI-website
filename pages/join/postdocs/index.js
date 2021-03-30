import React from "react";
import StartTop from "../../../components/StartTop/StartTop";
import Waves from "../../../components/Waves/Waves";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import Data from "../../../textComp/join/postdocs/Data";

const PostDocsJoin = () => {
    return (
        <React.Fragment>
            <Header />
            <StartTop
                text="Prospective PostDocs"
                // image="/204c420e096e4706ee89dd37031dc33e.jpg"
                image="/img2.png"
            />
            <Waves r={255} g={255} b={255} />
            <ScrollToTop />
            <Data />
            <Footer />
        </React.Fragment>
    );
};

export default PostDocsJoin;
