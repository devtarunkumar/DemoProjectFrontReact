import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
              <a href="tel:+919911093426">
                +91 99110-93426
              </a>
            </p>

          </div>


        </div>


        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3> <br /> <br /> <br />
          <ul>
            <li><a href="#">Home</a></li> <br />
            <li><a href="#">About</a></li> <br />
            <li><a href="#">Projects</a></li> <br />
            <li><a href="#">FAQ</a></li> <br />
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3>Projects in Noida</h3> <br /> <br /> <br />
          <ul>
            <li><a href="#">Eldeco Group</a></li> <br />
            <li><a href="#">Nirala Estate</a></li> <br />
            <li><a href="#">SKA Orion</a></li>
          </ul>
        </div>
        <div className="footer-services">
          <h3>Projects in Greater Noida</h3> <br /> <br />
          <ul>
            <li><a href="#">Gaursons</a></li> <br />
            <li><a href="#">Sobha</a></li>
          </ul>
        </div>
        <div className="footer-services">
          <h3>Projects in Greater Noida West</h3> <br /> <br />
          <ul>
            <li><a href="#">Goodrej Properties</a></li> <br />
            <li><a href="#">Mahagun Mylagoon</a></li> <br />
            <li><a href="#">Arihant Abode</a></li> <br />
            <li><a href="#">Fusion Brook n Rivulet</a></li> <br />
            <li><a href="#">AIGN Royal</a></li> <br />
            <li><a href="#">Civitech Strings</a></li> <br />
            <li><a href="#">Hawelia</a></li> <br />
            <li><a href="#">Gaursons NBCC</a></li> <br />
            <li><a href="#">VVIP</a></li>

          </ul>
        </div>

      </div>

      <div className="footer-bottom">

        <p>2026 © Copyright GrowNest Realty - All Rights Reserved.</p>

        <div className="footer-bottom-right">
          <h4>Follow us on:-</h4>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;