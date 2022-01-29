// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LandingContent.module.css";
import SwiperCard from "../CardSwiper/CardSwiper";

const LandingContent = () => {
    return (
        <>
            <div className={styles.topDiv}>
                <h2>IIT Delhi establishes School of AI</h2>
                <div></div>
                <p style={{ fontSize: "1.2rem" }}>
                    Indian Institute of Technology (IIT) Delhi has established
                    'Yardi School of Artificial Intelligence (ScAI)' on its
                    campus. The Yardi School of Artificial Intelligence (ScAI)
                    aims to cement IIT Delhi’s leadership position in India and
                    considerably improve its global standing.
                </p>
            </div>
            <div className={styles.midDiv}>
                <h2>News</h2>
                <span>
                    <SwiperCard sw="zy" />
                </span>
            </div>
            <div className={styles.bottomDiv}>
                <h2>Announcements</h2>
                <div></div>
                <p>
                    ScAI welcomes applications from strongly motivated students
                    who want to pursue their Ph.D. in the areas of both core AI
                    and applied AI.
                    <br />
                    <a
                        href="https://ecampus.iitd.ac.in/PGADM/login"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link for Admissions
                    </a>
                </p>
                <p>
                    ScAI welcomes applications for post doctoral and faculty
                    positions in the areas of both core AI and applied AI. For
                    details please contact{" "}
                    <a href="mailto:hodscai@admin.iitd.ac.in">
                        hodscai[AT]admin.iitd.ac.in
                    </a>
                    <br />
                    <a
                        href="https://home.iitd.ac.in/jobs-iitd/index.php"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link for Post
                    </a>
                </p>
            </div>
        </>
    );
};

export default LandingContent;
