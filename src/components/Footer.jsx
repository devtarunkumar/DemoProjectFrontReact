  import "./Footer.css";
  import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

  const Footer = () => {
    return (
      <footer className="footer" data-aos="fade-up">
        <div className="footer-container">

          {/* Logo & About */}
          <div className="footer-about">
            <img src="https://www.grownestrealty.in/images/grownest%20logo.jpg" alt="GrowNest Reality" className="footer-logo"/>
            <p>
              Stratviz Solution is a leading digital marketing agency
              helping businesses grow online with innovative strategies and results-driven campaigns.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h3>Services</h3>
            <ul>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Social Media Marketing</a></li>
              <li><a href="#">Paid Advertising</a></li>
              <li><a href="#">Website Development</a></li>
              <li><a href="#">Branding</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@stratvizsolution.com</p>
            <p>Phone: +91 70824-29925</p>
            <p>Address: 123 Digital Street, Mumbai, India</p>

            <div className="footer-social">
              <h4>Follow us on:-</h4>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Stratviz Solution. All rights reserved.</p>
        </div>
      </footer>
    );
  };

  export default Footer;