import styles from "./StartTopLanding.module.css";

const StartTop = (props) => {
    return (
        <div className={styles.mainDiv}>
            <img
                src="landimg.jpeg"
                alt="landing"
            />
            <h1>{props.text}</h1>
        </div>
    );
};

export default StartTop;
