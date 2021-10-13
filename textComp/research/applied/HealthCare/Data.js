import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <h4>
                    Overall healthcare activity has been categorized into
                    following:
                </h4>
                <ol type="a">
                    <li>Diagnosis & Prognosis</li>
                    <p>
                        Under this subvertical ongoing and future activities
                        include AI applications towards diagnostic
                        interpretation of health and subsequent prognosis
                        towards radiological, pathological and cytological data,
                        in general longitudinal, time series and genomic
                        sequence. Active collaboration is being pursued with
                        National Cancer Institute, ILBS, AIIMS New Delhi, PGI
                        Chandigarh and other renowned research institutes across
                        the country.
                    </p>
                    <li>Therapeutics and Intervention</li>
                    <p>
                        The group under this subvertical is engaged in active
                        research towards cognitive/neuro robotics, smart
                        prosthesis, dedicated AI chip for fast computation. Many
                        high value projects are being pursued and the group
                        intends to engage a wide pool of faculties with varied
                        skill sets for system level engineering in this
                        direction. Another research direction where the school
                        of AI intends to contribute is surgical planning and
                        simulation, where vision guided surgical simulation
                        coupled with mixed reality can help doctors develop
                        cutting edge technology driven intervention techniques.
                    </p>
                    <li>Genomic & Personalized Medicine</li>
                    <p>
                        AI applications towards genomics is an important field
                        of research. <br /> Well Known use-cases, like
                        predicting 3D conformational change of folded proteins
                        in protein engineering, innovative machine learning (ML)
                        models in predicting protein interaction network towards
                        system biological applications. Future lies in
                        personalized medicine. In this aspect, the school
                        intends to pursue research towards developing a digital
                        human model with integrated genomic and transcriptomic
                        data, cellular information like cell migration (e.g.
                        cancer metastasis) , lifestyle related exposure to risk
                        factors. A digital human or digital twin replica human
                        will integrate digital data of physiological processes
                        coupled with physics driven integration of
                        cardiovascular, immune and neurological networks. Can we
                        predict diseases? Can we predict the homeostatic state
                        of a person? Can we predict cancer progression? These
                        are some of the research questions to pursue under the
                        digital human and personalized medicine area.
                    </p>
                </ol>
                <img src="/dataimg/health.png" alt="Health Care" />
                <p>
                    We develop algorithms and statistical models that try to
                    identify inherent, but non-trivial dependencies, in
                    biological data. Advances in the field of Machine learning
                    and statistics are utilized in this context. Computer-based
                    statistical methods are developed for finding patterns and
                    dependencies in and among large volumes of biological data.
                </p>
                <p>
                    Such tools and techniques are developed in order to estimate
                    phenotypic characteristics and to identify critical factors
                    associated with proliferation of a systemic aberration like
                    cancer. Phenotypic characteristics may include disease
                    prognosis, probability of relapse or response to therapy,
                    all of which play a decisive role in formalizing an
                    effective treatment strategy. Extraction and integration of
                    useful information from large pool of omics datasets
                    effectively plays vital role in our research methodologies.
                    Further, we also work on methods to model protein-ligand
                    interactions to understand various factors that govern the
                    scale and effectiveness of such associations. Concepts of
                    Natural Language Processing (NLP) naturally integrates with
                    such problems due to the inherent ability of proteins and
                    ligands to be represented as sequences.
                </p>
                <h4>Impact Areas</h4>
                <ul>
                    <li>Personalised Therapy</li>
                    <li>Drug Discovery</li>
                    <li>Diagnosis and Prognosis</li>
                </ul>
                <h4>Faculty Members Currently Involved</h4>
                <ul>
                    <li>D. Sundar</li>
                    <li>Chetan Arora</li>
                    <li>Jayadeva</li>
                    <li>Pratosh A P</li>
                    <li>Sitikantha Roy</li>
                    <li>Shaurya Shriyam</li>
                    <li>Sandeep Kumar</li>
                </ul>
                <h4>Key Publications</h4>
                <ol>
                    <li>
                        Kalakoti, Y., Yadav, S. and Sundar, D. (2021). SurvCNN:
                        a discrete time-to-event cancer survival estimation
                        framework using image representations of omics data.
                        Cancers 13: 3106.
                    </li>
                    <li>
                        Malik, V., Kalakoti, Y. and Sundar, D. (2021). Deep
                        learning assisted multi-omics integration for survival
                        and drug response prediction in breast cancer. BMC
                        Genomics 22(1): 214.
                    </li>
                    <li>
                        Malik, V., Kalakoti, Y. and Sundar, D. (2021). Deep
                        learning assisted multi-omics integration for survival
                        and drug response prediction in breast cancer. BMC
                        Genomics (in press)
                    </li>
                    <li>
                        Kumar, P., Nagar, P., Arora, C. and Gupta, A., 2018,
                        October. U-Segnet: fully convolutional neural network
                        based automated brain tissue segmentation tool. In 2018
                        25th IEEE International Conference on Image Processing
                        (ICIP) (pp. 3503-3507). IEEE.
                    </li>
                    <li>
                        Pant, H., Soman, S. and Sharma, M., 2018, July. Twin
                        neural networks for efficient eeg signal classification.
                        In 2018 International Joint Conference on Neural
                        Networks (IJCNN)(pp. 1-7). IEEE.
                    </li>
                    <li>
                        Awasthi, A., Gautam, U., Bhaskar, S., and Roy, S., 2020.
                        Biomechanical Modelling and Computer Aided Simulation of
                        Deep Brain Retraction in Neurosurgery. Computer Methods
                        and Programs in Biomedicine, pp. 105688.
                    </li>
                    <li>
                        Mondal, A. and Prathosh, A.P., 2020. RespVAD: Voice
                        Activity Detection via Video-Extracted Respiration
                        Patterns. IEEE Sensors Letters, 4(9), pp.1-4.
                    </li>
                    <li>
                        Sarah Al-Hussaini, Jason M. Gregory, Shaurya Shriyam,
                        and Satyandra K. Gupta, “An Alert-Generation Framework
                        for Improving Resiliency in Human-Supervised,
                        Multi-Agent Teams”, AAAI Fall Symposium on Artificial
                        Intelligence for Human-Robot Interaction (AI-HRI),
                        Arlington, Virginia, November 2019.
                    </li>
                    <li>
                        Majorization-Minimization on the Stiefel Manifold with
                        application to Robust Sparse PCA, With: A. Berloy, S.
                        Ying, and D. Palomar, IEEE Transactions on Signal
                        Processing, vol. 69, 2021.
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Data;
