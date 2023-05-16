import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <p>
                        The MTech in Machine Intelligence & Data Science (MINDS)
                        is a flagship educational programme for the Yardi ScAI at IIT Delhi,
                        and started in July 2022. The MINDS curriculum includes graduate-level
                        courses in core AI technologies like deep learning and data science,
                        application-oriented courses like computer vision and natural language processing,
                        and also fundamental courses on mathematics underlying modern AI technologies.
                        The students who join the MINDS program will have to complete a set of core courses,
                        bridge core courses, program electives, and a project. These courses could be from
                        course buckets such as mathematics, learning, data science, and applications.
                    </p>
                    <h2>Admission process:</h2>
                    <p>The admission process for M.Tech consist of two stages:
                         <ul>
                            <li>In the first stage, the candidates are short 
                            listed based on pre-approved shortlisting criteria set by the School.
                            Note that shortlisting criteria of the school is more stringent
                            that the minimum shortlisting criteria set by the institute. For more information,
                            please refer to the {" "}<a href="/pdf/MSR_MTech_Shortlisting_Criteria_2022.pdf" target="_blank" rel="noopener noreferrer" > previous year shortlisting criteria</a>{" "}. 
                            The criteria may change semester to semester but can give
                            you a broad idea about the expectations. Four Year B.Tech. / B.E. Degree (first class)
                            or any equivalent degree (e.g., B.S. from a foreign university,
                            and M.Sc., MCA, or other Master’s degrees done as part of a 3+2 model)
                            from any Engineering or Science discipline. A valid GATE score would be
                            needed where such a requirement is not waived, such as students from an
                            IIT with a CGPA exceeding a threshold. Strong interest and background in
                            computational mathematics and programming are preferred.</li>
                            <li>In the second stage, the shortlisted candidates are invited to appear
                            for an written test. The written test has five sections: (a) General Aptitude,
                            (b) Maths and Stats, (c) Data Structure and Algorithm, (d) Machine Learning, and
                            (e) Programming. The syllabus and reference materials for the written exam can be 
                            {" "}<a href="/pdf/syllabusAdmissionExam.pdf" target="_blank" rel="noopener noreferrer" >found here</a>.
                            Some sample questions are also provided. The final offers will be made based on GATE
                            SCORE/CGPA and the written performance having 70:30 weightage ratio.</li>
                        </ul>
                    See {" "}<a href="https://home.iitd.ac.in/pg-admissions.php" target="_blank" rel="noopener noreferrer" >admission link</a>{" "} for further details.
                    </p>
                    <p>If you want to view the information brochure, please <a href = "https://owncloud.iitd.ac.in/nextcloud/index.php/s/D9ymD3jboaD5JBt">click here</a>.
                    </p>
                    <p>To visit the application portal, please <a href = "https://ecampus.iitd.ac.in/PGADM/login">click here</a>.
                    </p>
                    <p>
                        If a student has any further queries, please write to{" "}
                        <a href="mailto:office@scai.iitd.ac.in">
                            office[AT]scai.iitd.ac.in
                        </a>{" "}
                        for any clarification.
                    </p>
                    <h2>Course Structure:</h2>
                    <p>Every MINDS candidate at Yardi ScAI has to complete minimum 50 credits of coursework while touching at least three buckets.
                    Please check {" "}<a href="/pdf/Course_List_Masters.pdf" target="_blank" rel="noopener noreferrer" >course bucket list</a>{" "}
                    for further details. Note that the bucket list gets updated periodically.
                    </p>
                    <h2>New Updates for Admissions(2023-24)</h2>
                    <p>Shortlisting Criteria : {" "}<a href="/pdf/MSR_MTech_Shortlisting_Criteria_2023.pdf" target="_blank" rel="noopener noreferrer" >click here</a>
                    </p>
                    <p>The emails to all the applicants have been sent.
                    The shortlisted candidates are invited to appear for the next stage of the written test which will be conducted in a physical mode at
                    designated centers across India. <b>Exam details: Date 20/05/23  and Time: 1:00 pm to 4:00 pm.</b>
                    </p>
                    <p>Practice Questions: {" "}<a href="/pdf/ScAI_Sample_Question_Paper_for_Aptitude_Test.pdf" target="_blank" rel="noopener noreferrer" >pdf</a>
                    </p>
                    <p>Istructions and centers : {" "}<a href="https://docs.google.com/document/d/1QBnvWLV2gHelEtKgcUytUzm-DpdFuvWy0OQba9bZjWs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >info</a>
                    </p>
                    <p>Keep checking this page for more updates.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Data;
