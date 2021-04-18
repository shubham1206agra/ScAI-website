// import React from "react";
import styles from "./Waves.module.css";
import { BrowserView } from "react-device-detect";

const Waves = (props) => {
    const red = props.r;
    const green = props.g;
    const blue = props.b;
    return (
        <BrowserView>
            <div className={styles.header}>
                <svg
                    className={styles.waves}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g className={styles.parallax}>
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="0"
                            fill={`rgba(${red},${green},${blue},0.7)`}
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="3"
                            fill={`rgba(${red},${green},${blue},0.5)`}
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="5"
                            fill={`rgba(${red},${green},${blue},0.3)`}
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="7"
                            fill={`rgb(${red},${green},${blue})`}
                        />
                    </g>
                </svg>
            </div>
        </BrowserView>
    );
};

export default Waves;
