import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <p> 
                    Data Science is about using computational methods to enable government, public and private organizations to generate actionable, valuable data-driven insights. The use of predictive, prescriptive, and causal analysis techniques on massive volumes of data is shown to help in making better decisions, accurate prognosis, and in general, to develop novel strategies that are game changing. In order to be effective, data scientists require not only sophisticated and scalable methods but also the infrastructure–computing, storage, network, software, information management tools, and so on– that can help them to work with massive volumes of rapidly growing data.
                </p>
                <p>
                    The methodological bases of our work are drawn from the areas of Database Systems, Information Retrieval, Data Mining, Algorithmic analysis, Machine Learning, AI and Natural Language Processing.
                </p>
                <p>
                   Some of the key fundamental areas of work are -
                </p>
                <ol type="a">
                    <li>
                        <strong>Machine Learning for Graphs</strong>
                    </li>
                    <p>
                        Recent technological and scientific advances have resulted in an abundance of data that describe and model phenomena in terms of graphs. Examples include high-throughput screening of chemical compounds, protein-protein interaction networks, function-call graphs resulting from program executions, road networks, knowledge graphs and social networks.
                    </p>
                    <li>
                        <strong>
                            Social media analytics and temporal dynamics
                        </strong>
                    </li>
                    <p>
                        Social media has increasingly become a key source of insight in a range of fields ranging from product marketing to politics, and even health information. However social media information analysis is by definition requires handling of all 5 ‘V’s of big-data: volume, velocity, variety, veracity and value. Accurate modeling of information propagation dynamics requires access to large-volumes of streaming data and computational resources to process them. Our group has explored diverse and critical challenges in this domain: How to efficiently manage rapidly changing topical sub networks of social network interactions? How to predict and track the growth of topics over time? Can we infer the influence structures in the social networks?
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
                    <li>Sayan Ranu</li>
                    <li>Srikanta Bedathur</li>
                    <li>Amitabha Bagchi</li>
                    <li>Abhijnan Chakraborty</li>
                    <li>Maya Ramanath</li>
                </ul>
                <h4>Key Publications</h4>
            </div>
        </>
    );
};

export default Data;
