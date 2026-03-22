import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Project2.css";

const project2 = [

  {
    title: "Gaursons",
    bhk: "2 & 3 BHK Apartments",
    location: "Jaypee Greens, Pari Chowk, Greater Noida",
    price: "Starting from Rs. XX Lakhs",
    rera: "UPRERAPRJZZZZZZ",
    img: "Gaurs 2.jpeg",
    link: "/gaursons"
  },
  {
    title: "Sobha",
    bhk: "2 & 3 BHK Apartments",
    location: "Sector 36, Greater Noida",
    price: "Starting from Rs. XX Lakhs",
    rera: "UPRERAPRJ250823",
    img: "/Sobha 1.jpeg",
    link: "/civitech-ska-orion"
  }
];

const Project2 = () => {
  return (
    <>
      <Navbar forceScrolled={true} />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>GREATER NOIDA PROJECTS</h1>
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <span>GREATER NOIDA PROJECTS</span>
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="projects-section">
        <div className="projects-container">
          {project2.map((project, index) => (
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
                   <a
                    href={`https://wa.me/919911093426?text=Hi,%20I%20am%20interested%20in%20${project.title}`}
                    className="btn enquiry-btn"
                    target="_blank"
                  >
                    Enquiry Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919911093426"
        className="whatsapp-btn"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
      <ScrollTopButton />
    </>
  );
};

export default Project2;