import styles from "./Data.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import NewsCard from "../../components/NewsCard/NewsCard";
import NewsCardPlain from "../../components/NewsCard/NewsCardPlain";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <div className="card-columns">
                    <NewsCardPlain
                        link="https://timesofindia.indiatimes.com/business/india-business/nlp-has-become-one-of-the-most-exciting-parts-of-ai/articleshow/81543173.cms"
                        title="Professor Mausam interviewed for recent progress in NLP"
                        category="The Times Of India"
                        description="March 17, 2021"
                    />
                    <NewsCard
                        image="https://images.hindustantimes.com/img/2021/03/14/550x309/facc358a-84f2-11eb-a12f-8b2f13f9e637_1615746587703.jpeg"
                        link="https://www.hindustantimes.com/cities/mumbai-news/iits-set-up-schools-centres-to-foster-research-in-ai-101615746588661.html"
                        title="ScAI mentioned in new centers that foster research in AI"
                        category="Hindustan Times"
                        description="March 14, 2021"
                    />
                    <NewsCard
                        image="https://www.dqindia.com/wp-content/uploads/2021/01/board-1364655_640.jpg"
                        link="https://www.dqindia.com/iit-delhi-invites-applications-graduates-professionals-certificate-online-course-data-science/"
                        title="Professor Hariprasad Kodamana launches online certificate course on Data Science"
                        category="DataQuest"
                        description="January 28, 2021"
                    />
                    <NewsCardPlain
                        link="https://knowdisdata.com/mlday.html"
                        title="KnowDis and ScAI co-organize the KnowDis Machine Learning Day"
                        category="KnowDis"
                        description="December 5, 2020"
                    />
                    <NewsCard
                        image="https://www.ciol.com/wp-content/uploads/2020/06/free-online-courses.jpg"
                        link="https://www.ciol.com/iit-delhi-nptel-invite-applications-free-online-course-artificial-intelligence/"
                        title="IIT Delhi and NPTEL run free online course on Artificial Intelligence"
                        category="CiOL"
                        description="November 19, 2020"
                    />
                    <NewsCardPlain
                        link="https://www.youtube.com/watch?v=u_TvoMkk-y0"
                        title="Professor Mausam discussing AI and roadmap for a Doordarshan panel"
                        category="YouTube"
                        description="October 13, 2020"
                    />
                    <NewsCardPlain
                        link="https://www.youtube.com/watch?v=ghV9bi_oPxk"
                        title="Detailed interview on the importance of School of AI in Hindi"
                        category="YouTube"
                        description="September 3, 2020"
                    />
                    <NewsCardPlain
                        // link="https://www.youtube.com/watch?v=ghV9bi_oPxk"
                        title="Mr. Arun Duggal becomes the first co-founder of School of AI"
                        category="Co-Founder"
                        description="September 12, 2020"
                    />
                    <NewsCard
                        image="https://home.iitd.ac.in/images/news/ai2.jpg"
                        link="https://home.iitd.ac.in/news-ai.php"
                        title="IIT Delhi establishes School of AI"
                        category="IIT Delhi"
                        description="September 2, 2020"
                    />
                </div>
                <h2 style={{ marginTop: "1rem" }}>
                    News reports on the launch of School of AI
                </h2>
                <ol>
                    <li>
                        <a
                            href="https://www.youtube.com/watch?v=NlgCHlA0EQ0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube Video English
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/watch?v=TpikDstFkF4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube Video Hindi
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/watch?v=TpikDstFkF4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube Video Hindi
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.jagranjosh.com/news/iit-delhi-establishes-school-of-artificial-intelligence-scai-to-offer-phd-and-pg-degrees-get-details-here-155667"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT Delhi establishes School of Artificial Intelligence (ScAI) To Offer PhD and PG Degrees -- Jagranjosh
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.moneycontrol.com/news/india/iit-delhi-to-establish-school-of-artificial-intelligence-phd-admissions-from-january-2021-5830271.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT-Delhi to establish School of Artificial Intelligence -- MoneyControl
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.eastmojo.com/news/2020/09/04/iit-delhis-school-of-artificial-intelligence-to-offer-multiple-post-graduate-courses/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT Delhi's School of Artificial Intelligence to offer multiple post-graduate courses -- EastMojo
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.amarujala.com/education/school-of-artificial-intelligence-starts-at-iit-delhi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            आईआईटी दिल्ली में स्कूल ऑफ आर्टिफिशियल इंटेलीजेंस शुरू, बहुविषयक विभाग मिलकर करेंगे काम -- अमर उजाला
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://timesofindia.indiatimes.com/city/delhi/iit-delhi-launches-ai-school-to-begin-course-from-january/articleshow/77902846.cms"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT-Delhi launches AI school -- The Times Of India
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.businesstoday.in/technology/news/iit-delhi-launches-school-of-artificial-intelligence-course-to-begin-from-jan-2021/story/415054.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT-Delhi launches School of Artificial Intelligence -- Business Today
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.businesstoday.in/technology/news/iit-delhi-launches-school-of-artificial-intelligence-course-to-begin-from-jan-2021/story/415054.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT-Delhi launches School of Artificial Intelligence -- Business Today
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.lokmatnews.in/india/iit-delhi-opens-artificial-intelligence-school-b394/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT दिल्ली में खुला आर्टिफिशियल इंटेलिजेंस स्कूल, शिक्षा के क्षेत्र में मिलेगा बढ़ावा -- लोकमत हिंदी
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.dqindia.com/iit-delhi-launches-new-school-artificial-intelligence-phd-pg-level-courses-offered/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT Delhi Launches New School of Artificial Intelligence, PhD and PG Level Courses to be Offered -- DataQuest
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://news.careers360.com/iit-delhi-establishes-school-of-artificial-intelligence"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT Delhi establishes School of Artificial Intelligence -- Careers360
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.financialexpress.com/education-2/iit-delhi-sets-up-ai-school-will-offer-degree-professional-courses/2072698/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IIT Delhi sets up AI school; will offer degree, professional courses -- Financial Express
                        </a>
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Data;
