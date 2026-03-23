import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import "./Project1.css";

const project1 = [

    {
        title: "Eldeco Group",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 150, Noida",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "/Eldeco Group4.jpg.jpeg",
        link: "/projects/civitech-eldeco"
    },
    {
        title: "Nirala Estate",
        bhk: "2 & 3 BHK Apartments",
        location: "Sector 78, Noida",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJYYYYYY",
        img: "/Nirala Estate 2.jpg.jpeg",
        link: "/projects/civitech-nirala"
    },
    {
        title: "SKA Orion",
        bhk: "2 & 3 BHK Apartments",
        location: "GH-01A/2, Sector 143B, Noida",
        price: "Starting from Rs. XX Lakhs",
        rera: "UPRERAPRJ186008",
        img: "/SKA Orion4.webp",
        link: "/projects/civitech-ska-orion"
    }
];

const Project1 = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <>
            <Navbar forceScrolled={true} />

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>NOIDA PROJECTS</h1>
                    <p className="breadcrumb">
                        <Link to="/">Home</Link> / <span>NOIDA PROJECTS</span>
                    </p>
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="projects-section">
                <div className="projects-container">
                    {project1.map((project, index) => (
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

export default Project1;