import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";

const About = () => {

    return (

        <>

            <Navbar forceScrolled={true} />

            {/* HERO */}

            <section className="about-hero">

                <div className="about-hero-content">

                    <h1>About Our Company</h1>

                    <p>
                        We are a digital marketing agency helping businesses grow faster
                        with innovative marketing strategies.
                    </p>

                </div>

            </section>


            {/* ABOUT SECTION */}

            <section className="about-company">

                <div className="about-container">

                    <div className="about-img">
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" />
                    </div>

                    <div className="about-content">

                        <h2>Who We Are</h2>

                        <p>
                            Stratviz Solution is a modern digital marketing agency focused
                            on helping businesses build a strong online presence.
                        </p>

                        <p>
                            Our team specializes in SEO, social media marketing,
                            paid advertising, and website development.
                        </p>

                    </div>

                </div>

            </section>


            {/* MISSION & VISION */}

            <section className="mission-vision">

                <div className="mission-box">

                    <h3>Our Mission</h3>

                    <p>
                        To empower businesses with innovative digital marketing
                        solutions that drive measurable growth.
                    </p>

                </div>

                <div className="vision-box">

                    <h3>Our Vision</h3>

                    <p>
                        To become a trusted global marketing partner
                        for businesses of all sizes.
                    </p>

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

            <Footer />

        </>

    )

}

export default About;