import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {

return(

<>

<Navbar forceScrolled={true}/>

{/* HERO */}

<section className="contact-hero">

<div className="contact-hero-content">

<h1>Contact Us</h1>

<p>
We would love to hear from you. Get in touch with our team today.
</p>

</div>

</section>


{/* CONTACT INFO */}

<section className="contact-info">

<div className="contact-cards">

<div className="contact-card">
<FaPhoneAlt/>
<h3>Call Us</h3>
<p>+91 70824 29925</p>
</div>

<div className="contact-card">
<FaEnvelope/>
<h3>Email</h3>
<p>info@stratvizsolution.com</p>
</div>

<div className="contact-card">
<FaMapMarkerAlt/>
<h3>Location</h3>
<p>Gurgaon, Haryana</p>
</div>

</div>

</section>


{/* CONTACT FORM */}

<section className="contact-form-section">

<div className="form-container">

<h2>Send Us a Message</h2>

<form>

<input type="text" placeholder="Your Name" required/>

<input type="email" placeholder="Your Email" required/>

<input type="text" placeholder="Subject"/>

<textarea placeholder="Your Message" rows="5"></textarea>

<button type="submit">Send Message</button>

</form>

</div>

</section>


{/* GOOGLE MAP */}

<section className="contact-map">

<iframe
src="https://maps.google.com/maps?q=gurgaon&t=&z=13&ie=UTF8&iwloc=&output=embed"
width="100%"
height="350"
style={{border:0}}
allowFullScreen=""
loading="lazy"
></iframe>

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

export default Contact;