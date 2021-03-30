import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className={styles.scrollTop}>
            {isVisible && (
                <div onClick={scrollToTop}>
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/lucid-arrows-and-directions/24/scroll_up_direction_up_arrow_top_angular-512.png"
                        alt="Go to top"
                    />
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
