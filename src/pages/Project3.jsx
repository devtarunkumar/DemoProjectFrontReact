import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import "./Project3.css";

const project3 = [

    {
        title: "Arihant Adobe",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 10, Greater Noida West",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJXXXXXX",
        img: "/Arihant 1.webp",
        link: "/projects/arihant-adobe"
    },
    {
        title: "Fusion Rivulet",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 12, Greater Noida West",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "/Fusion 1.jpg.jpeg",
        link: "/projects/fusion-rivulet"
    },
    {
        title: "Mahagun Mylagoon",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 12, Greater Noida West",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJZZZZZZ",
        img: "/Mahagun 1.jpg.jpeg",
        link: "/projects/mahagun-mylagoon"
    },
    {
        title: "Civitech",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 1, Noida Extension",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "/Civitech-1.jpg.jpeg",
        link: "/projects/civitech"
    },
    {
        title: "Godrej Majesty",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 12, Greater Noida West",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "Godrej.jfif",
        link: "/projects/godrej-majesty"
    },
    {
        title: "Nirala World",
        bhk: "2 & 3 BHK Apartments",
        location: "GH-04, Techzone IV, Noida Extension",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "/Nirala Estate 5.jpg",
        link: "/projects/nirala-world"
    },
    {
        title: "AIGN Royal",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 1, Greater Noida West",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "/Aigin 2.jpg.jpeg",
        link: "/projects/aign-royal"
    },
    {
        title: "Hawelia",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 1, Greater Noida West",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "/Hawelia 1.jpg.jpeg",
        link: "/projects/hawelia"
    },
    {
        title: "CRC Group",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 12, Greater Noida West",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "/CRC Joyous3.webp",
        link: "/projects/crc-group"
    },
    {
        title: "CRC Joyous (CRC Group)",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 12, Greater Noida West",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "/Crc.jpg",
        link: "/projects/crc-joyous"
    },
    {
        title: "Gaursons (NBCC)",
        bhk: "2 & 3 BHK Apartments",
        location: "Techzone 4, Noida Extension",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJZZZZZZ",
        img: "Arihant 3.jpg",
        link: "/projects/gaursons-nbcc"
    },
    {
        title: "VVIP Addresses",
        bhk: "2 & 3 BHK Apartments",
        location: "Jaypee Greens, Pari Chowk, Greater Noida",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJZZZZZZ",
        img: "Gaurs 2.jpeg",
        link: "/projects/gaursons"
    }
];

const Project3 = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <>
            <Navbar forceScrolled={true} />

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>GREATER NOIDA WEST PROJECTS</h1>
                    <p className="breadcrumb">
                        <Link to="/">Home</Link> / <span>GREATER NOIDA WEST PROJECTS</span>
                    </p>
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="projects-section">
                <div className="projects-container">
                    {project3.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.img} alt={project.title} />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p><strong>{project.bhk}</strong></p>
                                <p>{project.location}</p>
                                <p>{project.price}</p>
                                <p>RERA No.: {project.rera}</p>
                                <div className="project-buttons">
                                    <Link to={project.link} className="btn details-btn">
                                        View Details
                                    </Link>
                                    <button
                                        className="btn enquiry-btn"
                                        onClick={() => {
                                            setSelectedProject(project);
                                            setShowForm(true);
                                        }}
                                    >
                                        Enquiry Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ENQUIRY POPUP */}
            {showForm && (
                <EnquiryForm
                    project={selectedProject}
                    closeForm={() => setShowForm(false)}
                />
            )}

            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/917042192802"
                className="whatsapp-btn"
                target="_blank"
            >
                <FaWhatsapp />
            </a>
            <ScrollTopButton />
        </>
    );
};

export default Project3;