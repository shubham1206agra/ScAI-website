import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NewsCard.module.css";
import React from "react";
import Link from "next/link";

const SpCard = (props) => {
    return (
        <div className={`card-box ${styles.card_box}`}>
            <div className={`card ${styles.card} ${styles.card_with_border}`} data-background={props.type} data-color={props.color}>
                <div className={styles.header}>
                    <div className={`icon ${styles.icon}`}>
                        {props.children}
                    </div>
                </div>
                <div className={`${styles.content} text-center`}>
                    <h4 className={`${styles.title} text-center`}>
                        {props.title}
                    </h4>
                    {/* <p className={styles.description}>
                        Here can be a description about the application that is
                        for download. I feel like this app is what I need.
                    </p> */}
                </div>
                <div className={`${styles.footer} ${styles.btn_center}`}>
                    <Link href={props.link}>
                        <button
                            className={`btn ${styles.btn} ${styles.btn_fill} ${styles.btn_round} ${props.type ? styles.btn_neutral : styles.btn_info} ${styles.btn_modern}`}
                        >
                            {props.btnText}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SpCard;
