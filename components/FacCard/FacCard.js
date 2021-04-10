import styles from "./FacCard.module.css";
import React from "react";

const FacCard = (props) => {
    return (
        <article
            style={{ zIndex: 1 }}
            className={`${styles.card} ${styles.cardxhsm}`}
        >
            <img style={{objectFit: 'cover', objectPosition: props.data.imgPos ? props.data.imgPos : 'center'}} src={props.data.image} className={styles.cardimgtop} />
            <div className={styles.cardbody}>
                <h5 className={styles.cardtitle}>{props.data.name}</h5>
                <h6 className={styles.cardsubtitle}>{props.data.position}</h6>
                <div className={styles.cardtext} style={{ fontSize: "1.0rem", paddingLeft: '0.3rem' }}>
                    <ul>
                        {props.data.research_areas.map((element, i) => (
                            <li key={i}>{element}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default FacCard;
