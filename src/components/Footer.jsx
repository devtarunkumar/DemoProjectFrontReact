import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-about">
          <img src="https://www.grownestrealty.in/images/grownest%20logo.jpg" alt="GrowNest Reality" className="footer-logo" />
          <p>
            Led by Manvendra Sharma, our CEO & Founder, GrowNest Realty has emerged as a trusted name in the Indian real estate market. With over a decade of experience, we are dedicated to making the real estate journey simpler, more transparent, and accessible for everyone.
          </p> <br />
          <div className="footer-contact">

            {/* Address */}
            <p>
              <FaMapMarkerAlt className="icon" />
              <a
                href="https://www.google.com/maps?q=Noida,India"
                target="_blank"
                rel="noopener noreferrer"
              >
                Noida, INDIA
              </a>
            </p>

            {/* Email */}
            <p>
              <FaEnvelope className="icon" />
              <a href="mailto:grownestrealty@gmail.com">
                grownestrealty@gmail.com
              </a>
            </p>

            {/* Phone */}
            <p>
              <FaPhoneAlt className="icon" />
              <a href="tel:+917042192802">
                +91 70421 92802
              </a>
            </p>

          </div>


        </div>


        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3> <br /> <br /> <br />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3>Projects in Noida</h3> <br /> <br /> <br />
          <ul>
            <li><Link to="/projects/civitech-eldeco">Eldeco Group</Link></li>
            <li><Link to="/projects/civitech-nirala">Nirala Estate</Link></li>
            <li><Link to="/projects/civitech-ska-orion">SKA Orion</Link></li>
          </ul>
        </div>
        <div className="footer-services">
          <h3>Projects in Greater Noida</h3> <br /> <br />
          <ul>
            <li><Link to="/projects/gaursons">Gaursons</Link></li>
            <li><Link to="/projects/sobha">Sobha</Link></li>
          </ul>
        </div>
        <div className="footer-services">
          <h3>Projects in Greater Noida West</h3> <br /> <br />
          <ul>
            <ul>
              <li><Link to="/projects/godrej-majesty">Godrej Properties</Link></li>
              <li><Link to="/projects/mahagun-mylagoon">Mahagun Mylagoon</Link></li>
              <li><Link to="/projects/arihant-adobe">Arihant Abode</Link></li>
              <li><Link to="/projects/fusion-brook">Fusion Brook n Rivulet</Link></li>
              <li><Link to="/projects/aign-royal">AIGN Royal</Link></li>
              <li><Link to="/projects/civitech-strings">Civitech Strings</Link></li>
              <li><Link to="/projects/hawelia">Hawelia</Link></li>
              <li><Link to="/projects/gaursons-nbcc">Gaursons NBCC</Link></li>
              <li><Link to="/projects/vvip">VVIP</Link></li>
            </ul>

          </ul>
        </div>

      </div>

      <div className="footer-bottom">

        <p>2026 © Copyright GrowNest Realty - All Rights Reserved.</p>

        <div className="footer-bottom-right">
          <h4>Follow us on:-</h4>
          <a
            href="https://www.facebook.com/profile.php?id=61574843339727"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/grownestrealty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;