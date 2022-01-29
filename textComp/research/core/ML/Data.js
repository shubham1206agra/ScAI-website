import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <p>
                    ScAI has a strong presence of researchers working in core
                    Machine Learning. The research focuses on a number of areas,
                    including Neuro-symbolic reasoning, Deep Generative Models,
                    Graph Neural Networks and Fairness in Machine Learning.
                </p>
                <ol type="a">
                    <li>
                        <strong>Neuro-Symbolic Reasoning</strong>
                    </li>
                    <p>
                        This is an emerging area of Machine Learning / Deep
                        Learning whose goal is to combine the power of low-level
                        perceptual reasoning with logical/symbolic reasoning at
                        a higher level. We are actively furthering these
                        research directions for transfer learning across domain
                        sizes in structured domains, neuro-symbolic image
                        manipulation, as well as neuro-symbolic robotic
                        execution given natural language commands.
                    </p>
                    <li>
                        <strong>Deep Generative Models</strong>
                    </li>
                    <p>
                        This is another important area of ML research at ScAI.
                        The goal in these models is to be able to effectively
                        generate data from an underlying distribution implicitly
                        specified in terms of representative samples. We are
                        also working on the problem of domain transfer in
                        Generative Models: given a generative model learned over
                        a domain with large amounts of data, how do we transfer
                        the learned model to generate samples from another
                        (similar) domain with limited training data. All these
                        questions are being explored in the group.
                    </p>
                    <li>
                        <strong>Graph-Based Machine Learning</strong>
                    </li>
                    <p>
                        Graph-based approaches with big-data and machine
                        learning are one of the strongest driving forces of the
                        current research frontiers. This decade has witnessed an
                        unprecedented research interest in developing and using
                        graph-based methods for a variety of applications. At
                        ScAI we have a strong presence in this area. We are
                        progressing in this area further, some topics of current
                        exploration are network enhancement by spectral
                        approaches, investigating graph properties for geometric
                        deep learning, graph neural networks, and large-scale
                        and online graph learning.
                    </p>
                    <li>
                        <strong>Fairness in Machine Learning</strong>
                    </li>
                    <p>
                        This is an emerging area in Machine Learning, with focus
                        on having models which are unbiased with respect to
                        specific attribute classes, e.g., gender or race. Our
                        recent work focuses on performing a principled analysis
                        of impact of class skew, class skew given the attribute,
                        and attribute skew on the amount of fairness obtained in
                        the learned model. We are also working on the notion of
                        fairness specifically in the context of ML applied to
                        vision problems.
                    </p>
                </ol>
                {/* <h4>Impact Areas</h4>
                <ul>
                    <li>Information Extraction</li>
                    <li>Question Answering</li>
                    <li>Dialog Systems</li>
                    <li>Machine Translation</li>
                    <li>Summarization</li>
                    <li>Multilinguality</li>
                </ul> */}
                <h4>Faculty Members Currently Involved</h4>
                <ul>
                    <li>Sayan Ranu</li>
                    <li>Sandeep Kumar</li>
                    <li>Jayadeva</li>
                    <li>Parag Singla</li>
                    <li>Arpan Chattopadhay</li>
                </ul>
                <h4>Key Publications</h4>
                <ol>
                    <li>
                        Sarisht Wadhwa, Anagh Prasad, Sayan Ranu, Amitabha
                        Bagchi and Srikanta Bedathur, "Efficiently Answering
                        Regular Simple Path Queries on Large Labeled Networks",
                        in SIGMOD, 2019.
                    </li>
                    <li>
                        Structured Graph Learning via Laplacian Spectral
                        Constraints, Sandeep Kumar, Jiaxi Ying, Ze. Vinicius,
                        and Daniel . Palomar, Neural Information Processing
                        Systems, in, NeurIPS, Vancouver, Canada, December 2019.
                    </li>
                    <li>
                        A Unified Framework for Structured Graph Learning via
                        Spectral Constraints Sandeep Kumar, Jiaxi Ying, Ze.
                        Vinicius, and Daniel . Palomar, Journal of Machine
                        Learning Research (JMLR), Vol. 21, no. 22, pp. 1-60,
                        January 2020.
                    </li>
                    <li>
                        Patro, G.K., Biswas, A., Ganguly, N., Gummadi, K.P. and
                        Chakraborty, A., 2020, April. Fairrec: Two-sided
                        fairness for personalized recommendations in two-sided
                        platforms. In Proceedings of The Web Conference 2020
                        (pp. 1194-1204).
                    </li>
                    <li>
                        Khemchandani, R. and Chandra, S., 2007. Twin support
                        vector machines for pattern classification. IEEE
                        Transactions on pattern analysis and machine
                        intelligence, 29(5), pp.905-910.
                    </li>
                    <li>
                        Yatin Nandwani, Abhishek Pathak, Mausam, Parag Singla.,
                        2019. A Primal Dual Formulation For Deep Learning With
                        Constraints". Conference on Neural Information
                        Processing Systems (NeurIPS). Montreal, Canada.
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Data;
