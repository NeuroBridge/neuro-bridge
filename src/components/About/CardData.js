const CardData = [
  {
    id: 1,
    imgPath: "",
    name: "name?",
    text: "This is a quick bio",
    buttonLink: "",
    buttonText: "Button Text",
    email: "abhishek6675@gmail.com",
    phone: "",
  },
  {
    id: 2,
    imgPath: "/Assets/Images/JoseLuisAmbite.jpeg",
    name: "Jose-Luis Ambite",
    text: "My core expertise is on information integration, including query rewriting under constrains, learning schema mappings, and entity linkage. I have research interests in databases, knowledge representation, semantic search, semantic web, scientific workflows, federated learning, and biomedical informatics. I have worked on a variety of application domains ranging from e-government to intelligence gathering, to mission planning, to transportation engineering, to geospatial data integration, under funding from DARPA, NSF, NIH, and other agencies. My recent research focus has been on integration and analysis of biomedical and genetic data.",
    buttonLink: "",
    buttonText: "Button Text",
    email: "ambite@ads.isi.edu",
    phone: "310-448-8472",
  },
  {
    id: 3,
    imgPath: "/Assets/Images/DanielMarcus.jpeg",
    name: "Daniel Marcus",
    text: "Dr. Marcus’ laboratory builds imaging informatics and analysis tools, with a particular focus on neuroimaging. The laboratory has developed the XNAT imaging informatics platform (www.xnat.org), open source software used in facilities around the world to manage and share neuroimaging and related data. Dr. Marcus directs a number of service cores at the University, including for the Alzheimer’s Disease Research Center, the Intellectual Developmental Disabilities Research Center, and NINDS Center Core for Brain Imaging. He’s also an investigator in several NIH-backed initiatives to develop a national informatics infrastructure, including the Biomedical Informatics Research Network (BIRN), the National Alliance for Medical Image Computing (NAMIC), and Informatics for Integrating Biology and the Bedside (I2B2).",
    buttonLink:
      "https://www.mir.wustl.edu/research/research-support-facilities/neuroimaging-informatics-analysis-center-niac/our-staff/niac-staff-dan-marcus",
    buttonText: "Button Text",
    email: "dmarcus@wustl.edu",
    phone: "",
  },
  {
    id: 4,
    imgPath: "/Assets/Images/WillHorton.jpeg",
    name: "Will Horton",
    text: "This is a quick bio of Will",
    buttonLink: "https://www.isi.edu/~ambite/",
    buttonText: "Button Text",
    email: "hortonw@wustl.edu",
    phone: "",
  },
  {
    id: 5,
    imgPath: "/Assets/Images/HowardLander.png",
    name: "Howard Lander",
    text: `Mr. Lander joined the Renaissance Computing Institute in April 2005 and has worked extensively here with the application of Cyber Science and Engineering to data intensive scientific disciplines including neuroscience, physical oceanography and evolutionary biology. In particular Mr. Lander was an active participant in both the Southeastern Universities Research Association (SURA) Coastal Ocean Observing and Prediction Program (SCOOP) and North Carolina Flood Mapping (NCFMP) projects. Mr. Lander is currently a Co-PI on the NeuroBridge, a NIDA funded project whose goals are to increase the discoverability of relevant data in the neurosciences. From 2012 to 2015, Mr. Lander was a Co-PI on the DataBridge project, an NSF funded research effort investigating the use of sociometric techniques to produce a Facebook like social network for data sets from the long tail of science. From 2016 to 2017 Mr. Lander was a CO-PI on the DataBridge for NeuroScience project, an NSF funded follow-up to the DataBridge. As part of this project, Mr. Lander chaired the INCF 2018 Workshop on Advanced Data Discovery for Neuroscience which occurred at INCF’s Neuroinformatics 2018 meeting.`,
    buttonLink: "",
    buttonText: "Button Text",
    email: "howard@renci.org",
    phone: "",
  },
  {
    id: 6,
    imgPath: "/Assets/Images/JanineBijsterbosch.jpeg",
    name: "Janine Bijsterbosch",
    text: "This is a quick bio of Janine",
    buttonLink:
      "https://sites.wustl.edu/personomics/people/principal-investigator/",
    buttonText: "Button Text",
    email: "janine.bijsterbosch@wustl.edu",
    phone: "314-273-8103",
  },
  {
    id: 7,
    imgPath: "/Assets/Images/RickHerrick.jpeg",
    name: "Rick Herrick",
    text: "Raised in the Deep South (Tampa), Rick was moved to California by the U.S.A.F., where he adapted well to the mild weather. He graduated from U.C. Santa Cruz (go Slugs, 1991 National Champion in Ultimate Frisbee!) with a degree in Politics. He met his future wife while attending Avocado Sundae shows. They got married, had a daughter, moved to Long Beach, CA, hated the L.A. traffic, and now reside in Webster Groves, MO. Rick drives a Jeep Wrangler, plays guitar (Paul Reed Smith, Stratocaster, Yamaha acoustic) and mandolin (Flatiron A-style), has two dogs (Frankie, who’s a girl, and Shaggy, who’s not), a cat (Oliver), and favors the “ribs” food group. Rick does Java and .NET, with a strong emphasis on internal plumbing.",
    buttonLink: "",
    buttonText: "Button Text",
    email: "jrherrick@wustl.edu",
    phone: "",
  },
  {
    id: 8,
    imgPath: "/Assets/Images/JessicaTurner.jpeg",
    name: "Jessica Turner",
    text: `I am investigating the genetics underlying brain structure changes in chronic schizophrenia, as well as the genetic influences on functional and structural neuroimaging measures in other neuropsychological diseases. The first research program includes the extraction and understanding of multivariate patterns within the combined methods of neuroimaging and genetics, as applied to clinical populations. I primarily use independent component analysis (ICA), as well as its extensions into multi-modal datasets.  My background is in psychophysics and MRI methodology as applied to a range of clinical populations, with secondary experience in the analysis of genome wide scan (GWS) data. I collaborate closely with psychiatrists, computer scientists, geneticists and neuroscientists in research on the genetics of brain function and dysfunction. `,
    buttonLink: "",
    buttonText: "Button Text",
    email: "jturner63@gsu.edu",
    phone: "404-413-6211",
  },
  {
    id: 9,
    imgPath: "",
    name: "Name?",
    text: "This is a quick bio ",
    buttonLink: "",
    buttonText: "Button Text",
    email: "kogan.33@osu.edu",
    phone: "",
  },
  {
    id: 10,
    imgPath: "/Assets/Images/LeiWang.jpeg",
    name: "Lei Wang, PhD",
    text: "This is a quick bio of Lei Wang",
    buttonLink:
      "https://medicine.osu.edu/find-faculty/clinical/psychiatry-and-behavioral-health/lei-wang-phd",
    buttonText: "Button Text",
    email: "lei.wang@osumc.edu",
    phone: "",
  },
  {
    id: 11,
    imgPath: "",
    name: "Stephen M. Moore",
    text: "This is a quick bio of Stephen M. Moore",
    buttonLink: "https://icts.wustl.edu/people/stephen-m-moore-ms/",
    buttonText: "Button Text",
    email: "moore.stephen.m@wustl.edu",
    phone: "",
  },
  {
    id: 12,
    imgPath: "",
    name: "name?",
    text: "This is a quick bio",
    buttonLink: "",
    buttonText: "Button Text",
    email: "mturner46@gsu.edu",
    phone: "",
  },
  {
    id: 13,
    imgPath: "",
    name: "name?",
    text: "This is a quick bio",
    buttonLink: "",
    buttonText: "Button Text",
    email: "plenzini@wustl.edu",
    phone: "",
  },
  {
    id: 14,
    imgPath: "/Assets/Images/SatyaSahoo.jpeg",
    name: "Satya Sahoo, PhD",
    text: "Dr. Satya S. Sahoo’s research is focused on developing new data and metadata representation and analysis techniques for biomedical and healthcare research. Dr. Sahoo has led the development of four ontologies in multiple domains, including one for complex neurological disorders, such as epilepsy. Using the Epilepsy and Seizure Ontology (EpSO), his group is focused on the analysis of brain connectivity data for characterizing epilepsy seizure networks using novel computational approaches. To address the challenges of data quality and scientific reproducibility in data-driven biomedical research, Dr. Sahoo and his group are also developing a comprehensive framework for provenance metadata using provenance ontology and text mining of all 1.6 million full-text published articles from NCBI PubMed Central.",
    buttonLink:
      "https://case.edu/medicine/pqhs/about/people/primary-faculty/satya-sahoo-phd",
    buttonText: "Button Text",
    email: "satya.sahoo@case.edu",
    phone: "216-368-3286",
  },
  {
    id: 15,
    imgPath: "/Assets/Images/ArcotRajasekar.jpeg",
    name: "Arcot Rajasekar",
    text: "Arcot Rajasekar is chief scientist for data grid technologies at RENCI and a leader of the DICE team in UNC’s School of Information and Library Science (SILS). He was the director of the Data Grids Technology Group at the San Diego Supercomputer Center (SDSC) and is the lead designer of the integrated Rule-Oriented Data System (iRods), a data grid system and open-source approach to managing digital data. Rajasekar leads data grid initiatives that involve both RENCI and SILS. He holds a Ph.D. in computer science from the University of Maryland and has multiple publications in the areas of logic programming, deductive databases, data grids, digital library, and persistent archives. He is also a co-author of the book, Foundations of Disjunctive Logic Programming.",
    buttonLink: "",
    buttonText: "Button Text",
    email: "sekar@renci.org",
    phone: "",
  },
  {
    id: 16,
    imgPath: "/Assets/Images/YueWang.jpeg",
    name: "Yue (Ray) Wang",
    text: "Dr. Yue Wang is interested in text data mining and machine learning with applications in health informatics. His dissertation focuses on developing principled interactive machine learning approaches that reduce human analysts' information processing workload. His work is motivated by and applied to various data mining problems, including high-recall information retrieval, clinical natural language processing, and qualitative content analysis. He publishes in both computer science and health informatics venues, including KDD, SIGIR, WSDM, and JAMIA. He and his collaborators won first place in the TREC 2013 Microblog Track, and he received the Best Paper Award and Outstanding Reviewer Award in WSDM 2016.",
    buttonLink: "https://sils.unc.edu/people/faculty/profiles/Yue-Wang",
    buttonText: "Button Text",
    email: "wangyue@email.unc.edu",
    phone: "919-966-5042",
  },
  {
    id: 17,
    imgPath: "",
    name: "name?",
    text: "quick bio",
    buttonLink: "",
    buttonText: "Button Text",
    email: "xuhao@renci.org",
    phone: "",
  },
];

export default CardData;