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
                        learning, data science, and applications. Please check
                        back this space later for any updates.
                    </p>
                    <p>
                        In the long run, ScAI also envisions starting an
                        Executive Masters programme taught primarily via evening
                        and weekend classes. This programme will cater to the
                        growing global demand by training industry professionals
                        in modern AI techniques. Please check back this space
                        later for any updates.
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
