import DonorCard from "../../components/DonorCard/DonorCard";
import StartTop from "../../components/StartTop/StartTop";
import Waves from "../../components/Waves/Waves";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Donors = () => {
    return (
        <>
            <Header />
            <StartTop
                text="Support Us"
                image="/bg-top1.jpg"
                // image="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
            />
            <Waves r={255} g={255} b={255} />
            <p
                style={{
                    paddingTop: "5vh",
                    paddingRight: "10vw",
                    paddingLeft: "10vw",
                    fontSize: "20px",
                    textAlign: "justify",
                }}
            >
                IIT Delhi sees alumni as important stakeholders, who have played
                a critical role in the progress of the Institute. Alumni have
                contributed to the growth of the Institute through their
                financial and non-financial resources. The Institute sees the
                establishment of ScAI as a bold step which will not only
                strengthen IIT Delhi's academic and research credentials but
                also enable the nation in its journey in scientific and
                technological advancements. IIT Delhi is inviting its alumni to
                be a part of the "League of Founding Donors" to the School of
                Artificial Intelligence. The League will remain "Founders
                Forever". The League of Founding Donors will be a privileged
                group who will help ScAI start its journey, awarding
                scholarships to ambitious students, enabling the school to
                attract the best faculty in AI, enabling the faculty and
                students to attend global and domestic conferences, setting up
                chair professorships, and strengthening research.
            </p>
            <p
                style={{
                    paddingRight: "10vw",
                    paddingLeft: "10vw",
                    fontSize: "20px",
                    textAlign: "center",
                }}
            >
                If you are interested in this endeavour, please write to{" "}
                <a href="mailto:hodscai@admin.iitd.ac.in">
                    hodscai@admin.iitd.ac.in
                </a>{" "}
                for more details.
            </p>
            <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
                League of Founding Donors
            </h2>
            <div
                style={{
                    width: "15vw",
                    borderTop: "4px solid black",
                    marginTop: '1rem',
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            ></div>
            <div style={{display: 'grid'}}>
                <DonorCard
                    posi={1} 
                    img="/duggal.jpg"
                    name="Arun Duggal"
                    pos="Co-Founder"
                    desc="Chairman at ICRA Limited"
                    linkedin="https://www.linkedin.com/in/arun-duggal-38124331/"
                />
                <DonorCard
                    posi={2}
                    img="/google.jpg"
                    name="Google"
                    pos="Pioneer Founder"
                    desc="Company - Internet"
                    linkedin="https://www.linkedin.com/company/google/"
                />
            </div>
            <ScrollToTop />
            <Footer />
        </>
    );
};

export default Donors;
