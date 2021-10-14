import styles from "./Data.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import NewsCard from "../../components/NewsCard/NewsCard";
import NewsCardPlain from "../../components/NewsCard/NewsCardPlain";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <div className="card-columns">
                    <NewsCard
                        image="/faculty/arpan.jpg"
                        link=""
                        title="Prof. Arpan K. Kar, Department of Management Studies, has been selected as one of the recipients of the Clarivate India Research Excellence- Citation Awards 2021 (powered by Web of Science), the 8th edition of this award in the Social Sciences and Interdisciplinary Sciences category for individuals."
                        category="IIT Delhi"
                        description="October 9, 2021"
                    />
                    <NewsCardPlain
                        link="https://home.iitd.ac.in/show.php?id=37&in_sections=Press&fbclid=IwAR0dZOcixO8L7mWWoaoZ9COR1kyCZ9t1PvzDbi-xmnhg0BhBSPB0hIG9cXY"
                        title="IIT Delhi, AIIMS New Delhi and Addverb Co-develop Telerobotic Ultrasound System During COVID Times"
                        category="IIT Delhi"
                        description="August 10, 2021"
                    />
                    <NewsCard
                        image="https://home.iitd.ac.in/public/storage/uploads/ai2_1620288707.jpg"
                        link="https://home.iitd.ac.in/show-research.php?id=7"
                        title="ScAI's six month review interview is here"
                        category="IIT Delhi"
                        description="August 9, 2021"
                    />
                    <NewsCard
                        image="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/8/6/w900X450/A-NEURON.jpg?w=640&dpr=1.0"
                        link="https://www.newindianexpress.com/lifestyle/tech/2021/aug/06/a-neuron-model-for-efficient-ai-systems-2340796.html"
                        title="A neuron model for efficient AI systems"
                        category="The New Indian Express"
                        description="August 6, 2021"
                    />
                    <NewsCardPlain
                        link="https://timesofindia.indiatimes.com/business/india-business/nlp-has-become-one-of-the-most-exciting-parts-of-ai/articleshow/81543173.cms"
                        title="Professor Mausam interviewed for recent progress in NLP"
                        category="The Times Of India"
                        description="March 17, 2021"
                    />
                    <NewsCardPlain
                        // image="https://images.hindustantimes.com/img/2021/03/14/550x309/facc358a-84f2-11eb-a12f-8b2f13f9e637_1615746587703.jpeg"
                        link="https://www.hindustantimes.com/cities/mumbai-news/iits-set-up-schools-centres-to-foster-research-in-ai-101615746588661.html"
                        title="ScAI mentioned in new centers that foster research in AI"
                        category="Hindustan Times"
                        description="March 14, 2021"
                    />
                    <NewsCard
                        image="https://ceramics.org/wp-content/uploads/2021/02/02-23-glass-balls.jpg"
                        link="https://ceramics.org/ceramic-tech-today/glass-1/glass-discovery-and-design-21-challenges-in-artificial-intelligence-and-machine-learning-for-glass-science"
                        title="Glass discovery and design: 21 challenges in artificial intelligence and machine learning for glass science"
                        category="The American Ceramic Society"
                        description="February 23, 2021"
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
                    <NewsCard
                        btnText="Watch Video"
                        image="https://img.youtube.com/vi/u_TvoMkk-y0/0.jpg"
                        link="https://www.youtube.com/watch?v=u_TvoMkk-y0"
                        title="Professor Mausam discussing AI and roadmap for a Doordarshan panel"
                        category="YouTube"
                        description="October 13, 2020"
                    />
                    <NewsCard
                        btnText="Watch Video"
                        image="https://img.youtube.com/vi/ghV9bi_oPxk/0.jpg"
                        link="https://www.youtube.com/watch?v=ghV9bi_oPxk"
                        title="Detailed interview on the importance of School of AI in Hindi"
                        category="YouTube"
                        description="September 3, 2020"
                    />
                    <NewsCard
                        image="/duggal.jpg"
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
                <h2 style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
                    News reports on the launch of School of AI
                </h2>
                <div className="card-columns">
                    <NewsCard
                        btnText="Watch Video"
                        image="https://img.youtube.com/vi/NlgCHlA0EQ0/0.jpg"
                        link="https://www.youtube.com/watch?v=NlgCHlA0EQ0"
                        title="YouTube Video English"
                        category="YouTube"
                        description="September 14, 2020"
                    />
                    <NewsCardPlain
                        link="https://www.youtube.com/watch?v=TpikDstFkF4"
                        title="YouTube Video Hindi"
                        category="YouTube"
                        description="September 14, 2020"
                    />
                    <NewsCard
                        image="https://www.jagranjosh.com/imported/images/E/Articles/iit-delhi-establishes-school-of-artificial-intelligence.jpg"
                        link="https://www.jagranjosh.com/news/iit-delhi-establishes-school-of-artificial-intelligence-scai-to-offer-phd-and-pg-degrees-get-details-here-155667"
                        title="IIT Delhi establishes School of Artificial Intelligence (ScAI) To Offer PhD and PG Degrees"
                        category="Jagranjosh"
                        description="September 12, 2020"
                    />
                    <NewsCard
                        image="https://images.moneycontrol.com/static-mcnews/2020/09/IIT-Delhi-campus-Source-IIT-Delhi-770x433.jpg?impolicy=website&width=500&height=350"
                        link="https://www.moneycontrol.com/news/india/iit-delhi-to-establish-school-of-artificial-intelligence-phd-admissions-from-january-2021-5830271.html"
                        title="IIT-Delhi to establish School of Artificial Intelligence"
                        category="MoneyControl"
                        description="September 12, 2020"
                    />
                    <NewsCard
                        image="https://i1.wp.com/www.eastmojo.com/wp-content/uploads/2020/09/Pexels_Artifical_Intelligence.jpg?w=500&ssl=1"
                        link="https://www.eastmojo.com/news/2020/09/04/iit-delhis-school-of-artificial-intelligence-to-offer-multiple-post-graduate-courses/"
                        title="IIT Delhi's School of Artificial Intelligence to offer multiple post-graduate courses"
                        category="EastMojo"
                        description="September 4, 2020"
                    />
                    <NewsCardPlain
                        link="https://www.amarujala.com/education/school-of-artificial-intelligence-starts-at-iit-delhi"
                        title="आईआईटी दिल्ली में स्कूल ऑफ आर्टिफिशियल इंटेलीजेंस शुरू, बहुविषयक विभाग मिलकर करेंगे काम"
                        category="अमर उजाला"
                        description="September 3, 2020"
                    />
                    <NewsCardPlain
                        link="https://timesofindia.indiatimes.com/city/delhi/iit-delhi-launches-ai-school-to-begin-course-from-january/articleshow/77902846.cms"
                        title="IIT-Delhi launches AI school"
                        category="The Times Of India"
                        description="September 3, 2020"
                    />
                    <NewsCardPlain
                        link="https://www.businesstoday.in/technology/news/iit-delhi-launches-school-of-artificial-intelligence-course-to-begin-from-jan-2021/story/415054.html"
                        title="IIT-Delhi launches School of Artificial Intelligence"
                        category="Business Today"
                        description="September 3, 2020"
                    />
                    <NewsCard
                        image="https://d3pc1xvrcw35tl.cloudfront.net/sm/images/686x514/iit-delhi_202003148130.png"
                        link="https://www.lokmatnews.in/india/iit-delhi-opens-artificial-intelligence-school-b394/"
                        title="IIT दिल्ली में खुला आर्टिफिशियल इंटेलिजेंस स्कूल, शिक्षा के क्षेत्र में मिलेगा बढ़ावा"
                        category="लोकमत हिंदी"
                        description="September 2, 2020"
                    />
                    <NewsCard
                        image="https://www.dqindia.com/wp-content/uploads/2020/03/futuristic-3862179_1280.jpg"
                        link="https://www.dqindia.com/iit-delhi-launches-new-school-artificial-intelligence-phd-pg-level-courses-offered/"
                        title="IIT Delhi Launches New School of Artificial Intelligence, PhD and PG Level Courses to be Offered"
                        category="DataQuest"
                        description="September 2, 2020"
                    />
                    <NewsCardPlain
                        link="https://news.careers360.com/iit-delhi-establishes-school-of-artificial-intelligence"
                        title="IIT Delhi establishes School of Artificial Intelligence"
                        category="Careers360"
                        description="September 2, 2020"
                    />
                    <NewsCard
                        image="https://images.financialexpress.com/2020/09/iit660.jpg"
                        link="https://www.financialexpress.com/education-2/iit-delhi-sets-up-ai-school-will-offer-degree-professional-courses/2072698/"
                        title="IIT Delhi sets up AI school; will offer degree, professional courses"
                        category="Financial Express"
                        description="September 2, 2020"
                    />
                </div>
            </div>
        </>
    );
};

export default Data;
