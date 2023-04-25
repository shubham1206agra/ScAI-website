import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <p>
                        The MS(R) program at Yardi ScAI is an alternative to the 
                        {" "}<a href="/join/mtech/" target="_blank" rel="noopener noreferrer" >MINDS program</a>{" "} at IIT Delhi.
                        While MINDS is an industry-oriented masters program, the MS(R) program is more research oriented.
                        Accordingly, the coursework requirement is significantly relaxed in the MS(R) program.
                        This program is particularly suited for candidates interested in pursuing a PhD in future.
                        Heading ScAI being an interdisciplinary unit has faculty members working in the areas of
                        both core AI and applied AI. Please check our research and faculty pages for understanding
                        various ongoing research at Yardi ScAI.
                    </p>
                    <h2>Admission process:</h2>
                    <p>The admission process for MS(R) consist of three stages:
                         <ul>
                            <li>In the first stage, the candidates are short listed based on pre-approved
                            shortlisting criteria set by the School. Note that shortlisting criteria of
                            the school is more stringent that the minimum shortlisting criteria set by the institute.
                            For more information, please refer to the previous year shortlisting criteria.
                            The criteria may change semester to semester, but can give you a broad idea about the expectations.</li>
                            <li>In the second stage, the shortlisted candidates are invited to appear for an online written test.
                            The written test has five sections: (a) General Aptitude, (b) Maths and Stats,
                            (c) Data Structure and Algorithm, (d) Machine Learning, and (e) Programming.
                            Note that the marks in 3 best sections are considered for calculating the marks.
                            Also, programming section has more weightage as compared to the other section.
                            The syllabus and reference materials for the written exam can be 
                            {" "}<a href="put_link" target="_blank" rel="noopener noreferrer" >found here</a>.
                            Some sample questions are also provided.</li>
                            <li>The candidates who qualifies the second stage will be called for the interview (third stage).
                            The final offers are made based on the performance in the interview only.</li>
                        </ul>
                    The admission portal for PhD admission opens two times in a year (summer admission and winter admission). See 
                    {" "}<a href="https://home.iitd.ac.in/pg-admissions.php" target="_blank" rel="noopener noreferrer" >admission link</a>{" "} for further details.
                    </p>
                    <h2>Course Structure:</h2>
                    <p>Every MS(R) candidate at Yardi ScAI has to complete minimum 15 credits of coursework.
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
