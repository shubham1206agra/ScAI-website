const col = [
    "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
    "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)",
    "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
    "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
    "linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)",
    "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)",
    "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
    "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
    "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)",
    "linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%)"
];

const data = [
    {
        name: "Dr. Mausam",
        position: "Head",
        research_areas: [
            "Artificial Intelligence",
            "Natural Language Processing",
            "Machine Learning",
        ],
        address: [
            "Room 402, SIT Building,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "mausam@cse.iitd.ac.in",
        phone: "+91-11-2659-6076",
        page: "https://www.cse.iitd.ac.in/~mausam/",
        css: col[0],
        image: "/mausam.jpg",
    },
    {
        name: "Dr. Sumeet Agarwal",
        // position: "Associate Professor",
        research_areas: [
            "Machine Learning",
            "Cognitive Science",
            "Systems Biology",
            "Complex Networks",
            "Computational Linguistics",
            "Computational Social Science",
        ],
        address: [
            "Room No. 404, Block II, Department of Electrical Engineering,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "sumeet@iitd.ac.in",
        phone: "+91-11-2659-6159",
        page: "http://web.iitd.ac.in/~sumeet",
        css: col[1],
        image: "/sumeet.jpg",
    },
    {
        name: "Dr. Ankush Agrawal",
        // position: "Associate Professor",
        research_areas: [
            "Applied Econometrics",
            "Development Economics",
            "India’s Official Statistics",
        ],
        address: [
            "Room 402G, Block II,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "ankush@hss.iitd.ac.in",
        phone: "+91-11-2659-1371",
        page: "https://hss.iitd.ac.in/faculty/ankush-agrawal",
        css: col[2],
        image: "/ankush.jpg",
    },
    {
        name: "Dr. Prathosh A.P.",
        // position: "Assistant Professor",
        research_areas: [
            "Vision and image processing",
            "audio, speech and music analytics and learning (deep learning, sequential modelling and transfer learning)",
        ],
        address: [
            "Room II-114 (Block -II, Ground floor),",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "prathoshap@ee.iitd.ac.in",
        phone: "+91-11-2659-1151",
        page: "https://sites.google.com/view/prathosh",
        css: col[3],
        image: "/prathosh.jpg",
    },
    {
        name: "Dr. Chetan Arora",
        // position: "Associate Professor",
        research_areas: ["Computer Vision", "Machine Learning"],
        address: [
            "Room 116, Khosla School of IT, Department of Computer Science and Engineering,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "chetan@cse.iitd.ac.in",
        phone: "+91-11-2659-1279",
        page: "https://www.cse.iitd.ac.in/~chetan/",
        css: col[4],
        image: "/chetan.jpg",
    },
    {
        name: "Dr. Amitabha Bagchi",
        // position: "Professor",
        research_areas: [
            "Structural Properties of Networks",
            "Algorithms",
            "Data Structures",
        ],
        address: [
            "Room 203 SIT Building,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "bagchi@cse.iitd.ac.in",
        phone: "+91-11-2659-6397",
        page: "https://www.cse.iitd.ac.in/~bagchi/",
        css: col[5],
        image: "/amitabha.jpg",
    },
    {
        name: "Dr. Sorav Bansal",
        // position: "Associate Professor",
        research_areas: ["Compilers", "Operating Systems"],
        address: [
            "Room 413 SIT Building,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "sbansal@iitd.ac.in",
        phone: "+91-11-2659-6020",
        page: "http://www.cse.iitd.ac.in/~sbansal",
        css: col[6],
        image: "/sorav.jpg",
    },
    {
        name: "Dr. Srikanta Bedathur",
        // position: "Associate Professor",
        research_areas: [
            "Data Management",
            "Knowledge Discovery and Data Mining",
            "Natural Language Processing",
        ],
        address: ["Bharti 423,", "IIT Delhi, Hauz Khas, New Delhi- 110016"],
        email: "srikanta@cse.iitd.ac.in",
        phone: "+91-11-2659-6010",
        page: "https://www.cse.iitd.ac.in/~srikanta/",
        css: col[7],
        image: "/srikanta.png",
    },
    {
        name: "Dr. Debanjan Bhowmik",
        // position: "Assistant Professor",
        research_areas: [
            "Artificial Intelligence at the Edge",
            "Specialised Hardware for Artificial Intelligence/ Machine Learning (Neuromorphic Computing)",
            "Nanomagnetism and Spintronics",
            "Computational Neuroscience",
            "Quantum Computing for Artificial Intelligence/ Machine Learning",
        ],
        address: ["XXXX,", "IIT Delhi, Hauz Khas, New Delhi- 110016"],
        email: "debanjan@ee.iitd.ac.in",
        phone: "+91-11-2659-1043",
        page: "https://web.iitd.ac.in/~debanjan/",
        css: col[8],
        image: "/debanjan.png",
    },
    {
        name: "Dr. Souvik Chakraborty",
        // position: "Assistant Professor",
        research_areas: [
            "Deep learning",
            "Digital twin",
            "Stochastic mechanics/dynamics",
            "Reliability analysis",
            "Design under uncertainty",
            "multi-scale systems",
            "inverse problems",
        ],
        address: [
            "Room 342C, Block IV,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "souvik@am.iitd.ac.in",
        phone: "+91-11-2659-8483",
        page: "https://www.csccm.in/home",
        css: col[9],
        image: "/souvik.png",
    },
    {
        name: "Dr. Niladri Chatterjee",
        // position: "Professor",
        research_areas: [
            "Machine Translation",
            "Artificial Intelligence",
            "Reasoning",
            "Statistical Modelling",
            "Semantic Web",
        ],
        address: [
            "Room: MZ167, Department of Mathematics,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "niladri@maths.iitd.ac.in",
        phone: "+91-11-2659-1490",
        page: "https://web.iitd.ac.in/~niladri/",
        css: col[10],
        image: "/niladri.png",
    },
    {
        name: "Dr. Arpan Chattopadhyay",
        // position: "Assistant Professor",
        research_areas: [
            "IoT",
            "Cyber-physical systems",
            "Next-generation wireless communication and networking",
            "Machine learning",
            "Reinforcement learning",
            "Radar",
            "Statistical signal processing",
        ],
        address: [
            "Room 334, Block II, Department of Electrical Engineering,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "arpanc@ee.iitd.ac.in",
        phone: "+91-11-2659-1137",
        page: "https://sites.google.com/site/arpanchattop/home",
        css: col[11],
        image: "/arpanc.png",
    },
    {
        name: "Dr. Arnob Ghosh",
        // position: "Assistant Professor",
        research_areas: [
            "Reinforcement Learning",
            "Game Theory",
            "Smart Grid",
            "Dynamical System",
            "Intelligent Control",
        ],
        address: [
            "Room No. 258, Block III, Mechanical Engineering Building,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "aghosh@iitd.ac.in",
        phone: "+91-11-2659-8428",
        page: "https://sites.google.com/site/arnob008/",
        css: col[12],
        image: "/arnob.jpg",
    },
    {
        name: "Dr. Nitya Nand Gosvami",
        // position: "Assistant Professor",
        research_areas: [
            "Fundamental Mechanisms of Friction and Wear of Materials",
            "Nanotribology of Engineering Materials and Industrial Lubricant Additives",
            "Nanoscale in Situ Methods in Tribology, Surface Science & Engineering",
            "Failure Analysis of Materials",
            "Development of Novel Scanning Probe Microscopy Technique",
            "Nanoscience and Nanotechnology",
            "Surface Science & Engineering",
        ],
        address: [
            "Room No: TX-200J, Block III, Dept. of Materials Science and Engineering",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "ngosvami@iitd.ac.in",
        phone: "+91-11-2659-6414",
        page: "https://mse.iitd.ac.in/faculty-nitya.php",
        css: col[13],
        image: "/nitya.jpg",
    },
    {
        name: "Dr. Arpan Kumar Kar",
        // position: "Associate Professor",
        research_areas: ["Data Science", "Digital Transformation"],
        address: [
            "Room 502, Vishwakarma Bhawan,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "arpankar@iitd.ac.in",
        phone: "+91-11-2659-7320",
        page: "https://arpankar.com",
        css: col[0],
        image: "/arpan.jpg",
    },
    {
        name: "Dr. Hariprasad Kodamana",
        // position: "Assistant Professor",
        research_areas: [
            "Graphs",
            "Spatiotemporal Analytics",
            "Anomaly Detection",
            "Optimization",
            "Reinforcement Learning",
        ],
        address: [
            "Room 286, Block II,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "kodamana@iitd.ac.in",
        phone: "+91-11-2659-1024",
        page: "https://web.iitd.ac.in/~kodamana/",
        css: col[1],
        image: "/hariprasad.jpg",
    },
    {
        name: "Dr. N. M. Anoop Krishnan",
        // position: "Assistant Professor",
        research_areas: [
            "Materials Modelling",
            "Data driven modelling and discovery of materials",
            "AI and ML for materials",
        ],
        address: [
            "Room 314, Block IV,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "krishnan@iitd.ac.in",
        phone: "+91-11-2659-1223",
        page: "https://sites.google.com/site/nmakrishnaniitd/home/",
        css: col[2],
        image: "/anoop.jpg",
    },
    {
        name: "Dr. Sandeep Kumar",
        // position: "Assistant Professor",
        research_areas: [
            "Optimization",
            "Signal Processing",
            "Machine Learning",
            "Graphical Models",
        ],
        address: [
            "Room 243, Block II, Dept. of Electrical Engineering,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "ksandeep@iitd.ac.in",
        phone: "+91-11-2659-5490",
        page: "https://sites.google.com/view/sandeepkr/home",
        css: col[3],
        image: "/sandeep.png",
    },
    {
        name: "Dr. Aparna Mehra",
        // position: "Professor",
        research_areas: ["Optimization Theory"],
        address: [
            "Room: MZ151, Department of Mathematics,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "apmehra@maths.iitd.ac.in",
        phone: "+91-11-2659-7106",
        page: "https://web.iitd.ac.in/~apmehra/",
        css: col[4],
        image: "/aparna.png",
    },
    {
        name: "Dr. Rohan Paul",
        // position: "Assistant Professor",
        research_areas: [
            "Robot Intelligence",
            "Embodied AI",
            "Sub: Learning, planning and human assistance",
        ],
        address: [
            "Room 414, Khosla School of IT, Department of Computer Science and Engineering,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "rohan@cse.iitd.ac.in",
        phone: "+91-11-2659-8435",
        page: "https://www.cse.iitd.ac.in/~rohanpaul",
        css: col[5],
        image: "/rohan.jpg",
    },
    {
        name: "Dr. Maya Ramanath",
        // position: "Associate Professor",
        research_areas: [
            "Database Systems and Information Retrieval",
            "Semantic Web Data Management",
            "Knowledge graph construction and applications",
        ],
        address: [
            "Room 214, SIT Building,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "ramanath@cse.iitd.ac.in",
        phone: "+91-11-2659-6022",
        page: "https://www.cse.iitd.ac.in/~ramanath/",
        css: col[6],
        image: "/maya.jpg",
    },
    {
        name: "Dr. Sayan Ranu",
        // position: "Associate Professor",
        research_areas: [
            "Machine Learning and Data Mining for Graphs",
            "Spatio-temporal Data Analytics",
            "Bioinformatics",
        ],
        address: ["Bharti 421,", "IIT Delhi, Hauz Khas, New Delhi- 110016"],
        email: "sayanranu@cse.iitd.ac.in",
        phone: "+91-11-2659-6383",
        page: "https://www.cse.iitd.ac.in/~sayan/",
        css: col[7],
        image: "/sayan.jpg",
    },
    {
        name: "Dr. Sitikantha Roy",
        // position: "Associate Professor",
        research_areas: [
            "Biomechanics of tissue damage",
            "Musculoskeletal Biomechanics",
            "Soft Robotics",
            "Bioinspired Engineering",
            "Mechanics of soft active material",
            "Smart structures and control",
            "Composite structures",
        ],
        address: [
            "Room 243, Block IV,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "sroy@am.iitd.ac.in",
        phone: "+91-11-2659-1220",
        page: "https://sites.google.com/view/sitilab-iitd/",
        css: col[8],
        image: "/sitikantha.png",
    },
    {
        name: "Dr. Smruti R. Sarangi",
        // position: "Associate Professor",
        research_areas: [
            "Use of ML algorithms for temperature estimation and on-chip traffic prediction",
            "Design of AI/ML accelerators",
            "AI/ML algorithms on ultra-low power processors",
            "Architectures for stereo-vision (based on ML algorithms)",
        ],
        address: [
            "Room 215, SIT Building,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "srsarangi@cse.iitd.ac.in",
        phone: "+91-11-2659-7065",
        page: "https://www.cse.iitd.ac.in/~srsarangi/",
        css: col[9],
        image: "/smruti.jpg",
    },
    {
        name: "Dr. Rijurekha Sen",
        // position: "Assistant Professor",
        research_areas: [
            "Mobile and Embedded Systems (Hardware Architecture, OS, Sensing, Efficient Processing, Security)",
            "Computational Sustainability",
        ],
        address: ["Bharti 514,", "IIT Delhi, Hauz Khas, New Delhi- 110016"],
        email: "riju@cse.iitd.ac.in",
        phone: "+91-11-2659-7385",
        page: "https://www.cse.iitd.ac.in/~rijurekha/",
        css: col[10],
        image: "/rijurekha.jpg",
    },
    {
        name: "Dr. Shaurya Shriyam",
        // position: "Assistant Professor",
        research_areas: [
            "Simulation Modelling",
            "Heuristics Optimization",
            "Multi-agent Planning and Reinforcement Learning",
        ],
        address: [
            "Room 258, Block III, Department of Mechanical Engineering,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "shriyam@iitd.ac.in",
        phone: "+91-11-2659-8428",
        page: "https://web.iitd.ac.in/~shriyam/index.html",
        css: col[11],
        image: "/shaurya.jpg",
    },
    {
        name: "Dr. Parag Singla",
        // position: "Associate Professor",
        research_areas: [
            "Machine Learning",
            "Social Network Analysis",
            "Artificial Intelligence",
        ],
        address: [
            "Room 413, Khosla School of IT, Department of Computer Science and Engineering,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "parags@cse.iitd.ac.in",
        phone: "+91-11-2659-6064",
        page: "https://www.cse.iitd.ac.in/~parags/index.html",
        css: col[12],
        image: "/parag.jpg",
    },
    {
        name: "Dr. D. Sundar",
        // position: "Professor",
        research_areas: ["AI in Healthcare and Life Sciences"],
        address: ["XXXXXX", "IIT Delhi, Hauz Khas, New Delhi- 110016"],
        email: "sundar@dbeb.iitd.ac.in",
        phone: "+91-11-2659-1066",
        page: "https://web.iitd.ac.in/~sundar/",
        css: col[13],
        image: "/sundar.png",
    },
    {
        name: "Dr. Manan Suri",
        // position: "Associate Professor",
        research_areas: [
            "Specialized Hardware for Edge and Enterprise AI",
            "Neuromorphic Hardware",
            "Non Volatile Memory Technology",
            "Semiconductor Hardware Security",
            "Edge AI Applications",
        ],
        address: [
            "Room 115, Block II,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "manansuri@ee.iitd.ac.in",
        phone: "+91-11-2659-1146",
        page: "https://web.iitd.ac.in/~manansuri/",
        css: col[0],
        image: "/manan.png",
    },
    {
        name: "Dr. Ashwini Vaidya",
        // position: "Assistant Professor",
        research_areas: ["Computational linguistics", "Cognitive Science"],
        address: [
            "MS 623, IIT Delhi Campus,",
            "IIT Delhi, Hauz Khas, New Delhi- 110016",
        ],
        email: "avaidya@hss.iitd.ac.in",
        phone: "+91-11-2659-8405",
        page: "https://web.iitd.ac.in/~avaidya",
        css: col[1],
        image: "/ashwini.jpg",
    },
];

export default data;
