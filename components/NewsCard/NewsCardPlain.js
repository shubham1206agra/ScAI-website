import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NewsCard.module.css";
import React from "react";

const NewsCardPlain = (props) => {
    return (
        <div className={`card-box ${styles.card_box}`}>
            <div className={`card ${styles.card}`}>
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

export default NewsCardPlain;
