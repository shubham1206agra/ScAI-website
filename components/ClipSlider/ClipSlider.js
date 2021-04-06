import useScript from "../../utils/useScript";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardPlain from "../NewsCard/NewsCardPlain";
import Slide from "./Slide";

const ClipSlider = () => {
    useScript("/js/clip_slider.js");
    return (
        <div className="slider">
            <div className="slider__slides">
                <Slide
                    active
                    heading="Welcome!"
                    subText="Greetings, AI Enthusiast!"
                    backImg="https://wallpaperaccess.com/full/30100.jpg"
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "30vh",
                            right: "10vw",
                        }}
                    >
                        <NewsCardPlain
                            category="Establishment"
                            title="IIT Delhi establishes School of AI"
                            link="https://home.iitd.ac.in/news-ai.php"
                            description="Indian Institute of Technology (IIT) Delhi has established an independent 'School of Artificial Intelligence (ScAI)' on its campus. The institute is already a leader in the country and Asia for research and educational activity in AI. As per CSRankings.org, IIT Delhi is No.1 in India based on the number of high quality publications in the area of AI in the last ten years. The School of Artificial Intelligence (ScAI) aims to cement IIT Delhi’s leadership position in India and considerably improve its global standing."
                        />
                    </div>
                </Slide>
                <Slide
                    heading="Establishment Articles"
                    subText="Some news articles upon establishment."
                    backImg="/bg2.jpg"
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "20vh",
                            right: "10vw",
                        }}
                    >
                        <NewsCard
                            image="https://static.toiimg.com/thumb/msid-77902892,imgsize-201060,width-300,height-200,resizemode-4/77902892.jpg"
                            title="IIT-Delhi launches AI school, to begin course from January"
                            link="https://timesofindia.indiatimes.com/city/delhi/iit-delhi-launches-ai-school-to-begin-course-from-january/articleshow/77902846.cms"
                            category="The Times of India"
                            description="IIT-Delhi announced the establishment of School of Artificial Intelligence on its campus. The school will begin its PhD programme in January."
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: "20vh",
                            right: "35vw",
                        }}
                    >
                        <NewsCardPlain
                            title="आईआईटी दिल्ली में स्कूल ऑफ आर्टिफिशियल इंटेलीजेंस शुरू, बहुविषयक विभाग मिलकर करेंगे काम"
                            link="https://www.amarujala.com/education/school-of-artificial-intelligence-starts-at-iit-delhi"
                            category="अमर उजाला"
                            description="देश का पहला पीएचडी आर्टिफिशियल इंटेलीजेंस (एआई) बैच आईआईटी दिल्ली में 2021 सत्र में शुरू होगा। आईआईटी दिल्ली कैंपस में देश का पहला स्कूल ऑफ आर्टिफिशियल इंटेलीजेंस बनकर तैयार हो गया है। जल्द ही एआई एमटेक प्रोग्राम भी शुरू किया जाएगा। आईआईटी दिल्ली के डायरेक्टर प्रो. वी रामगोपाल राव ने बुधवार को कहा कि प्रधानमंत्री नरेंद्र मोदी के दिशा-निर्देश के तहत स्कूल ऑफ आर्टिफिशियल इंटेलीजेंस तैयार हो गया।"
                        />
                    </div>
                </Slide>
                <Slide
                    heading="Video Article on YouTube!"
                    subText="Video looks cool, isn't it?"
                    backImg="/bg3.jpg"
                >
                    <div className="embed-responsive embed-responsive-16by9"
                        style={{
                            position: "absolute",
                            top: "30vh",
                            right: "11vw",
                            height: "349px",
                            width: "620px"
                        }}
                    >
                        <iframe className="embed-responsive-item hide_iframe"
                            src="https://www.youtube.com/embed/NlgCHlA0EQ0?autoplay=0"
                            allowFullScreen
                        />
                    </div>
                </Slide>
                <Slide
                    heading="Limited browser support"
                    subText="Forget about IE/Edge and FF"
                    backImg="/7T9364v.gif"
                />
                <Slide
                    prev
                    heading="Check my other stuff!"
                    subText="Other Demos and Twitter"
                    backImg="/landimg.jpeg"
                />
                {/* <div className="slide s--prev">
                    <div className="slide__inner">
                        <div className="slide__content">
                            <h2 className="slide__heading">
                                Check my other stuff!
                            </h2>
                            <p className="slide__text">
                                <a
                                    href="https://codepen.io/suez/pens/public/"
                                    target="_blank"
                                >
                                    Other demos
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://twitter.com/NikolayTalanov"
                                    target="_blank"
                                >
                                    Twitter
                                </a>
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="slider__control">
                <div className="slider__control-line"></div>
                <div className="slider__control-line"></div>
            </div>
            <div className="slider__control slider__control--right m--right">
                <div className="slider__control-line"></div>
                <div className="slider__control-line"></div>
            </div>
        </div>
    );
};

export default ClipSlider;
