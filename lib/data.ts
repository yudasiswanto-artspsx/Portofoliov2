import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import Picture1 from "@/public/Picture1.jpg";
import Picture2 from "@/public/Picture2.jpg";
import SPPR from "@/public/SPPR.png";
import TP from "@/public/2.png"
import LST from "@/public/3.png"
import PL from "@/public/Peta Penggunaan Lahan Kota Malang_Yuda Siswanto.jpg"
import TH from "@/public/Peta Jenis Tanah Kota Malang_Yuda Siswanto.jpg"
import GEO from "@/public/Peta Geologi Kota Malang_Yuda Siswanto.jpg"
import GMO from "@/public/Peta Geomorfologi Kota Malang_Yuda Siswanto.jpg"
import KLG from "@/public/Peta Kerawanan Longsor Wilayah Jabung_Yuda Siswanto-min.jpg"
import LNF from "@/public/Peta Landform Kecamatan Jabung Kab Malang_Yuda Siswanto-min.jpg"
import TORA from "@/public/Pendataan TORA.jpg"
import VLD from "@/public/Validasi Data Calon Penerima Redistribusi Tanah.jpg"
import RDS from "@/public/Penelitian Lapang Redistribusi Tanah.jpg"
import STF from "@/public/Pembagian Sertifikat Redistribusi Tanah.jpg"
import PLT from "@/public/Plot Titik Point Perkebunan PTPN.jpg"
import PLT1 from "@/public/PLOT TITIK POINT PT PP Jember Indonesia.jpg"
import PORTO from "@/public/webs.jpeg"
import KAI from "@/public/6.png"
import WMR from "@/public/7.png"
import BRAN from "@/public/5.png"
import DEO from "@/public/bps.jpg"
import PBB from "@/public/TimePhoto_20221005_105122.jpg"
import GIS from "@/public/GIS.png"
import du from "@/public/du.jpg"
import du1 from "@/public/du1.jpg"
import AINTAPP from "@/public/AINTAPP.jpg"
import ti from "@/public/ti.jpg"
import AIB from "@/public/AIB.jpg"
import DESG from "@/public/DESG.jpg"
import MAF from "@/public/MAF.jpg"
import FoAAs from "@/public/FoAAs.jpg"
import FoGA from "@/public/FoGA.jpg"
import FAC from "@/public/FAC.jpg"
import FoML from "@/public/FoML.jpg"
import MAAFAO from "@/public/MAAFAO.jpg"
import MAAF from "@/public/MAAF.jpg"
import MAAFCV from "@/public/MAAFCV.jpg"
import MAAFNLP from "@/public/MAAFNLP.jpg"
import MAAFDIaKM from "@/public/MAAFDIaKM.jpg"
import MAAFGA from "@/public/MAAFGA.jpg"
import FoAAoA from "@/public/FoAAoA.jpg"
import REGS from "@/public/REGS.jpg"
import ALI from "@/public/ALI.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "State University of Malang - Bachelor of Science in Geography",
    location: "Malang, Indonesia",
    description:
      "I graduated after 4 years of studying from State University of Malang. Passed with a GPA of 3.37/4.00",
    icon: React.createElement(LuGraduationCap),
    date: "August 2016 - June 2021",
  },
  {
    title: "Inspector | PT SUCOFINDO",
    location: "Gresik, Indonesia",
    description:
      "Conducting a professional verification of mineral product exports from PT Freeport Indonesia at the Freeport Indonesia Smelter.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2025 - Until Now",
  },
  {
    title: "Individual Consultant | The Ministry of Agrarian Affairs and Spatial Planning/National Land Agency",
    location: "Jember, Indonesia",
    description:
      "As an Individual Consultant for the GTRA Team in Jember Regency, I supported the implementation of the Agrarian Reform program by conducting both technical and administrative tasks including provided technical and field support for land redistribution programs, including data collection, spatial analysis (using ArcGIS 10.8), and coordination with local government (OPD). Assisted in TORA land inventory, mapping (PPTPKH), field surveys, and digital certificate distribution. Prepared TORA reports and monitored monthly progress for the GTRA team in Jember",
    icon: React.createElement(CgWorkAlt),
    date: "February 2024 - Desember 2024",
  },
  {
    title: "GIS Operator Asisstant | PT Reka Desindo Mandiri",
    location: "Jakarta, Indonesia",
    description:
      "Assisted in coordinating and creating medium-term matrix maps by generating spatial coordinate data from Sumatra spatial plan (RTR KSN) and SPPR ATR/BPN guidelines. Collaborated with planners to prepare and analyze matrix 3.1 maps, supporting the synchronization of space utilization programs for Sumatra Island under the Ministry of ATR/BPN.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2023 - November 2023",
  },
  {
    title: "Data Entry Operator | Statistics Indonesia (BPS) Pasuruan Regency",
    location: "Pasuruan, Indonesia",
    description:
      "Entered and verified 1,700 K-document records into the BPS Pasuruan server. Coordinated with supervisors to correct data inconsistencies and cleaned up erroneous records by reviewing family information such as missing NIK, lost KK, or incomplete birth dates.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2023 - March 2023",
  },
  {
    title: "PBB-P2 Data Update Officer | CV CITIPLAN",
    location: "Semarang Regency, Indonesia",
    description:
      "Coordinated with village heads to update taxpayer data, including data corrections, transfers, and deletions. Verified block maps with local officials and processed survey results for entry into Semarang Regency BKUD system. Created maps of updated areas using AutoCAD Maps 3D.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2022 - Desember 2022",
  },
  {
    title: "Surveyor & Drafter | CV Wahyu Makhutoromo",
    location: "Pasuruan Regency, Indonesia",
    description:
      "Collaborated with stakeholders to identify plantation land boundaries in forest areas. Collected and coded boundary coordinates using Avenza Maps and ArcGIS 10.5 for accurate land measurement and mapping.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - April 2022",
  },
  {
    title: "Surveyor & Drafter | PT Geomosaic Indonesia",
    location: "Surabaya, Indonesia",
    description:
      "Measured railway tracks using Geodetic GPS, recording coordinate points every kilometer over 8 days. Created and mapped railway lines based on field data using AutoCAD Map3D.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2021 - October 2021",
  },
  {
    title: "Internship Student | National Institute of Aeronautics and Space (LAPAN)",
    location: "East Jakarta, Indonesia",
    description:
      "Processed and analyzed flood potential areas in Indonesia by integrating multiple datasets using matrix methods. Monitored and validated flood event data from BNPB with LAPAN’s flood potential data using ArcGIS and Excel over a three-month period.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2019 - October 2019",
  },
] as const;

export const projectsData = [
  {
    title: "ATR/BPN (GTRA)",
    description:
      "One of the activities of the GTRA is the development of maps for forest area management planning.",
    tags: ["Mapping", "ArcGIS", "Survey", "Penyelesaian Penguasaan Tanah Penataan Kawasan Hutan"],
    imageUrl: Picture1,
    pictLink: 'https://drive.google.com/file/d/1KwASmHV3LcBVymzIVE3mQLeN4pF5sZt0/view?usp=sharing',
  },
  {
    title: "ATR/BPN (PTM)",
    description:
      "This task is also part of the GTRA activities, and I supported my coworker in developing an economic distribution map for PTM.",
    tags: ["Mapping", "ArcGIS", "Survey", "Economy"],
    imageUrl: Picture2,
    pictLink: 'https://drive.google.com/file/d/1RYNFpGaXfo3bi6vvA9T068ZOa_KtnFim/view?usp=sharing',
  },
  {
    title: "ATR/BPN (SPPR)",
    description:
      "Development programs outlined in the spatial planning (RTR) with other sectoral and regional programs.",
    tags: ["Plotting", "Spatial", "ArcGIS", "Sinkronisasi Program Pemanfaatan Ruang"],
    imageUrl: SPPR,
    pictLink: '#',
  },
  {
    title: "Land Cover Map",
    description:
      "The project is the outcome of my thesis research on land cover in Malang City.",
    tags: ["ArcGIS", "Land Cover", "GEE", "Landsat 7 & 8 OLI", "Support Vector Machine"],
    imageUrl: TP,
    pictLink: 'https://drive.google.com/file/d/10eHDVFn9deimxsY4oV65KH0YMN0RUJQL/view?usp=sharing',
  },
  {
    title: "LST Map",
    description:
      "The project is the outcome of my thesis research on land surface temperature in Malang City.",
    tags: ["ArcGIS", "LST", "GEE", "Landsat 5, 7 & 8 ToA", "Survey"],
    imageUrl: LST,
    pictLink: 'https://drive.google.com/file/d/17GAVfOyF5LanOZtsLe2YBeWv-uNOfVib/view?usp=sharing',
  },
  {
    title: "Land Use Map",
    description:
      "This map also constitutes a complementary output to support the analytical component of my thesis research in Malang City.",
    tags: ["ArcGIS", "Land Use", "Classification",],
    imageUrl: PL,
    pictLink: 'https://drive.google.com/file/d/18YH11VJliejs6LKe-imdOim2cKWoM8QU/view?usp=sharing',
  },
  {
    title: "Soil Classification Map",
    description:
      "This map also constitutes a complementary output to support the analytical component of my thesis research in Malang City.",
    tags: ["ArcGIS", "Soil", "Classification"],
    imageUrl: TH,
    pictLink: 'https://drive.google.com/file/d/175ycCvXv54xM3jmzULCZ7xf-3jUguCdP/view?usp=sharing',
  },
  {
    title: "Geology Map",
    description:
      "This map also constitutes a complementary output to support the analytical component of my thesis research in Malang City.",
    tags: ["ArcGIS", "Geology", "DEM Alos Palsar"],
    imageUrl: GEO,
    pictLink: 'https://drive.google.com/file/d/1TcVvnJGaqNKPJFwrYFD6UjoG6_R3fyhz/view?usp=sharing',
  },
  {
    title: "Geomorphology Map",
    description:
      "This map also constitutes a complementary output to support the analytical component of my thesis research in Malang City.",
    tags: ["ArcGIS", "Geomorphology", "Topography"],
    imageUrl: GMO,
    pictLink: 'https://drive.google.com/file/d/1T4HDOT3ARlyFJGZKAr9HDLceqREO3_JR/view?usp=sharing',
  },
  {
    title: "Landslide Vulnerability Map",
    description:
      "The project is a group assignment for a course that involves conducting research on landslide vulnerability in the study area of Malang.",
    tags: ["ArcGIS", "Landslide", "Hazard", "Land Use", "Slope", "Research"],
    imageUrl: KLG,
    pictLink: 'https://drive.google.com/file/d/1N9pG8wwoW6uTPzLJvkC07H6ayS1zJJNB/view?usp=sharing',
  },
  {
    title: "Geomorphology Map",
    description:
      "One of the maps used for landslide vulnerability analysis in the Malang Region Study.",
    tags: ["ArcGIS", "Geomorphology", "Topography", "Research"],
    imageUrl: LNF,
    pictLink: 'https://drive.google.com/file/d/1NxwzcKSEYyljBtapJ_3CdxSUgl9YdM2x/view?usp=sharing',
  },
  {
    title: "Portfolio v1",
    description:
      "My first portfolio website was built using HTML, Bootstrap, and CSS by following content from YouTube tutorials.",
    tags: ["HTML", "Bootstrap", "Git", "CSS"],
    imageUrl: PORTO,
    pictLink: 'https://yudasiswanto-artspsx.github.io/Portofolio/',
  },
  {
    title: "TORA Data Survey",
    description:
      "TORA Inventory for Resolving Land Tenure in the Context of Forest Area Structuring (PPTPKH) under the GTRA Program.",
    tags: ["Survey", "Agraria", "Tanah Objek Reforma Agraria"],
    imageUrl: TORA,
    pictLink: '',
  },
  {
    title: "Data Validation",
    description:
      "Validation of Land Redistribution Beneficiaries and Their Land Parcels in Kaliwining Village, Rambipuji, with Village Officials.",
    tags: ["Data", "Excel", "AutoCAD Map 3D"],
    imageUrl: VLD,
    pictLink: '',
  },
  {
    title: "Survey Land Redistribution",
    description:
      "Field Survey of Land Redistribution in Kaliwining Village, in Collaboration with Regional Government Agencies and Local Village Officials.",
    tags: ["Survey", "Land Redistribution", "ATR/BPN"],
    imageUrl: RDS,
    pictLink: '#',
  },
  {
    title: "E-Certificate Redist",
    description:
      "Distribution of E-Certificate for Land Redistribution in Kaliwining Village, Jember Regency.",
    tags: ["E-Certificate", "Redistribution", "ATR/BPN"],
    imageUrl: STF,
    pictLink: '',
  },
  {
    title: "Coordinates of Plantation Land",
    description:
      "Plot the plantation land points owned by PTPN Jember for technical land assessment purposes.",
    tags: ["GPS", "Coordinate", "Pertek"],
    imageUrl: PLT,
    pictLink: '',
  },
  {
    title: "Coordinates of Plantation Land",
    description:
      "Map the coordinates of plantation land owned by PT PP Jember Indonesia Widodaren for technical land assessment purposes.",
    tags: ["GPS", "Coordinate", "Pertek"],
    imageUrl: PLT1,
    pictLink: '',
  },
  {
    title: "Data Entry Operator",
    description:
      "Performed data entry of K-Documents, totalling 1.700 documents, into the server of BPS Pasuruan Regency.",
    tags: ["Data Entry", "BPS", "Pasuruan"],
    imageUrl: DEO,
    pictLink: '',
  },
  {
    title: "PBB-P2",
    description:
      "Conduct the collection of taxpayer data, tax object data, and land parcel maps for PBB-P2 in Semarang Regency.",
    tags: ["Survey", "PBB-P2", "Tax"],
    imageUrl: PBB,
    pictLink: '',
  },
  {
    title: "Survey & Drafter",
    description:
      "Field survey for measuring boundary coordinate points of farmer's plantation land located within the Perhutani-owned forest area of Mount Arjuna.",
    tags: ["Survey", "Avenza Maps", "Coordinate"],
    imageUrl: WMR,
    pictLink: '',
  },
  {
    title: "Survey & Drafter",
    description:
      "A field survey was conducted to collect data on assets owned by PT KAI, along with measurements of the railway tracks, to be processed into a railway route map for PT KAI.",
    tags: ["Survey", "GNSS RTK", "KAI Railway"],
    imageUrl: KAI,
    pictLink: '',
  },
  {
    title: "Measuring The flow of the Brantas River",
    description:
      "Assisted a colleague in measuring the flow velocity and water volume of the Brantas River watershed in Batu City.",
    tags: ["Survey", "Water Volume", "Flow Brantas River"],
    imageUrl: BRAN,
    pictLink: '',
  },
] as const;

export const certificatesData = [
  {
    title: "Geographic Information System",
    description:
      "It covers digital mapping, spatial data processing, geospatial analysis, and the application of GIS tools for planning and decision-making..",
    hastags: ["ArcGIS", "Operator", "ITS"],
    imageUrl: GIS,
    certifLink: 'https://drive.google.com/file/d/1ENGQBgw2HbncjwN3awmJzuqbcO89ZbeG/view?usp=drive_link',
  },
  {
    title: "AI Advanced: App Track",
    description:
      "The training covers advanced topics such as custom machine learning model development, AI pipeline management, end-to-end AI deployment, and performance optimization of AI-based applications.",
    hastags: ["AI", "PROA", "Microsoft"],
    imageUrl: du,
    certifLink: 'https://drive.google.com/file/d/1WX3OZ6rm1Ai2bDO6O9laRkUtGDbhfrIT/view?usp=drive_link',
  },
  {
    title: "Live Session: Advanced Module and Use Case",
    description:
      "Gained in-depth understanding and practical skills relevant to Microsoft technologies, supporting innovation across various sectors.",
    hastags: ["AI", "PROA", "Microsoft"],
    imageUrl: du1,
    certifLink: 'https://drive.google.com/file/d/1iRG2PcbFqOSEYAXj45qlN4Y-10nW7kwL/view?usp=drive_link',
  },
  {
    title: "AI Intermediate: App Track",
    description:
      "Learn how to apply AI in real-world applications, including the use of Azure Cognitive Services, Azure Machine Learning, and integration with AI APIs.",
    hastags: ["AI", "PROA", "Microsoft"],
    imageUrl: AINTAPP,
    certifLink: 'https://drive.google.com/file/d/1I3PJFJoFtSJn6rh0aTUbb6jrWzf52by8/view?usp=sharing',
  },
  {
    title: "Live Session: intermediate Module and Use Case",
    description:
      "Gained in-depth understanding and practical skills relevant to Microsoft technologies, supporting innovation across various sectors.",
    hastags: ["AI", "PROA", "Microsoft"],
    imageUrl: ti,
    certifLink: 'https://drive.google.com/file/d/1kyJ_k8YwfnPOT4QxEJXEsK2K-QB936HJ/view?usp=drive_link',
  },
  {
    title: "AI Beginner",
    description:
      "Learn the basics of AI, including machine learning, computer vision, and natural language processing, as well as how to use Azure services like Azure Machine Learning and Cognitive Services.",
    hastags: ["AI", "PROA", "Microsoft"],
    imageUrl: AIB,
    certifLink: 'https://drive.google.com/file/d/1VoJnYak5UMV8JCXkcCXRXRwnbskCDFeM/view?usp=sharing',
  },
  {
    title: "Data Science Azure AI",
    description:
      "It covers the end-to-end process—from data preparation and machine learning model development to deploying models in production using Azure Machine Learning.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: DESG,
    certifLink: 'https://drive.google.com/file/d/1yQHEMzwOAqnSCpIBtCuqXJrLNaElIe05/view?usp=drive_link',
  },
  {
    title: "Microsoft Azure Fundamentals",
    description:
      "The content includes understanding cloud service models (IaaS, PaaS, SaaS), key Azure components such as compute, networking, storage, and security.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: MAF,
    certifLink: 'https://drive.google.com/file/d/1lJeM1KaZrWc_WwZeFymOISNRitMZhnjh/view?usp=drive_link',
  },
  {
    title: "Azure AI Services",
    description:
      "Basic AI concepts and how to use services such as Azure Cognitive Services, Azure Machine Learning, and other AI tools for image recognition, natural language processing, and automated decision-making.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: FoAAs,
    certifLink: 'https://drive.google.com/file/d/1SdZAg7IvYOUF6Vf_58R-v0BtWB_WoBnc/view?usp=drive_link',
  },
  {
    title: "Fundamentals of Generative AI",
    description:
      "Learn how generative models such as GPT (Generative Pre-trained Transformer) work and how this technology is used to generate text, images, audio, and other content.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: FoGA,
    certifLink: 'https://drive.google.com/file/d/1r9Cge4sP6MIONsvfAMEVkUZEUG3X_o74/view?usp=drive_link',
  },
  {
    title: "Fundamentals AI Concepts",
    description:
      "It covers the history and evolution of AI, types of AI, basics of machine learning, and real-world applications of AI in daily life and industry.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: FAC,
    certifLink: 'https://drive.google.com/file/d/1wBWBZtoSgplod6aYzaq5emM-oBKbxXgU/view?usp=drive_link',
  },
  {
    title: "Fundamentals of Machine Learning",
    description:
      "It covers types of machine learning algorithms such as supervised and unsupervised learning, model training processes, model performance evaluation, and real-world applications.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: FoML,
    certifLink: 'https://drive.google.com/file/d/1exT9reZvhLgzFtlujYu4G49ghUP7S_qv/view?usp=drive_link',
  },
  {
    title: "Microsoft Azure AI: AI Overview",
    description:
      "The content covers basic AI concepts, types of AI technologies, and Azure services that support AI solution development.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: MAAFAO,
    certifLink: 'https://drive.google.com/file/d/1thP8eBFgcGjCkM2qwi3c1B_Rxryjmtdl/view?usp=drive_link',
  },
  {
    title: "Microsoft Azure AI Fundamentals",
    description:
      "This training covers AI concepts, machine learning, and various Azure services such as Cognitive Services and Azure Machine Learning.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: MAAF,
    certifLink: 'https://drive.google.com/file/d/1ZEtSzIs-NeORGuNbCyfnbmwG5wBcVlRA/view?usp=drive_link',
  },
  {
    title: "Microsft Azure AI: Computer Vision",
    description:
      "The content includes image and video analysis, object detection, facial recognition, and the use of Azure Cognitive Services to build computer vision-based applications.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: MAAFCV,
    certifLink: 'https://drive.google.com/file/d/1htBohMxNWXIi3I7EM5CsItR8FmNoDJK4/view?usp=drive_link',
  },
  {
    title: "Natural Language Processing",
    description:
      "The content includes text analysis, entity recognition, language translation, and the use of Azure Cognitive Services to build NLP-based applications.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: MAAFNLP,
    certifLink: 'https://drive.google.com/file/d/1ttG5AuuSs-JSq31h35myfvgjeHs--NsK/view?usp=drive_link',
  },
  {
    title: "Document Intelligence and Knowledge Mining",
    description:
      "The course covers document processing, data extraction, intelligent search, and the application of Azure Cognitive Search and AI for knowledge mining.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: MAAFDIaKM,
    certifLink: 'https://drive.google.com/file/d/1acNqT1EqH3bDH080IjSn7nXxZRZrD67r/view?usp=drive_link',
  },
  {
    title: "Microsoft Azure AI: Generative AI",
    description:
      "The content covers the basics of generative technologies such as large language models, how generative AI works, and its applications in generating text, images, and other creative content.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: MAAFGA,
    certifLink: 'https://drive.google.com/file/d/1MZWoOkoLQDAQ2hGwg5jnStT6yD9o1ri-/view?usp=drive_link',
  },
  {
    title: "AI Agents on Azure",
    description:
      "The content includes how AI agents interact with their environment, use AI for task automation, and implement intelligent agents in the cloud leveraging Azure technologies such as Bot Services and Azure Cognitive Services.",
    hastags: ["AI", "Azure", "Microsoft"],
    imageUrl: FoAAoA,
    certifLink: 'https://drive.google.com/file/d/1T0uMWJ0T0fzlhFi6qowJkAWx1pXe8IZT/view?usp=drive_link',
  },
  {
    title: "Certificate of Award Regsosek BPS",
    description:
      "Served as a Data Entry Operator at the Central Bureau of Statistics (BPS), Pasuruan Regency, for the 2023 Socio-Economic Registration (Regsosek) projects.",
    hastags: ["Regsosek", "Data Entry"],
    imageUrl: REGS,
    certifLink: 'https://drive.google.com/file/d/1TviiEv45Hn_uLJLS_kggyGCqhuzslhmb/view?usp=sharing',
  },
  {
    title: "Alibaba Cloud: Big Data Fundamentals",
    description:
      "It covers topics such as big data fundamentals, data processing with MaxCompute, data analysis using DataWorks, and leveraging machine learning tools.",
    hastags: ["Alibaba", "PROA", "Big Data"],
    imageUrl: ALI,
    certifLink: 'https://drive.google.com/file/d/1TviiEv45Hn_uLJLS_kggyGCqhuzslhmb/view?usp=sharing',
  },
] as const;

export const skillsData = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "ArcGIS",
  "AutoCAD",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Artificial Intelligence",
  "Surveyor",
  "Project Management",
  "Teamwork",
  "Problem Solving",
  "Communication",
] as const;
