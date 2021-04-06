import styles from "./StartTop.module.css";

const StartTop = (props) => {
    return (
        <div className={styles.mainDiv}>
            <img
                src={props.image}
                alt="Top Bg Image"
            />
            <h1>{props.text}</h1>
        </div>
    );
};

export default StartTop;
