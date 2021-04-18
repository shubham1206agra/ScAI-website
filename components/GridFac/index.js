import React, { Component } from "react";
import { config } from "react-spring/renderprops.cjs";
import Grid from "./Grid";
import { Slug, Fade } from "./Primitives";
import data from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FacCardDetail from "../FacCard/FacCardDetail";
import styles from "./cstyle.module.css";
import FacCard from "../FacCard/FacCard";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }
    render() {
        const { toggle, data, active } = this.props;
        const { width } = this.state;
        let comp = (
            <>
                <div
                    className={styles.cell}
                    style={{
                        backgroundImage: data.css,
                        cursor: !active ? "pointer" : "auto",
                    }}
                    onClick={!active ? toggle : undefined}
                >
                    <Fade show={active} delay={active ? 500 : 0}>
                        <div className={styles.details}>
                            <Slug delay={600}>
                                {/* <div
                            className={styles.circle}
                            style={{ background: `css` }}
                        /> */}
                                <div className={styles.close}>
                                    <FontAwesomeIcon
                                        style={{ cursor: "pointer" }}
                                        icon={faTimes}
                                        onClick={toggle}
                                    />
                                </div>
                                <FacCardDetail data={data} />
                            </Slug>
                        </div>
                    </Fade>
                    <Fade
                        show={!active}
                        from={{
                            opacity: 0,
                            transform: "translate3d(0,140px,0)",
                        }}
                        enter={{
                            opacity: 1,
                            transform: "translate3d(0,0px,0)",
                        }}
                        leave={{
                            opacity: 0,
                            transform: "translate3d(0,-50px,0)",
                        }}
                        delay={active ? 0 : 400}
                    >
                        <div className={styles.default}>
                            <FacCard data={data} />
                            {/* <div style={{ zIndex: 1 }}>{name}</div> */}
                        </div>
                    </Fade>
                </div>
            </>
        );
        if (width < 925) {
            comp = (
                <>
                    <div
                        className={styles.cell}
                        style={{
                            backgroundImage: data.css,
                        }}
                        onClick={() => window.open(data.page, "_blank")}
                        // onClick={!active ? toggle : undefined}
                    >
                        <div className={styles.default}>
                            <FacCard data={data} />
                            {/* <div style={{ zIndex: 1 }}>{name}</div> */}
                        </div>
                    </div>
                </>
            );
        }
        return comp;
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data, width: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ data, width: window.innerWidth });
    }
    // state = { data };
    render() {
        return (
            <Grid
                className={styles.grid}
                // Arbitrary data, should contain keys, possibly heights, etc.
                data={this.state.data}
                // Key accessor, instructs grid on how to fet individual keys from the data set
                keys={(d) => d.name}
                // Can be a fixed value or an individual data accessor
                // heights={(d) => d.height}
                heights={
                    this.state.width < 575
                        ? 500
                        : this.state.width < 800
                        ? 400
                        : 300
                }
                // Number of columns
                columns={
                    this.state.width < 1060
                        ? this.state.width < 800
                            ? 1
                            : 2
                        : 3
                }
                // Space between elements
                margin={30}
                // Removes the possibility to scroll away from a maximized element
                lockScroll={false}
                // Delay when active elements (blown up) are minimized again
                closeDelay={400}
                // Regular react-spring configs
                config={config.slow}
            >
                {(data, active, toggle) => (
                    <Cell data={data} active={active} toggle={toggle} />
                )}
            </Grid>
        );
    }
}
