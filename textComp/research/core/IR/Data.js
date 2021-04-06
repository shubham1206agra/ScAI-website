import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <p>
                    Data Science is about using computational methods to enable
                    government, public and private organizations to generate
                    actionable, valuable data-driven insights. The use of
                    predictive, prescriptive, and causal analysis techniques on
                    massive volumes of data is shown to help in making better
                    decisions, accurate prognosis, and in general, to develop
                    novel strategies that are game changing. In order to be
                    effective, data scientists require not only sophisticated
                    and scalable methods but also the infrastructure–computing,
                    storage, network, software, information management tools,
                    and so on– that can help them to work with massive volumes
                    of rapidly growing data.
                </p>
                <p>
                    The methodological bases of our work are drawn from the
                    areas of Database Systems, Information Retrieval, Data
                    Mining, Algorithmic analysis, Machine Learning, AI and
                    Natural Language Processing. At a finer level of
                    abstraction, we work with and develop ideas from the
                    subareas of Social media analysis, Information extraction,
                    Graph data management, Knowledge graph reasoning,
                    Representation learning for structured data among others.
                </p>
                <p>
                    Our group has developed and continues to develop highly
                    scalable algorithms as well as systems for gathering,
                    managing, and generating deep insights from (big) data in a
                    variety of settings. Some of the key fundamental areas of
                    work are -
                </p>
                <ol type="a">
                    <li>
                        <strong>Machine Learning for Graphs</strong>
                    </li>
                    <p>
                        Recent technological and scientific advances have
                        resulted in an abundance of data that describe and model
                        phenomena in terms of graphs. Examples include
                        high-throughput screening of chemical compounds,
                        protein-protein interaction networks, function-call
                        graphs resulting from program executions, road networks,
                        knowledge graphs and social networks.
                    </p>
                    <li>
                        <strong>
                            Social media analytics and temporal dynamics
                        </strong>
                    </li>
                    <p>
                        Social media has increasingly become a key source of
                        insight in a range of fields ranging from product
                        marketing to politics, and even health information.
                        However social media information analysis is by
                        definition requires handling of all 5 ‘V’s of big-data:
                        volume, velocity, variety, veracity and value. Accurate
                        modeling of information propagation dynamics requires
                        access to large-volumes of streaming data and
                        computational resources to process them. Our group has
                        explored diverse and critical challenges in this domain:
                        How to efficiently manage rapidly changing topical sub
                        networks of social network interactions? How to predict
                        and track the growth of topics over time? Can we infer
                        the influence structures in the social networks?
                    </p>
                </ol>
                <h4>Impact Areas</h4>
                <ul>
                    <li>Traffic monitoring and Transportation</li>
                    <li>Pollution Monitoring</li>
                    <li>Social media monitoring for security</li>
                    <li>Computer science education</li>
                    <li>Big data management infrastructure</li>
                </ul>
                <h4>Faculty Members Currently Involved</h4>
                <ul>
                    <li>Amitabha Bagchi</li>
                    <li>Srikanta Bedathur</li>
                    <li>Abhijnan Chakraborty</li>
                    <li>Maya Ramanath</li>
                    <li>Sayan Ranu</li>
                </ul>
                <h4>Key Publications</h4>
                <ol>
                    <li>
                        Gillani, I.A. and Bagchi, A., 2021. A queueing
                        network-based distributed Laplacian solver for directed
                        graphs. Information Processing Letters, 166, p.106040.
                    </li>
                    <li>
                        Likhyani, A., Gupta, V., Srijith, P.K., Deepak, P. and
                        Bedathur, S., 2020, October. Modeling Implicit
                        Communities from Geo-Tagged Event Traces Using
                        Spatio-Temporal Point Processes. In International
                        Conference on Web Information Systems Engineering (pp.
                        153-169). Springer, Cham.
                    </li>
                    <li>
                        Shandilya, A., Dash, A., Chakraborty, A., Ghosh, K. and
                        Ghosh, S., 2020, December. Fairness for Whom?
                        Understanding the Reader’s Perception of Fairness in
                        Text Summarization. In 2020 IEEE International
                        Conference on Big Data (Big Data) (pp. 3692-3701). IEEE.
                    </li>
                    <li>
                        Agarwal, P., Ramanath, M. and Shroff, G., 2019, April.
                        Retrieving Relationships from a Knowledge Graph for
                        Question Answering. In European Conference on
                        Information Retrieval (pp. 35-50). Springer, Cham.
                    </li>
                    <li>
                        Wadhwa, S., Prasad, A., Ranu, S., Bagchi, A. and
                        Bedathur, S., 2019, June. Efficiently answering regular
                        simple path queries on large labeled networks. In
                        Proceedings of the 2019 International Conference on
                        Management of Data (pp. 1463-1480).
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Data;
