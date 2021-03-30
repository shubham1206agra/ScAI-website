import styles from "./FacCard.module.css";

const FacCard = (props) => {
    return (
        <article className={`${styles.card} ${styles.cardxhsm}`}>
            <img
                src={props.data.image}
                className={styles.cardimgtop}
            />
            <div className={styles.cardbody}>
                <h5 className={styles.cardtitle}>{props.data.name}</h5>
                <h6 className={styles.cardsubtitle}>{props.data.position}</h6>
                <p className={styles.cardtext} style={{ fontSize: ".8rem" }}>
                    <strong>Research areas</strong>:{" "}
                    {props.data.research_areas.join(", ")}
                </p>
            </div>
        </article>
    );
};

export default FacCard;
