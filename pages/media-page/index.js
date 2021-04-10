import React from "react";
import StartTop from "../../components/StartTop/StartTop";
import Waves from "../../components/Waves/Waves";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Data from "../../textComp/media-page/Data";

const MediaPage = () => {
    return (
        <React.Fragment>
            <Header />
            <StartTop
                text="News"
                image="/bg-top.jpg"
                // image="/204c420e096e4706ee89dd37031dc33e.jpg"
                // image="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
            />
            <Waves r={255} g={255} b={255} />
            <Data />
            <ScrollToTop />
            <Footer />
        </React.Fragment>
    );
};

export default MediaPage;
