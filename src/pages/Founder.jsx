import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp, FaHome, FaList, FaUsers, FaTrophy } from "react-icons/fa";
import WhyChooseUs from "../components/WhyChooseUs";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "./Founder.css";

const Founder = () => {
  const sectionRef = useRef(null);      // for stats
  const imgRef = useRef(null);          // founder image
  const contentRef = useRef(null);      // founder content

  // Target numbers for stats
  const targetCounts = {
    houses: 300,
    listings: 400,
    agents: 250,
    awards: 200
  };

  const [counts, setCounts] = useState({
    houses: 0,
    listings: 0,
    agents: 0,
    awards: 0
  });

  // Scroll animation for founder image & text
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
  }, []);

  // Animate stats numbers
  useEffect(() => {
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateCounts();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const animateCounts = () => {
      const duration = 3000; // animation duration in ms
      const startTime = performance.now();

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCounts({
          houses: Math.floor(progress * targetCounts.houses),
          listings: Math.floor(progress * targetCounts.listings),
          agents: Math.floor(progress * targetCounts.agents),
          awards: Math.floor(progress * targetCounts.awards)
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };
  }, []);

  return (
    <>
      <Navbar forceScrolled={true} />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>ABOUT OUR FOUNDER</h1>
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <span>ABOUT OUR FOUNDER</span>
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder">
        <div className="founder-container">
          <div className="founder-img" ref={imgRef}>
            <img src="/c4.jpeg" alt="Founder" />
          </div>

          <div className="founder-content" ref={contentRef}>
            <h2>
              <span className="Ah">ABOUT </span>
              <span>OUR FOUNDER</span>
            </h2>
            <h3>Mr. Manvendra Sharma</h3>
            <p>
              Manvendra Sharma, CEO & Founder, often remarked as the brand trust
              in the Indian Real Estate Market with experience spanning more than
              a decade, led the foundation to make real estate experience easier
              and accessible. GrowNest Realty brings together a group of energized
              real estate consultants offering a diverse catalogue. Under the
              leadership of our founder, we have managed to establish ourselves
              as the Best Real Estate Consultant In NCR by creating history in
              sales and raising the bar in customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/917042192802"
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>

      <ScrollTopButton />
      <WhyChooseUs />

      {/* Stats Section */}
      <section className="stats-section" ref={sectionRef}>
        <div className="stats-overlay">
          <div className="stats-container">

            <div className="stat-box">
              <FaHome className="stat-icon" />
              <h2>{counts.houses}+</h2>
              <p>Sold Houses</p>
            </div>

            <div className="stat-box">
              <FaList className="stat-icon" />
              <h2>{counts.listings}+</h2>
              <p>Daily Listings</p>
            </div>

            <div className="stat-box">
              <FaUsers className="stat-icon" />
              <h2>{counts.agents}+</h2>
              <p>Expert Agents</p>
            </div>

            <div className="stat-box">
              <FaTrophy className="stat-icon" />
              <h2>{counts.awards}+</h2>
              <p>Won Awards</p>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Founder;