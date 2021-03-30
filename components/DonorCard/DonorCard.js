import { useRef, useEffect } from "react";
import styles from "./DonorCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import gsap, { TweenMax, TimelineLite, Power3, Quad, TimelineMax } from "gsap";

const Image = () => (
    <>
        <div className={styles.headerImg}>
            <div className={styles.overlayElm} />
            <img
                src="https://images.unsplash.com/photo-1615818499660-30bb5816e1c7"
                alt="header image"
            />
        </div>
    </>
);

const DonorCard = (props) => {
    let app = useRef(null);
    let card = useRef(null);
    let img = useRef(null);
    let content = useRef(null);

    // let tl = new TimelineLite();
    let tl = gsap.timeline();

    useEffect(() => {
        TweenMax.to(app, 0, { css: { visibility: "visible" } });
        tl.from(
            card,

            {
                duration: 1.4,
                y: 1280,
                ease: Power3.easeOut,
                scale: 0,
                ease: Power3.easeOut,
            },
            0.2
        )
            .from(
                card.firstElementChild,

                { duration: 1.4, scale: 5.5, ease: Power3.easeOut },
                0.4
            )
            .from(
                img.firstElementChild,

                {
                    duration: 1.7,
                    y: -30,
                    ease: Power3.easeOut,
                    scale: 1.7,
                    ease: Power3.easeOut,
                },
                0.7
            )
            .from(
                content,

                { duration: 2, css: { opacity: 0 }, ease: Quad.easeInOut },
                0.7
            );
    }, []);

    return (
        <>
            <div className={styles.appWrap} ref={(el) => (app = el)}>
                <div className={styles.appContainer} ref={(el) => (card = el)}>
                    <Image />
                    <header className={styles.headerContainer}>
                        <div
                            className={styles.profileImg}
                            ref={(el) => (img = el)}
                        >
                            <img src={props.img} alt="profile image" />
                        </div>
                    </header>
                    <div
                        className={styles.contentContainer}
                        ref={(el) => (content = el)}
                    >
                        <h2>{props.name}</h2>
                        <h3>{props.pos}</h3>
                        <p>{props.desc}</p>
                        <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonorCard;
