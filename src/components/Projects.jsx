import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css";
import { Link } from "react-router-dom";

const projects = [
{
title:"Project 1",
desc:"Real estate marketing campaign with high ROI.",
img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e",
link:"/project1"
},
{
title:"Project 2",
desc:"Social media growth strategy for a startup.",
img:"https://images.unsplash.com/photo-1492724441997-5dc865305da7",
link:"/project2"
},
{
title:"Project 3",
desc:"Complete website development & SEO optimization.",
img:"https://images.unsplash.com/photo-1551434678-e076c223a692",
link:"/project3"
}
];

const Projects = () => {

return(

<>

<Navbar forceScrolled={true}/>

{/* HERO */}

<section className="projects-hero">

<h1>Our Projects</h1>

<p>Explore some of our successful digital marketing projects.</p>

</section>


{/* PROJECTS GRID */}

<section className="projects-section">

<div className="projects-container">

{projects.map((project,index)=>(

<div className="project-card" key={index}>

<img src={project.img} alt={project.title}/>

<div className="project-info">

<h3>{project.title}</h3>

<p>{project.desc}</p>

<Link to={project.link} className="project-btn">
View Project
</Link>

</div>

</div>

))}

</div>

</section>

 {/* WhatsApp Icon */}
            <a
                href="https://wa.me/917082429925"
                className="whatsapp-btn"
                target="_blank"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
<ScrollTopButton/>

<Footer/>

</>

)

}

export default Projects