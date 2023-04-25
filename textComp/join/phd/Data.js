import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <p>
                        Yardi ScAI welcomes applications from strongly motivated
                        students who want to pursue their Ph.D. in the areas of
                        both core AI and applied AI. Please check our research
                        and faculty pages for understanding various ongoing
                        research at ScAI.
                    </p>
                    <h2>Admission process:</h2>
                    <p>The admission process for MS(R) consist of three stages:
                         <ul>
                            <li>In the first stage, the candidates are short listed based on pre-approved shortlisting criteria
                            set by the School. Note that shortlisting criteria of the school is more stringent that the minimum
                            shortlisting criteria set by the institute. For more information, please refer to the previous year
                            shortlisting criteria. The criteria may change semester to semester but can give you a broad idea
                            about the expectations.</li>
                            <li>In the second stage, the shortlisted candidates are invited to appear for an online written test.
                            The written test has five sections: (a) General Aptitude, (b) Maths and Stats, (c) Data Structure and Algorithm,
                            (d) Machine Learning, and (e) Programming. Note that the marks in 3 best sections are considered for calculating the marks.
                            Also, programming section has more weightage as compared to the other section. The syllabus and reading materials
                            for the written exam can be found here. Some sample questions are also provided.</li>
                            <li>The candidates who qualifies the second stage will be called for the interview (third stage).
                            The final offers are made based on the performance in the interview only.
                            </li>
                        </ul>
                    The admission portal for PhD admission opens two times in a year (summer admission and winter admission). See admission link for further details.
                    </p>
                    <h2>Course Structure:</h2>
                    <p>Every PhD candidate at Yardi ScAI has to complete minimum 9 credits of coursework while touching at least three buckets.
                    Please check course bucket list for further details. Note that the bucket list gets updated periodically.
                    </p>
                    <h2>Admissions New Update</h2>
                    <p>The test and interviews for M.Tech/MSR/Ph.D. admissions will be conducted online. The exact date will be announced on very short notice. 
                    Please keep checking the website and your email.
                    </p>

                     <p>The syllabus of the test:
                         <ul>
                            <li>Basic maths (Linear Algebra, Probability, and Statistics)</li>
                            <li>Aptitude</li>
                            <li>Basics of AI/ML</li>
                            <li>Programming and Data structure.</li>
                          </ul>
                    </p>
                    <p>Ph.D. Shortlisting Criteria : {" "}<a href="/pdf/PhD_Shortlisting_Criteria_Summer_2022.pdf" target="_blank" rel="noopener noreferrer" >click here</a>
                    </p>
                    <p>M.Tech/MSR Shortlisting Criteria : {" "}<a href="/pdf/MSR_MTech_Shortlisting_Criteria_2022.pdf" target="_blank" rel="noopener noreferrer" >click here</a>
                    </p>
                    <p>
                        <a
                            href="https://ecampus.iitd.ac.in/PGADM/login"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link for Admissions
                        </a>
                    </p>
                    <p><strong>New: Provisional list of selected candidates for MSR and PhD program in Summer 2022-23 : {" "}<a href="/pdf/Final_list_MSR_PhD_Summer_2022.pdf" target="_blank" rel="noopener noreferrer" >click here</a></strong>
                    </p>
                    <p><strong>New: Provisional list of selected candidates for MSR and PhD program in Winter 2022-23 : {" "}<a href="/pdf/Final_list_MSR_PhD_Winter_2022.pdf" target="_blank" rel="noopener noreferrer" >click here</a></strong>    
                    </p>
                </div>
            </div>
        </>
    );
};

export default Data;
