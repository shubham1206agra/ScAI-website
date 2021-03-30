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
                        research at ScAI. Adequate exposure to probability,
                        optimisation, linear algebra, data structures, and good
                        programming skills are the pre-requisites for being a
                        successful student at ScAI. If you have any specific
                        queries, write to{" "}
                        <a href="mailto:office@scai.iitd.ac.in">
                            office@scai.iitd.ac.in
                        </a>{" "}
                        for any clarification.
                    </p>
                </div>
                <div>
                    <h2>Masters</h2>
                    <p>
                        M.Tech. and MSR programmes (approvals awaited) in
                        Machine Intelligence & Data Science (MINDS) is expected
                        to start by July 2021 from ScAI. The school will also
                        start a minor area in MINDS for undergraduate
                        students.In the long run, ScAI also envisions starting
                        an Executive Masters programme taught primarily via
                        evening and weekend classes. This programme will cater
                        to the growing global demand by training industry
                        professionals in modern AI techniques. Please check back
                        this space later for any updates.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Data;
