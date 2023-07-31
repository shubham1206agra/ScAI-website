import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
    faFacebookSquare,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
    return (
        <div className={`${props.spAlign ? "" : styles.mt5} ${styles.py5} ${styles.footer}`}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div
                        className={`${styles.collg5} ${styles.colxs12} ${styles.aboutcompany}`}
                    >
                        <h2>Yardi School of Artificial Intelligence (ScAI), IIT Delhi</h2>
                        {/* <p className={`${styles.pr5} ${styles.textwhite50}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam ac ante mollis quam tristique convallis{" "}
                        </p>
                        <p>
                            <a href="#">
                                <FontAwesomeIcon
                                    className={styles.mr1}
                                    icon={faFacebookSquare}
                                />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p> */}
                    </div>
                    <div
                        className={`${styles.collg3} ${styles.colxs12} ${styles.links}`}
                    >
                        <h4 className={`${styles.mtlg0} ${styles.mtsm3}`}>
                            Links
                        </h4>
                        <ul className={`${styles.m0} ${styles.p0}`}>
                            <li>
                                - <Link href="/"><a href="/">Home</a></Link>
                            </li>
                            <li>
                                - <Link href="/people/faculty"><a href="/people/faculty">People -&gt; Faculty</a></Link>
                            </li>
                            <li>
                                - <Link href="/join/faculty"><a href="/join/faculty">Join -&gt; Faculty</a></Link>
                            </li>
                            <li>
                                - <Link href="/join/postdocs"><a href="/join/postdocs">Join -&gt; PostDocs</a></Link>
                            </li>
                            <li>
                                - <Link href="/join/mtech"><a href="/join/mtech">Join -&gt; Masters Students</a></Link>
                            </li>
                            <li>
                                - <Link href="/join/phd"><a href="/join/phd">Join -&gt; PhD Students</a></Link>
                            </li>
                            <li>
                                - <Link href="/support"><a href="/support">Support Us</a></Link>
                            </li>
                            <li>
                                - <Link href="/"><a href="/pdf/ScAIBrochure.pdf" target="_blank" rel="noopener noreferrer">Brochure</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`${styles.collg4} ${styles.colxs12} ${styles.location}`}
                    >
                        <h4 className={`${styles.mtlg0} ${styles.mtsm4}`}>
                            Location
                        </h4>
                        <div style={{paddingBottom: '20px'}}>
                        <p>AD-236 MS Building</p>
                        <p>Indian Institute of Technology Delhi</p>
                        <p>Hauz-Khas</p>
                        <p>New Delhi - 110016</p>
                        </div>
                        <p className={styles.mb0}>
                            <FontAwesomeIcon
                                className={styles.mr3}
                                icon={faPhone}
                            />
                            <a href="tel:+91-11-2654-8728">+91-11-2654-8728 (O)</a>
                        </p>
                        <p>
                            <FontAwesomeIcon
                                className={styles.mr3}
                                icon={faEnvelope}
                            />
                            <a href="mailto:office@scai.iitd.ac.in">
                                office[AT]scai.iitd.ac.in
                            </a>
                        </p>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.mt5}`}>
                    <div className={`${styles.col} ${styles.copyright}`}>
                        <p className="">
                            <small className={styles.textwhite50}>
                                &copy; 2021. All Rights Reserved.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
