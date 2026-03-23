import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./ProjectDetails.css";
const ProjectDetails = () => {

    // URL se slug milega
    const { slug } = useParams();

    // correct project find karo
    const project = projects.find(p => p.slug === slug);

    // agar project nahi mila
    if (!project) {
        return <h2 style={{ padding: "100px" }}>Project Not Found</h2>;
    }

    return (
        <>
            <Navbar forceScrolled={true} />

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <p className="breadcrumb">
                        <Link to="/">Home</Link>
                    </p>
                </div>
            </section>

            <div className="project-details-wrapper">

                <h1>{project.title}</h1>
                <p>{project.location}</p>

                {/* MAIN IMAGE */}
                {project.gallery?.length > 1 && (
                    <div className="gallery-grid">
                        {project.gallery.map((img, i) => (
                            <img key={i} src={img} alt={`gallery-${i}`} />
                        ))}
                    </div>
                )}


                {/* DESCRIPTION */}
                <h2>Description</h2>
                <p>{project.description}</p>

                {/* OVERVIEW */}
                <h2>Project Overview</h2>
                <ul>
                    {project.projectOverview?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                {/* FLOOR PLAN */}
                <h2>Floor Plans & Configurations</h2>
                <ul>
                    {project.floorPlans?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                {/* AMENITIES */}
                <h2>Amenities</h2>
                <ul>
                    {project.amenities?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                {/* MASTER PLAN */}
                <h2>Master Plan Highlights</h2>
                <ul>
                    {project.masterPlan?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                {/* LOCATION */}
                <h2>Location Advantages</h2>
                <ul>
                    {project.locationAdvantages?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                {/* OTHER FEATURES */}
                <h2>Other Features</h2>
                <ul>
                    {project.otherFeatures?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

            </div>
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

export default ProjectDetails;