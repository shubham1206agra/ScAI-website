import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <h2>PhD</h2>
                    <p>
                        ScAI welcomes applications from strongly motivated
                        students who want to pursue their Ph.D. in the areas of
                        both core AI and applied AI. Please check our research
                        and faculty pages for understanding various ongoing
                        research at ScAI.
                    </p>
                    <p>
                        All engineering students irrespective of their
                        Bachelors/Masters discipline are welcome to join a Ph.D.
                        in ScAI. For more information, please refer to the{" "}
                        <a
                            href="/pdf/ScAI-PhD.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            2021-22 Semester 1 shortlisting criteria
                        </a>
                        . The criteria may change semester to semester, but
                        gives a broad idea of expectations.
                    </p>
                    <p>
                        Once shortlisted, ScAI will assess a student’s
                        preparedness for a PhD by a test that will include
                        probability, statistics, optimisation, linear algebra,
                        data structures, basics of AI, ML and data science, and
                        programming skills. These areas are the pre-requisites
                        for being a successful student at ScAI. If selected in
                        the test, an interview will be conducted to assess this
                        further and also fit with current advisors.
                    </p>
                    <p>
                        After being admitted to ScAI, the PhD coursework will
                        include courses in AI, Machine Learning, Data Science,
                        and mathematical foundations. The students may also be
                        asked to take specific courses needed for a student’s
                        thesis. If a student has any further queries, please
                        write to{" "}
                        <a href="mailto:office@scai.iitd.ac.in">
                            office[AT]scai.iitd.ac.in
                        </a>{" "}
                        for any clarification.
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
                </div>
                <div>
                    <h2>Masters</h2>
                    <p>
                        M.Tech. and MSR programmes (approvals awaited) in
                        Machine Intelligence & Data Science (MINDS) is expected
                        to start by July 2021 from ScAI. All engineering
                        students irrespective of their Bachelors discipline will
                        be welcome to join Masters in MINDS. Please check back
                        this space later for any updates.
                    </p>
                    <p>
                        In the long run, ScAI also envisions starting an
                        Executive Masters programme taught primarily via evening
                        and weekend classes. This programme will cater to the
                        growing global demand by training industry professionals
                        in modern AI techniques. Please check back this space
                        later for any updates.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Data;
