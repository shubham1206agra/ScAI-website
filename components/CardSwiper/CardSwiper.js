import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectFade,
    Navigation,
    Pagination,
    Mousewheel,
    Autoplay,
} from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination, Mousewheel, Autoplay]);

const CardSwiper = (props) => {
    return (
        <React.Fragment>
            <Swiper
                className="swiper-container"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                spaceBetween={20}
                slidesPerView={1}
                effect="fade"
                speed={300}
                loop={true}
                mousewheel={{ invert: false }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    el: `.pag${props.sw}`,
                }}
                navigation={{
                    nextEl: `.next${props.sw}`,
                    prevEl: `.prev${props.sw}`,
                }}
            >
                <div className="swiper-wrapper">
                    <SwiperSlide className="slider-item swiper-slide">
                        <div className="slider-image-wrapper">
                            <img
                                className="slider-image"
                                src="https://home.iitd.ac.in/public/storage/uploads/daan_1636712123.png"
                                alt="Yardi"
                            />
                        </div>
                        <div className="slider-item-content">
                            <h1 className="swiper-h1">
                                <a
                                    href="https://home.iitd.ac.in/show.php?id=66&in_sections=Press"
                                    target="_blank"
                                >
                                    IITD alumnus Anant Yardi donates USD 10
                                    Milllion to ScAI
                                </a>
                            </h1>
                            <p className="swiper-p">
                                Mr Anant Yardi, President and Founder of Yardi
                                Systems, and an alumnus of IIT Delhi, has agreed
                                to gift USD 10 million (Rs ~75 Cr) to IIT Delhi.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item swiper-slide">
                        <div className="slider-image-wrapper">
                            <img
                                className="slider-image"
                                src="https://static.toiimg.com/thumb/msid-77902892,imgsize-201060,width-300,height-200,resizemode-4/77902892.jpg"
                                alt="SliderImg"
                            />
                        </div>
                        <div className="slider-item-content">
                            <h1 className="swiper-h1">
                                <a
                                    href="https://timesofindia.indiatimes.com/city/delhi/iit-delhi-launches-ai-school-to-begin-course-from-january/articleshow/77902846.cms"
                                    target="_blank"
                                >
                                    IIT-Delhi launches AI school(TOI)
                                </a>
                            </h1>
                            <p className="swiper-p">
                                IIT-Delhi announced the establishment of School
                                of Artificial Intelligence on its campus. The
                                school will begin its PhD programme in January.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item swiper-slide">
                        <div className="slider-image-wrapper">
                            <img
                                className="slider-image"
                                src="https://images.financialexpress.com/2020/09/iit660.jpg"
                                alt="SliderImg"
                            />
                        </div>
                        <div className="slider-item-content">
                            <h1 className="swiper-h1">
                                <a
                                    href="https://www.amarujala.com/education/school-of-artificial-intelligence-starts-at-iit-delhi"
                                    target="_blank"
                                >
                                    आईआईटी दिल्ली में स्कूल ऑफ आर्टिफिशियल
                                    इंटेलीजेंस शुरू, बहुविषयक विभाग मिलकर करेंगे
                                    काम
                                </a>
                            </h1>
                            <p className="swiper-p">
                                {/* अमर उजाला */}
                                {/* Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore */}
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item swiper-slide">
                        <div className="slider-image-wrapper">
                            <img
                                className="slider-image"
                                src="https://img.youtube.com/vi/NlgCHlA0EQ0/0.jpg"
                                alt="SliderImg"
                            />
                        </div>
                        <div className="slider-item-content">
                            <h1 className="swiper-h1">
                                <a
                                    href="https://www.youtube.com/watch?v=TpikDstFkF4"
                                    target="_blank"
                                >
                                    Plans for ScAI (in Hindi)
                                </a>
                            </h1>
                            <div style={{ paddingTop: "100px" }}></div>
                            <p className="swiper-p"></p>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
            <div className={`swiper-pagination pag${props.sw}`}></div>
            <div className="slider-buttons">
                <button className={`swiper-button-prev prev${props.sw}`}>
                    Prev
                </button>
                <button className={`swiper-button-next next${props.sw}`}>
                    Next
                </button>
            </div>
        </React.Fragment>
    );
};

export default CardSwiper;
