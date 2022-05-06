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
                    <p>In the long run, ScAI also envisions starting an Executive 
                        Masters programme taught primarily via evening and weekend classes. 
                        This programme will cater to the growing global demand by training 
                        industry professionals in modern AI techniques. Please check back 
                        this space later for any updates.
                    </p>
                    <h2>Eligibility</h2>
                    <p>Four Year B.Tech. / B.E. Degree (first class) or any equivalent
                        degree (e.g., B.S. from a foreign university, and  M.Sc., MCA, or 
                        other Master’s degrees done as part of a 3+2 model) from any Engineering or Science discipline. 
                        A valid GATE score would be needed where such a requirement is not waived, such as students from 
                        an IIT with a CGPA exceeding a threshold. Strong interest and background in computational mathematics and programming are preferred.
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
                    </p>
                    <p><strong>New:</strong> To view the shortlisting criteria, please {" "}<a href="/pdf/MSR_MTech_Shortlisting_Criteria_2022.pdf" target="_blank" rel="noopener noreferrer" >click here</a>
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
                </div>
            </div>
        </>
    );
};

export default Data;
