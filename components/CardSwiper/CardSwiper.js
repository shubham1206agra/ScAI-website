import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectFade,
    Navigation,
    Pagination,
    Mousewheel,
    Autoplay
} from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination, Mousewheel, Autoplay]);

const CardSwiper = (props) => {
    return (
        <React.Fragment>
            <Swiper
                className="swiper-container"
                autoplay={{delay: 5000, disableOnInteraction: false}}
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
                                src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80"
                                alt="SliderImg"
                            />
                        </div>
                        <div className="slider-item-content">
                            <h1 className="swiper-h1">Postcards From Italy</h1>
                            <p className="swiper-p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item swiper-slide">
                        <div className="slider-image-wrapper">
                            <img
                                className="slider-image"
                                src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                                alt="SliderImg"
                            />
                        </div>
                        <div className="slider-item-content">
                            <h1 className="swiper-h1">Bunker</h1>
                            <p className="swiper-p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item swiper-slide">
                        <div className="slider-image-wrapper">
                            <img
                                className="slider-image"
                                src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2600&q=80"
                                alt="SliderImg"
                            />
                        </div>
                        <div className="slider-item-content">
                            <h1 className="swiper-h1">Small Mountain</h1>
                            <p className="swiper-p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item swiper-slide">
                        <div className="slider-image-wrapper">
                            <img
                                className="slider-image"
                                src="https://images.unsplash.com/photo-1564604761388-83eafc96f668?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=801.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt="SliderImg"
                            />
                        </div>
                        <div className="slider-item-content">
                            <h1 className="swiper-h1">Walking On a Dream</h1>
                            <p className="swiper-p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                            </p>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
            <div className={`swiper-pagination pag${props.sw}`}></div>
            <div className="slider-buttons">
                <button className={`swiper-button-prev prev${props.sw}`}>Prev</button>
                <button className={`swiper-button-next next${props.sw}`}>Next</button>
            </div>
        </React.Fragment>
    );
};

export default CardSwiper;
