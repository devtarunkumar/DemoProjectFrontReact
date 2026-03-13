import "./Popular.css";
import { FaSearch, FaBullhorn, FaChartLine, FaLaptopCode } from "react-icons/fa";

const Popular = () => {
  return (
    <section className="popular" data-aos="fade-up">

      <h2 className="section-title">Popular Services</h2>

      <div className="popular-container">

        <div className="popular-card">
          <FaSearch className="icon"/>
          <h3>SEO Optimization</h3>
          <p>Improve your website ranking on Google and get more organic traffic.</p>
        </div>

        <div className="popular-card">
          <FaBullhorn className="icon"/>
          <h3>Social Media Marketing</h3>
          <p>Grow your brand presence on Instagram, Facebook and LinkedIn.</p>
        </div>

        <div className="popular-card">
          <FaChartLine className="icon"/>
          <h3>Paid Advertising</h3>
          <p>Run powerful Google Ads and Meta Ads campaigns to generate leads.</p>
        </div>

        <div className="popular-card">
          <FaLaptopCode className="icon"/>
          <h3>Website Development</h3>
          <p>Modern and responsive websites designed for high conversions.</p>
        </div>

      </div>

    </section>
  );
};

export default Popular;