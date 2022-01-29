import React from "react";
import styles from "./FacCardDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

class FacCardDetail extends React.Component {
    render() {
        return (
            <>
                <div className={styles.postrow}>
                    <div className={styles.minip}>
                        <div className={styles.circle}>
                            <div className={styles.imageb}>
                                <div
                                    style={{
                                        backgroundImage: `url(${this.props.data.image})`,
                                    }}
                                    className={styles.image}
                                />
                            </div>
                        </div>
                        <div style={{textTransform: 'capitalize'}} className={styles.name}>
                            {this.props.data.name}
                        </div>
                        <div
                            style={{ textTransform: "none" }}
                            className={styles.group}
                        >
                            {this.props.data.position} <br />
                            ScAI
                        </div>
                        {/* <div
                            style={{ textTransform: "none" }}
                            className={styles.group}
                        >
                            <p>
                                {this.props.data.address[0]}
                                <br /> {this.props.data.address[1]}
                            </p>
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <a href={`tel:${this.props.data.phone}`}>
                                    {this.props.data.phone} (O)
                                </a>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href={`mailto:${this.props.data.email}`}>
                                    {this.props.data.email}
                                </a>
                            </div>
                        </div> */}
                    </div>

                    <div className={styles.post}>
                        <div className={styles.temp}>
                            <h3>Research Areas</h3>
                            <ul>
                                {this.props.data.research_areas.map(
                                    (element, i) => (
                                        <li key={i}>{element}</li>
                                    )
                                )}
                            </ul>
                            <h3>Biography</h3>
                            <p>Coming Soon!</p>
                            <div></div>
                            <h3>Contact Info</h3>
                            <p>{this.props.data.address[0]}</p>
                            <p>{this.props.data.address[1]}</p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} />
                                <a href={`tel:${this.props.data.phone}`}>
                                    {this.props.data.phone} (O)
                                </a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href={`mailto:${this.props.data.email}`}>
                                    {this.props.data.email}
                                </a>
                            </p>
                            <div style={{ marginBottom: "2.5rem" }}></div>
                        </div>
                    </div>

                    <div style={{textTransform: 'none'}} className={styles.buttons}>
                        <a
                            href={this.props.data.page}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Personal Web Page{" "}
                            <span>{this.props.data.page}</span>
                        </a>
                        {/* <hr className={styles.bar}></hr> */}
                    </div>
                </div>
            </>
        );
    }
}

export default FacCardDetail;
