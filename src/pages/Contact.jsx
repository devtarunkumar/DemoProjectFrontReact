import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {

    return (

        <>

            <Navbar forceScrolled={true} />

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>CONTACT US</h1>
                    <p className="breadcrumb">
                        <Link to="/">Home</Link> / <span>CONTACT US</span>
                    </p>
                </div>
            </section>





            {/* CONTACT FORM + IMAGE OVERLAY */}

            <section className="contact-form-section">

                <div className="contact-wrapper">

                    {/* LEFT SIDE - FORM */}
                    <div className="form-container">

                        <h2>CONTACT US</h2>

                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input
                                type="tel"
                                placeholder="Your Mobile Number"
                                pattern="[0-9]{10}"
                                title="Enter 10-digit mobile number"
                            />
                            <textarea placeholder="Your Message" ></textarea>
                            <button type="submit">Submit</button>
                        </form>

                    </div>

                    {/* RIGHT SIDE - IMAGE + OVERLAY TEXT */}
                    <div className="contact-image-box">

                        <img src="/bg-testimonials.jpg" alt="Contact" />

                        <div className="contact-overlay">

                            <h3>CONTACT DETAILS</h3>

                            <p className="overlay-sub">
                                Please find below contact details and contact us today!
                            </p>

                            <p>📍 GH-04 B Sector -12, Greater Noida West -201318</p>
                            <p>📞 +91  70421 92802</p>
                            <p>✉️ grownestrealty@gmail.com</p>
                            <p>⏰ 8:00 a.m - 9:00 p.m</p>

                        </div>

                    </div>

                </div>

            </section>

            {/* GOOGLE MAP - STYLISH */}
            <section
                className="contact-map"
                style={{
                    padding: '20px',
                    textAlign: 'center',
                }}
            >
                <h2 style={{ marginBottom: '16px', fontSize: '1.8rem', color: '#333', fontWeight: '600' }}>
                    OUR LOCATION
                </h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789012!2d77.362345678901!3d28.571234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0f1234567%3A0xabcdef123456789!2sGH-04%20B%20Sector%2012%2C%20Greater%20Noida%20West%2C%20Uttar%20Pradesh%20201318!5e0!3m2!1sen!2sin!4v1700745678901!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{
                        border: 0,
                        borderRadius: '12px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                        maxWidth: '900px',
                        margin: '0 auto',
                        transition: 'transform 0.3s ease',
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

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

    )

}

export default Contact;