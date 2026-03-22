import Navbar from "../components/Navbar";
import Team from "../components/Team";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import "./OurTeam.css";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <>

      <Navbar forceScrolled={true} />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Expert & Friendly Team</h1>
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <span>Expert & Friendly Team</span>
          </p>
        </div>
      </section>

      {/* Team Intro Section */}
      <section className="team-intro">
        <div className="team-intro-container">
        <div className="Heads2">
          <h2 className="team-heading">
           <span className="Ex"> Expert & </span> <span className="Ft">Friendly Team</span>
          </h2>

          <p className="team-subtitle">
            The people behind your smooth and secure real estate journey
          </p>
        </div> <br />
          <div className="team-description">
            <p>
              At<span className="Gr">GrowNest Realty,</span> our biggest strength lies in our highly qualified, approachable, and dedicated team. Each team member brings deep industry knowledge, negotiation skills, and a customer-first attitude that makes your property journey smooth and stress-free.
            </p>

            <p>
              From understanding your exact requirements to shortlisting properties, arranging site visits, explaining legal documentation, and assisting in final booking — our team remains your one-stop guide. We don’t push projects — we recommend what’s right for you.
            </p>

            <p>
              Whether you're a family looking for a peaceful neighborhood, an investor seeking high ROI, or someone buying their very first home — we treat your goals as our own. Our team thrives on transparency, professionalism, and long-term client relationships.
            </p>
          </div>

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

      {/* Team Members */}
      <Team />

      <ScrollTopButton />


    </>
  );
};

export default OurTeam;