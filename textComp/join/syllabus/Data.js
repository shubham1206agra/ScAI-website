import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <h2>Syllabus:</h2>
                    <h6>Linear algebra:</h6>
                    <p>Vectors, System of Linear equations, Vector Spaces and Subspaces,
                    Orthogonality, Determinants, Projections, Eigenvalues and Eigenvectors, Singular Value Decomposition</p>
                    <p>Reading material:
                         <ul>
                              <li>Introduction to Linear Algebra, Gilbert Strang, 3rd edition (2003): Chapters 1-6. Related web resource</li>
                              <li>Linear Algebra Done Right, Sheldon Axler, 3rd edition (2015).</li>
                         </ul>
                    </p>
                    <h6>Probability and Statistics:</h6>
                    <p>Basic probability, Random variables, Sampling, Parameter estimation, Regression, Moments,
                    distance measures, Probability Distributions, etc.</p>
                    <p>Reading material:
                         <ul>
                              <li>A First Course in Probability, Sheldon M Ross, 9th edition (2013).</li>
                         </ul>
                    </p>
                    <h6>Optimization:</h6>
                    <p>Convex Sets, Convex Functions, Convex Optimization Problems, Optimality Conditions, first order methods.</p>
                    <p>Reading material:
                         <ul>
                              <li>Convex optimization, Stephen Boyd and Lieven and Vandenberghe, Cambridge University press, 2004, Chapters 1 to 4.</li>
                         </ul>
                    </p>
                    <h6>Data Structure and Algorithms:</h6>
                    <p>Algorithms, Asymptotic notation, Divide and conquer, Sorting, Searching.</p>
                    <p>Reading material:
                         <ul>
                              <li>Introduction to Algorithms, Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein, 3rd edition (2009).</li>
                         </ul>
                    </p>
                    <h6>Machine Learning:</h6>
                    <p>Machine learning tasks, Types of learning, Bias Variance Trade-off, Overfitting, Underfitting, etc.</p>
                    <p>Reading material:
                         <ul>
                              <li>Deep Learning, Ian Goodfellow, Yoshua Bengio, Aaron Courville, 2016, Chapter 5.</li>
                              <li>Probabilistic Machine Learning, Kevin Murphy, 2022.</li>
                              <li>Pattern Recognition and Machine Learning, Christopher Bishop.</li>
                         </ul>
                    </p>
                    <h6>Programming</h6>
                    <h6>Aptitude</h6>
                    <p>As GATE Syllabus</p>
                </div>
            </div>
        </>
    );
};

export default Data;