import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhyChooseUs from "../components/WhyChooseUs";
import "./Careers.css";

const Careers = () => {
  return (
    <>

      {/* Navbar */}
      <Navbar forceScrolled={true} />

      <section className="careers">

        <div className="careers-container">

          <h1>Careers</h1>

          <p className="careers-desc">
            Join our growing team and build your future with us. 
            We are always looking for talented and passionate people 
            who want to make a difference.
          </p>

          <div className="job-cards">

            <div className="job-card">
              <h3>SEO Specialist</h3>
              <p>Experience: 2+ Years</p>
              <button>Apply Now</button>
            </div>

            <div className="job-card">
              <h3>Social Media Manager</h3>
              <p>Experience: 1+ Years</p>
              <button>Apply Now</button>
            </div>

            <div className="job-card">
              <h3>Web Developer</h3>
              <p>Experience: 3+ Years</p>
              <button>Apply Now</button>
            </div>

          </div>

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
      <ScrollTopButton />
        <WhyChooseUs />
      <Footer />

    </>
  );
};

export default Careers;