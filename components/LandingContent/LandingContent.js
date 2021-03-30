// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LandingContent.module.css";
import SwiperCard from "../CardSwiper/CardSwiper";

const LandingContent = () => {
    return (
        <>
            <div className={styles.topDiv}>
                <h2>To Be Decided</h2>
                <div></div>
                <p>
                    IIT Delhi celebrated its Diamond Jubilee in the year 2020.
                    The Institute sees AI as an emerging technology domain where
                    the Institute has already invested in building core internal
                    strength. The Institute has established ScAI in September
                    2020 to strengthen education and research in AI, Machine
                    Learning and Data Science, and enable societal and
                    commercial applications. ScAI will provide a single platform
                    for students, faculty members, industry, non-profit
                    organisations, and policy makers, who share the common goal
                    of making India an AI-powerhouse.
                </p>
            </div>
            <div className={styles.midDiv}>
                <h2>News</h2>
                <span>
                    <SwiperCard sw="zy" />
                </span>
            </div>
            <div className={styles.bottomDiv}>
                <h2>Announcement</h2>
                <div></div>
                <p>
                    ScAI welcomes applications from strongly motivated students
                    who want to pursue their Ph.D. in the areas of both core AI
                    and applied AI.
                </p>
                <p>
                    ScAI welcomes applications for post doctoral and faculty
                    positions in the areas of both core AI and applied AI. For
                    details please contact <a href="mailto:hodscai@admin.iitd.ac.in">hodscai@admin.iitd.ac.in</a>
                </p>
                {/* <span><SwiperCard sw="zz" /></span> */}
            </div>
        </>
    );
};

export default LandingContent;
