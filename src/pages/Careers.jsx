import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import "./Careers.css";
import { FaHome, FaHandshake, FaWallet } from "react-icons/fa";

const Careers = () => {
  return (
    <>
      <Navbar forceScrolled={true} />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>10 YEARS OF EXPERIENCE</h1>
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <span>10 YEARS OF EXPERIENCE</span>
          </p>
        </div>
      </section>

      {/* Careers Main Section: Left Image + Right Text */}
      <section className="careers-main">
        <div className="careers-container">
          <div className="careers-img">
            <img src="/stae.avif" alt="Careers" />
          </div>
          <div className="careers-content">
            <h2 className="premium-heading">
              <span className="light">CELEBRATING </span>
              <span className="highlight">10+ YEARS</span>
              <span className="light"> OF</span>
              <span className="bold">EXCELLENCE</span>
            </h2>
            <p>

              GrowNest Realty has proudly served clients for over a decade, growing into a leading name in the real estate industry. Since our founding, we’ve successfully connected thousands of clients with their ideal residential and commercial properties.

              With 10+ years of hands-on experience in the real estate sector, GrowNest Realty stands as a trusted name for both residential and commercial property solutions. Over the past decade, we’ve helped thousands of clients — from first-time homebuyers to seasoned investors — make informed decisions in Noida, Greater Noida, and Greater Noida West.

              Our deep understanding of the local market trends, builder reputation, construction quality, legal documentation, and price appreciation has enabled us to offer unmatched guidance. We’ve witnessed the transformation of Noida from an emerging hub to a real estate powerhouse — and our clients have grown with us.

              We don’t just offer properties; we offer experience-driven consultation that adds long-term value to your investment.

              Our legacy is built on trust, transparency, and unwavering dedication to helping clients achieve their property goals.
            </p>
            <a
              href="https://wa.me/919911093426"
              className="whatsapp-btn"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
      {/* Why Clients Trust Us Section */}
      <section className="trust-section">
        <h2 className="trust-title">
          <span>WHY</span> CLIENTS TRUST US
        </h2>
        <p className="trust-subtitle">
          A decade of dedication, growth, and excellence in real estate services.
        </p>

        <div className="trust-cards">
          <div className="trust-card">
            <div className="icon">
              <FaHome />
            </div>
            <h3>Extensive Property Portfolio</h3>
            <p>
              Over 10 years, we’ve curated a wide range of premium residential and commercial properties tailored to meet every need.
            </p>
          </div>

          <div className="trust-card">
            <div className="icon">
              <FaHandshake />
            </div>
            <h3>Thousands of Satisfied Clients</h3>
            <p>
              Our decade-long track record speaks for itself—trust earned through results, professionalism, and care.
            </p>
          </div>

          <div className="trust-card">
            <div className="icon">
              <FaWallet />
            </div>
            <h3>Seamless Financing Support</h3>
            <p>
              From first homes to investment deals, we simplify your journey with expert financing guidance and support.
            </p>
          </div>
        </div>
      </section>


      <ScrollTopButton />
    </>
  );
};

export default Careers;