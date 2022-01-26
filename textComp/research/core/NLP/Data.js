import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <p>
                    Understanding human languages has been a cornerstone
                    application of AI. NLP Group at Yardi ScAI focuses on two salient
                    research agendas. First, it builds AI systems that process
                    information expressed in text via information extraction,
                    and share this information to users through question
                    answering and dialog systems. The group is known for its
                    influential work in open information extraction, where
                    information is extracted in open schema. Second, Yardi ScAI has
                    initiated a massive effort in building multilingual NLP
                    systems for machine translation, information extraction and
                    knowledge base completion. One focus of the group is on
                    translation among Indian languages, which are low-resource.
                    Use of massive language models trained on Indian language
                    datasets in conjunction with syntactic processing of text
                    might suggest a solution for Indian language machine
                    translation. The group also expects to use this technology
                    in context of various applications such as healthcare, law
                    and education.
                </p>
                <img src="/dataimg/nlp.png" alt="NLP" />
                <h4>Impact Areas</h4>
                <ul>
                    <li>Information Extraction</li>
                    <li>Question Answering</li>
                    <li>Dialog Systems</li>
                    <li>Machine Translation</li>
                    <li>Summarization</li>
                    <li>Multilinguality</li>
                </ul>
                <h4>Faculty Members Currently Involved</h4>
                <ul>
                    <li>Mausam</li>
                    <li>Parag Singla</li>
                    <li>Niladri Chatterjee</li>
                    <li>Ashwini Vaidya</li>
                </ul>
                <h4>Key Publications</h4>
                <ol>
                    <li>
                        Keshav Kolluru, Samarth Aggarwal, Vipul Rathore,
                        Mausam, Soumen Chakrabarti. "IMOJIE: Iterative
                        Memory-Based Joint Open Information Extraction". Annual
                        Conference of the Association for Computational
                        Linguistics (ACL). Online. July 2020.
                    </li>
                    <li>
                        Danish Contractor, Shashank Goel, Mausam, Parag Singla.
                        "Joint Spatio-Textual Reasoning for Answering Tourism
                        Questions". The Web Conference (WWW). Online. April
                        2021.
                    </li>
                    <li>
                        Mausam. "Open Information Extraction Systems and
                        Downstream Applications". Invited Paper for Early Career
                        Spotlight Track. International Joint Conference on
                        Artificial Intelligence (IJCAI). New York, NY. July
                        2016.
                    </li>
                    <li>
                        Vaidya Ashwini, Owen Rambow and Martha Palmer. Syntactic
                        composition and selectional preferences in Hindi Light
                        Verb constructions. Linguistic Issues in Language
                        Technology, Vol 17:1. pp 1-30 (2019).
                    </li>
                    <li>
                        Sahil Bhatnagar and Niladri Chatterjee. Neural machine
                        translation of Hindi and English. J. Intell. Fuzzy Syst.
                        Vol 39, No. 2: 2071-2079, 2020.
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Data;
