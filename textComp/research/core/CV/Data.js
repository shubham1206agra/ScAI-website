import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <p>
                    Computer vision deals with extracting useful information
                    from visual input such as images and videos. Similar to
                    natural vision in human beings, in which eyes capture the
                    visual information and brain interprets them, in computer
                    vision cameras or equivalent devices, capture the scene
                    information and computer interprets them. Computer vision
                    finds its applications in variety of domains ranging from
                    transportation, healthcare, robotics, and consumer devices,
                    to security & surveillance, as well as defense.
                </p>
                <p>
                    Computer vision group at School of AI (Yardi ScAI) is involved in
                    following research topics:
                </p>
                <ol type="a">
                    <li>
                        <strong>Advanced Driving Assistance</strong>
                    </li>
                    <p>
                        Cars are one of the costliest assets a person purchases
                        besides housing. The concept of self-driving cars
                        enables the vehicle to move autonomously from one place
                        to another without intervention of a human driver. With
                        the increasing load of vehicles on the road, it is
                        becoming increasingly important to use automated tools
                        for efficient management of traffic using AI driven
                        signals on the traffic intersections Computer vision
                        group at Yardi ScAI is working on multiple problems in the
                        area of advanced driver assistance for Indian roads.
                    </p>
                    <li>
                        <strong>Automated Diagnosis</strong>
                    </li>
                    <p>
                        With the number of doctors, we produce every year, it is
                        extremely difficult, if not impossible, to provide
                        adequate healthcare facilties to the billion plus
                        population of India. Computer vision group at Yardi ScAI is
                        involved with many such problems involving automated
                        diagnosis of various diseases and cancers from the
                        radiological images such as gall bladder cancer
                        detection from ultrasound sonography images, and breast
                        cancer detection from mammograms.
                    </p>
                    <li>
                        <strong>Surgical Simulators</strong>
                    </li>
                    <p>
                        Critical surgeries such of the brain require extreme
                        skills from the surgeons. Simulators offer an effective
                        alternative allowing trainee surgeons to practice in a
                        variety of settings which are rare to observe in a real
                        surgery. The group is involved with developing
                        simulators for skill enhancement, and automated skill
                        evaluation for neurosurgeons.
                    </p>
                    <li>
                        <strong>Telerobotics</strong>
                    </li>
                    <p>
                        Remotely operated robotics tools allow a doctor sitting
                        in a tertiary health center in a city to offer expert
                        healthcare service in remote and rural areas also. The
                        computer vision group is collaborating with Robotics
                        group at IIT Delhi to develop remotely operated
                        ultrasound robotic arm, which will be useful in
                        providing prenatal care in remote centers, as well as
                        covid treatment in a local but physically separated
                        scenarios.
                    </p>
                </ol>
                <h4>Impact Areas</h4>
                <ul>
                    <li>Transportation</li>
                    <li>Health Care</li>
                    <li>Robotics</li>
                </ul>
                <h4>Faculty Members Currently Involved</h4>
                <ul>
                    <li>Chetan Arora</li>
                    <li>Jayadeva</li>
                    <li>Rijurekha Sen</li>
                    <li>Rohan Paul</li>
                </ul>
                <h4>Key Publications</h4>
                <ol>
                    <li>
                        Kumar, P., Nagar, P., Arora, C. and Gupta, A., 2018,
                        October. U-Segnet: fully convolutional neural network
                        based automated brain tissue segmentation tool. In 2018
                        25th IEEE International Conference on Image Processing
                        (ICIP) (pp. 3503-3507). IEEE.
                    </li>
                    <li>
                        Hema, C.R., Paulraj, M.P., Nagarajan, R., Yaacob, S. and
                        Adom, A.H., 2008. Application of Particle Swarm
                        Optimization for EEG Signal Classification (&#60;
                        Special Issue &#62; Contribution to 21 Century
                        Intelligent Technologies and Bioinformatics).
                        International Journal of Biomedical Soft Computing and
                        Human Sciences: the official journal of the Biomedical
                        Fuzzy Systems Association, 13(1), pp.79-84.
                    </li>
                    <li>
                        Chauhan, M.S., Singh, A., Khemka, M., Prateek, A. and
                        Sen, R., 2019, January. Embedded CNN based vehicle
                        classification and counting in non-laned road traffic.
                        In Proceedings of the Tenth International Conference on
                        Information and Communication Technologies and
                        Development (pp. 1-11).
                    </li>
                    <li>
                        Tucker, M., Aksaray, D., Paul, R., Stein, G.J. and
                        Roy, N., 2020. Learning unknown groundings for natural
                        language interaction with mobile robots. In Robotics
                        Research (pp. 317-333). Springer, Cham.
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Data;
