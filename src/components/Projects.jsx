import { useState } from "react";
import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";
import EnquiryForm from "../components/EnquiryForm";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import "./Projects.css";




const Projects = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <>
            <Navbar forceScrolled={true} />

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>ALL PROJECTS</h1>
                    <p className="breadcrumb">
                        <Link to="/">Home</Link> / <span>ALL PROJECTS</span>
                    </p>
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="projects-section">
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.img} alt={project.title} />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p><strong>{project.bhk}</strong></p>
                                <p>{project.location}</p>
                                <p>{project.price}</p>
                                <p>RERA No.: {project.rera}</p>
                                <div className="project-buttons">
                                   <Link to={`/projects/${project.slug}`} className="btn details-btn">
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

export default Projects;