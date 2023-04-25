import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <p>
                        IIT Delhi senate has recently approved the MTech
                        programme in Machine Intelligence & Data Science (MINDS)
                        offered by ScAI. The MTech in MINDS will be a flagship
                        educational programme for the ScAI at IIT Delhi, and is
                        expected to begin in July 2022.
                    </p>
                    <p>
                        MTech in MINDS is planned as an industry-sponsored
                        programme. The students will be expected to work on
                        industry-relevant AI problems, since they will be
                        co-advised by an IIT Delhi faculty member and a
                        researcher from the sponsoring company. The MINDS
                        curriculum will include graduate-level courses in core
                        AI technologies like deep learning and data science,
                        application-oriented courses like computer vision and
                        natural language processing, and also fundamental
                        courses on mathematics underlying modern AI
                        technologies. The students who join the MINDS program
                        will have to complete a set of core courses, bridge core
                        courses, program electives, and a project. These courses
                        could be from course buckets such as mathematics,
                        learning, data science, and applications.
                    </p>
                    <h2>Admission process:</h2>
                    <p>The admission process for M.Tech consist of two stages:
                         <ul>
                            <li>In the first stage, the candidates are short 
                            listed based on pre-approved shortlisting criteria set by the School.
                            Note that shortlisting criteria of the school is more stringent
                            that the minimum shortlisting criteria set by the institute. For more information,
                            please refer to the previous year shortlisting criteria. 
                            The criteria may change semester to semester but can give
                            you a broad idea about the expectations. Four Year B.Tech. / B.E. Degree (first class)
                            or any equivalent degree (e.g., B.S. from a foreign university,
                            and M.Sc., MCA, or other Master’s degrees done as part of a 3+2 model)
                            from any Engineering or Science discipline. A valid GATE score would be
                            needed where such a requirement is not waived, such as students from an
                            IIT with a CGPA exceeding a threshold. Strong interest and background in
                            computational mathematics and programming are preferred.</li>
                            <li>In the second stage, the shortlisted candidates are invited to appear
                            for an online written test. The written test has five sections: (a) General Aptitude,
                            (b) Maths and Stats, (c) Data Structure and Algorithm, (d) Machine Learning, and
                            (e) Programming. Note that the marks in 3 best sections are considered for calculating
                            the marks. Also, programming section has more weightage as compared to the other section.
                            The syllabus and reference materials for the written exam can be 
                            {" "}<a href="put_link" target="_blank" rel="noopener noreferrer" >found here</a>.
                            Some sample questions are also provided. The final offers will be made based on GATE
                            SCORE/CGPA and the written performance having 70:30 weightage ratio.</li>
                        </ul>
                    See <a href="put_link" target="_blank" rel="noopener noreferrer" >admission link</a> for further details.
                    </p>
                    <h2>Course Structure:</h2>
                    <p>Every MINDS candidate at Yardi ScAI has to complete minimum 50 credits of coursework while touching at least three buckets.
                    Please check {" "}<a href="/pdf/Course_List_Masters.pdf" target="_blank" rel="noopener noreferrer" >course bucket list</a>{" "}
                    for further details. Note that the bucket list gets updated periodically.
                    </p>
                    <p>M.Tech/MSR Shortlisting Criteria : {" "}<a href="/pdf/MSR_MTech_Shortlisting_Criteria_2022.pdf" target="_blank" rel="noopener noreferrer" >click here</a>
                    </p>
                    <p>If you want to view the information brochure, please <a href = "https://owncloud.iitd.ac.in/nextcloud/index.php/s/D9ymD3jboaD5JBt">click here</a>.
                    </p>
                    <p>For the courses list, please {" "}<a href="/pdf/Course_List_Masters.pdf" target="_blank" rel="noopener noreferrer" >click here</a>
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
