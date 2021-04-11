import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NewsCard.module.css";
import React from "react";

const NewsCard = (props) => {
    return (
        <div className={`card-box ${styles.card_box}`}>
            <div className={`card ${styles.card}`}>
                <div
                    style={{
                        backgroundImage: `url(${
                            props.image ? props.image : "/lifestyle-8.jpg"
                        })`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                    }}
                    className={styles.header}
                >
                    {/* <img src="/lifestyle-8.jpg" /> */}
                    <div className={styles.filter}></div>

                    <div className={styles.actions}>
                        <button
                            className={`btn ${styles.btn} ${styles.btn_fill} ${styles.btn_round} ${styles.btn_neutral} ${styles.btn_modern}`}
                        >
                            <a
                                href={props.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {props.btnText ? props.btnText : "Read Article"}
                            </a>
                        </button>
                    </div>
                </div>

                <div className={styles.content}>
                    <h6 className={styles.category}>
                        {props.category ? props.category : "News"}
                    </h6>
                    <h4 className={styles.title}>
                        <a
                            href={props.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {props.title
                                ? props.title
                                : "Try the new hairstyle from this Barber Shop"}
                        </a>
                    </h4>
                    <p className={styles.description}>
                        {props.description
                            ? props.description
                            : "When selling products it's always a good idea to go with commanding fonts that are good at showing authority and security. I feel like Raleway and Roboto do just that."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
