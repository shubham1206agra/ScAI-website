import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                The Fourth Industrial Revolution (or Industry 4.0) is the
                ongoing automation of traditional manufacturing and industrial
                practices. It majorly involves large-scale machine-to-machine
                communication and the internet of things (IoT) integrated for
                increased automation, improved communication and monitoring, and
                diagnosis without the need for human intervention. India as a
                country at the cusp of this transition.In the era of Industry
                4.0, it is envisaged that highly intelligent connected
                industrial systems create a fully digital value chain. On the
                one hand industrial operations are targeting for operational
                profits, on the other hand the operations should be safe,
                efficient and environmental benign.
                <img src="/dataimg/ind4.png" alt="Industry 4.0" />
                <p>
                    The broad AI tools are employed for the deep learning, graph
                    mining, reinforcement learning, and surrogate models-based
                    optimization. Some of the key applications under
                    consideration are oil and gas, nuclear reactors and
                    industrial water networks.
                </p>
                <h4>Current Focus</h4>
                <ol type="a">
                    <li>Digital Twins</li>
                    <p>
                        Digital twin is an integrated multi-physics,
                        multi-scale, data driven models that enables simulation
                        of a system and uses the best available physical models,
                        sensor updates, etc. It is the AI driven replica of the
                        process that leverage full strength of archived sensor
                        data. However, a key technical challenge here is the
                        variety of the data, which may be discrete, continuous,
                        sequential.
                    </p>
                    <li>Intelligent and Sustainable Operation</li>
                    <p>
                        Here, we employ previously developed digital twins for
                        AI-driven optimal decision making for improving the
                        efficiency, and de-bottlenecking the operation. A key
                        proposal here to factor in the sustainability to be
                        factored in accounting for less wastage (lean
                        production), less emissions (green production). To
                        achieve this we envisage to solve a multi-objective
                        optimization problem honouring various constraints.
                    </p>
                    <li>Anomaly Detection</li>
                    <p>
                        This ensures AI-driven guidance for safe operation
                        employing digital twins. Here, the digital twin model
                        serves as the null model. We are intended to identify
                        anomalous signatures much before a potential event that
                        is a potential manifestation of the networked effect of
                        sub-components. Causal inference between multiple
                        sub-units will also be evaluated. This step will aid in
                        the sensor network design or retrofitting for efficient
                        information processing.
                    </p>
                </ol>
                <h4>Impact Areas</h4>
                <ul>
                    <li>Oil and Gas</li>
                    <li>Petrochemicals</li>
                    <li>Discrete Manufacturing</li>
                    <li>Scheduling and Optimization</li>
                    <li>Power</li>
                </ul>
                <h4>Faculty Members Currently Involved</h4>
                <ul>
                    <li>Hariprasad Kodamana</li>
                    <li>Sayan Ranu</li>
                    <li>Souvik Chakraborty</li>
                    <li>Shaurya Shriyam</li>
                    <li>Arnob Ghosh</li>
                </ul>
                <h4>Key Publications</h4>
                <ol>
                    <li>
                        Saxena, N., Tiwari, A., Sonawat, D., Kodamana, H. and
                        Rathore., A. S., 2020. Reinforcement Learning based
                        Optimization of Process Chromatography for Continuous
                        Processing of Biopharmaceuticals. Chemical Engineering
                        Science.
                    </li>
                    <li>
                        Fang, M., Kodamana, H. and Huang, B., 2019. Real-time
                        Mode Diagnosis for Processes with Multiple Operating
                        Conditions Using Switching Conditional Random Fields.
                        IEEE Transactions on Industrial Electronics
                    </li>
                    <li>
                        Chakraborty, S. and Adhikari, S. (2021). Machine
                        learning based digital twin for dynamical systems with
                        multiple time-scales, Computers and Structures, 243,
                        106410.
                    </li>
                    <li>
                        Shaurya Shriyam, and Satyandra K. Gupta, "Incorporation
                        of Contingency Tasks in Task Allocation for Multi-robot
                        Teams", Accepted in IEEE Transactions on Automation
                        Science and Engineering, 2019.
                    </li>
                    <li>
                        Banerjee, P., Yawalkar, P. and Ranu, S., 2016, August.
                        Mantra: a scalable approach to mining temporally
                        anomalous sub-trajectories. In Proceedings of the 22nd
                        ACM SIGKDD International Conference on Knowledge
                        Discovery and Data Mining (pp. 1415-1424).
                    </li>
                    <li>
                        Arnob Ghosh, Vaneet Aggarwal, and Hong Wan, "Strategic
                        Prosumers: How to set prices in the Tiered Electric
                        Market?", in IEEE Transactions on Industrial
                        Informatics, August 2019, vol. 15, no. 8, pp.4469–4480
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Data;
