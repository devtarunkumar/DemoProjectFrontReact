import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <>

      <Navbar forceScrolled={true} />

      {/* Hero Section */}
      <section className="team-hero">

        <div className="team-hero-content">

          <h1>Meet Our Professional Team</h1>

          <p>
            Our experienced team works together to deliver innovative
            digital marketing and real estate solutions that help
            businesses grow faster.
          </p>

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

      <Footer />

    </>
  );
};

export default OurTeam;