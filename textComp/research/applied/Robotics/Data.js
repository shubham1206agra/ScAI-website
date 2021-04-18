import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <p>
                    The robotics concentration within the School of AI aims at
                    addressing the scientific and technological challenges
                    permeating AI systems that involve interaction with the
                    physical world. On one hand, this field is concerned with
                    core principles of AI/ML systems governed by physical laws
                    (e.g.,nonlinear systems, physical interactions etc.). This
                    theme is relevant to understand physical phenomena that can
                    have a large impact on our society (e.g., climate,
                    biological interactions etc.). On the other hand, we seek to
                    develop AI/ML models for intelligent robotic systems that
                    can act and interact in the environment (e.g., robot
                    manipulators, soft robotic systems etc.). Here, the
                    challenges lie in the core areas of planning, perception,
                    NLP, reasoning & knowledge, control necessary for physical
                    robotic systems that display general-purpose intelligence,
                    particularly in domains cohabited with people. Collectively,
                    the aforementioned thrust aims at developing tools and
                    applications aimed towards the realization of intelligent
                    models and embodied systems capable of interacting with the
                    physical world. The investigation is inherently
                    multi-disciplinary in nature and assimilates tools from
                    various disciples and traditional departments, hence aligns
                    well with the vision of the School of AI.
                </p>
                <img src="/dataimg/robotics.png" alt="Robotics" />
                <h4>Impact Areas</h4>
                <ul>
                    <li>Human-Robot Collaborative Engagements</li>
                    <li>Automated Task Management Using Robots</li>
                </ul>
                <h4>Faculty Members Currently Involved</h4>
                <ul>
                    <li>Sitikantha Roy</li>
                    <li>Souvik Chakraborty</li>
                    <li>Shaurya Shriyam</li>
                    <li>Chetan Arora</li>
                    <li>Rohan Paul </li>
                    <li>Arpan Chattopadhay</li>
                </ul>
                <h4>Key Publications</h4>
                <ol>
                    <li>
                        Deepak Kumar, Saswath Ghosh, Sushma Shantapuri,
                        Sitikantha Roy, "Static modeling of electro-pneumatic
                        braided muscle actuator: An actuation force model".{" "}
                        <strong>
                            Accepted in Intelligent Material Systems and
                            Structures, 2020.
                        </strong>
                    </li>
                    <li>
                        Martínez, E.R., Chakraborty, S. and Tesfamariam, S.,
                        2021. Machine learning assisted stochastic-XFEM for
                        stochastic crack propagation and reliability analysis.
                        Theoretical and Applied Fracture Mechanics, 112,
                        p.102882.
                    </li>
                    <li>
                        Shaurya Shriyam, and Satyandra K. Gupta, "Incorporation
                        of Contingency Tasks in Task Allocation for Multi-robot
                        Teams", Accepted in IEEE Transactions on Automation
                        Science and Engineering, 2019.
                    </li>
                    <li>
                        Kedia, R., Yoosuf, K.K., Dedeepya, P., Fazal, M., Arora,
                        C. and Balakrishnan, M., 2017, January. MAVI: An
                        embedded device to assist mobility of visually impaired.
                        In 2017 30th International Conference on VLSI Design and
                        2017 16th International Conference on Embedded Systems
                        (VLSID) (pp. 213-218). IEEE.
                    </li>
                    <li>
                        Arkin, J., Park, D., Roy, S., Walter, M.R., Roy, N.,
                        Howard, T.M. and Paul, R., 2020. Multimodal estimation
                        and communication of latent semantic knowledge for
                        robust execution of robot instructions. The
                        International Journal of Robotics Research, 39(10-11),
                        pp.1279-1304.
                    </li>
                    <li>
                        Paul, R., Arkin, J., Aksaray, D., Roy, N. and Howard,
                        T.M., 2018. Efficient grounding of abstract spatial
                        concepts for natural language interaction with robot
                        platforms. The International Journal of Robotics
                        Research, 37(10), pp.1269-1299.
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Data;
