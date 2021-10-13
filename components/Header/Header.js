import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Row, Col, Container } from "react-bootstrap";

const Header = (props) => {
    const [scY, updatescY] = useState(0);
    const scrollEvent = () => updatescY(window.scrollY);
    useEffect(() => {
        updatescY(window.scrollY);
        document.addEventListener("scroll", (e) => scrollEvent());
        return () => {
            document.removeEventListener("scroll", (e) => scrollEvent());
        };
    });
    return (
        <Navbar
            id={styles.header}
            variant="dark"
            fixed="top"
            collapseOnSelect
            expand="lg"
            className={`d-flex align-items-center ${
                props.alwcol ? styles.headerscrolled : styles.headertransparent
            } ${scY < 100 ? "" : styles.headerscrolled}`}
        >
            <Link href="/">
                <Navbar.Brand href="/">
                    <Container>
                        <Row lg={6}>
                            <Col style={{ maxWidth: "100%" }}>
                                <img
                                    src="/iitd_logo.png"
                                    alt="logo"
                                    height="100"
                                    width="100"
                                />
                            </Col>
                            <Col
                                style={{
                                    maxWidth: "100%",
                                    alignContent: "center",
                                    paddingTop: "10px",
                                    color: "white",
                                }}
                            >
                                <span className={styles.xyy}>
                                    School of Artificial Intelligence (ScAI)
                                    <hr
                                        style={{
                                            margin: "0",
                                            borderTop: "2px solid white",
                                        }}
                                    />
                                    Indian Institute of Technology, Delhi
                                </span>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <NavDropdown
                        className={styles.dropd}
                        title="People"
                        id="people"
                    >
                        <Link href="/people/students">
                            <NavDropdown.Item disabled href="/people/students">
                                Students
                            </NavDropdown.Item>
                        </Link>
                        <Link href="/people/faculty">
                            <NavDropdown.Item href="/people/faculty">
                                Faculty
                            </NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                    <NavDropdown
                        className={styles.dropd}
                        title="Research"
                        id="research"
                    >
                        <NavDropdown
                            className={styles.nesdrop}
                            title="Core"
                            id="core"
                            drop="right"
                        >
                            <Link href="/research/core/ml">
                                <NavDropdown.Item href="/research/core/ml">
                                    Machine Learning
                                </NavDropdown.Item>
                            </Link>
                            <Link href="/research/core/ir">
                                <NavDropdown.Item href="/research/core/ir">
                                    Information Retrieval
                                </NavDropdown.Item>
                            </Link>
                            <Link href="/research/core/nlp">
                                <NavDropdown.Item href="/research/core/nlp">
                                    Natural Language Processing
                                </NavDropdown.Item>
                            </Link>
                            <Link href="/research/core/cv">
                                <NavDropdown.Item href="/research/core/cv">
                                    Computer Vision
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <NavDropdown
                            className={styles.nesdrop}
                            title="Applied"
                            id="applied"
                            drop="right"
                        >
                            <Link href="/research/applied/industry4">
                                <NavDropdown.Item href="/research/applied/industry4">
                                    Industry 4.0
                                </NavDropdown.Item>
                            </Link>
                            <Link href="/research/applied/health-care">
                                <NavDropdown.Item href="/research/applied/health-care">
                                    Health Care
                                </NavDropdown.Item>
                            </Link>
                            <Link href="/research/applied/materials">
                                <NavDropdown.Item href="/research/applied/materials">
                                    Materials
                                </NavDropdown.Item>
                            </Link>
                            <Link href="/research/applied/robotics">
                                <NavDropdown.Item href="/research/applied/robotics">
                                    Robotics
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                    </NavDropdown>
                    <NavDropdown
                        className={styles.dropd}
                        title="Join Us"
                        id="join"
                    >
                        <Link href="/join/mtech">
                            <NavDropdown.Item href="/join/mtech">
                                Prospective Masters Students
                            </NavDropdown.Item>
                        </Link>
                        <Link href="/join/phd">
                            <NavDropdown.Item href="/join/phd">
                                Prospective PhD Students
                            </NavDropdown.Item>
                        </Link>
                        <Link href="/join/postdocs">
                            <NavDropdown.Item href="/join/postdocs">
                                Prospective PostDocs
                            </NavDropdown.Item>
                        </Link>
                        <Link href="/join/faculty">
                            <NavDropdown.Item href="/join/faculty">
                                Prospective Faculty
                            </NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                    {/* <NavDropdown
                        className={styles.dropd}
                        title="Support Us"
                        id="support"
                    >
                        <Link href="/support/fund-raising">
                            <NavDropdown.Item href="/support/fund-raising">
                                Fund Raising
                            </NavDropdown.Item>
                        </Link>
                        <Link href="/support/donors">
                            <NavDropdown.Item href="/support/donors">
                                Founding Donors
                            </NavDropdown.Item>
                        </Link>
                    </NavDropdown> */}
                    <Link href="/support">
                        <Nav.Link className={styles.singlink} href="/support">
                            Support Us
                        </Nav.Link>
                    </Link>
                    <Link href="/media-page">
                        <Nav.Link
                            className={styles.singlink}
                            href="/media-page"
                        >
                            News
                        </Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
