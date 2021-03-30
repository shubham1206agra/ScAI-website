import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <img src="/dataimg/materials.png" alt="Materials" />
                <p>
                    The progress of human society has been closely linked with
                    the development of materials. This is exemplified by
                    different ages in civilization: the stone age, bronze age,
                    and iron age. Traditional materials design and discovery
                    were based on expert knowledge, intuitions, empirical
                    models, and Edisonian trial-and-error approach. This
                    approach has several deficiencies. Specifically, the
                    approach is (i) time-consuming, (ii) expensive, (iii) not
                    failure-proof, (iv) useful for simple materials with a
                    limited number of components. To address the ever-increasing
                    demands for novel materials, a disruptive paradigm, reducing
                    the design-to-deploy period to approximately five years,
                    needs to be developed. At ScAI, we employ an artificial
                    intelligence (AI)-driven materials discovery paradigm that
                    can accelerate materials discovery and allow knowledge
                    dissemination. The proposed framework is highly
                    multidisciplinary, involving machine learning, materials
                    science, natural language processing, robotics, and other
                    relevant domains. The primary focus will be to provide a
                    platform offering solutions to industry and academia on
                    materials discovery, design, and expert knowledge for
                    various applications such as energy, medical, agricultural,
                    defense, and aerospace sectors, and even materials for AI.
                    Ultimately, this proposal aims to develop a framework that{" "}
                    <strong>
                        "democratizes materials discovery using AI."
                    </strong>
                </p>
                <h4>Impact Areas</h4>
                <ul>
                    <li>AI-Driven Material Discovery</li>
                    <li>NLP and Data Mining for Materials</li>
                    <li>Self-driving Laboratories</li>
                    <li>Graph Networks for Materials Modeling</li>
                </ul>
                <h4>Faculty Members Currently Involved</h4>
                <ul>
                    <li>Dr. Debanjan Bhowmik</li>
                    <li>Dr. Jayadeva</li>
                    <li>Dr. Mausam</li>
                    <li>Dr. N. M. Anoop Krishnan</li>
                    <li>Dr. Nitya Nand Gosvami</li>
                    <li>Dr. Sayan Ranu</li>
                    <li>Dr. Souvik Chakraborty</li>
                </ul>
                <h4>Key Publications</h4>
                <ol>
                    <li>
                        Jindal, A., Gupta, P., Jayadeva, and Sengupta, D., 2018.
                        Discovery of rare cells from voluminous single-cell
                        expression data. Nature communications, 9(1), pp.1-9.
                    </li>
                    <li>
                        Ravinder, R., Sridhara, K.H., Bishnoi, S., Grover, H.S.,
                        Bauchy, M., Kodamana, H., and Krishnan, N. M. A., 2020.
                        Deep learning aided rational design of oxide glasses.
                        Materials Horizons, 7(7), pp.1819-1827.
                    </li>
                    <li>
                        Goswami, S., Anitescu, C., Chakraborty, S. and Rabczuk,
                        T., 2020. Transfer learning enhanced physics informed
                        neural network for phase-field modeling of fracture.
                        Theoretical and Applied Fracture Mechanics, 106,
                        p.102447.
                    </li>
                    <li>
                        Ranu, S. and Singh, A.K., 2009. Mining statistically
                        significant molecular substructures for efficient
                        molecular classification. Journal of chemical
                        information and modeling, 49(11), pp.2537-2550.
                    </li>
                    <li>
                        Bhowmik, D., Saxena, U., Dankar, A., Verma, A., Kaushik,
                        D., Chatterjee, S. and Singh, U., 2019. On-chip learning
                        for domain wall synapse based Fully Connected Neural
                        Network. Journal of Magnetism and Magnetic Materials,
                        489, p.165434.
                    </li>
                    <li>
                        Bishnoi, S., Singh, S., Ravinder, R., Bauchy, M.,
                        Gosvami, N.N., Kodamana, H. and Krishnan, N.A., 2019.
                        Predicting Young’s modulus of oxide glasses with sparse
                        datasets using machine learning. Journal of
                        Non-Crystalline Solids, 524, p.119643.
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Data;
