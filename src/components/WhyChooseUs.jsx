import "./WhyChoose.css";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why" data-aos="fade-right">

      <div className="why-container">

        {/* Left Image */}
        <div className="why-image">
          <img src="/marketing.png" alt="Digital Marketing"/>
        </div>

        {/* Right Content */}
        <div className="why-content">

          <h2>Why Choose Stratviz Solution ?</h2>

          <p>
            We help businesses grow online with powerful digital marketing
            strategies and result-driven campaigns.
          </p>

          <div className="why-points">

            <div className="point">
              <FaCheckCircle className="icon"/>
              <span>Experienced Digital Marketing Experts</span>
            </div>

            <div className="point">
              <FaCheckCircle className="icon"/>
              <span>Data Driven SEO Strategies</span>
            </div>

            <div className="point">
              <FaCheckCircle className="icon"/>
              <span>High Conversion Advertising Campaigns</span>
            </div>

            <div className="point">
              <FaCheckCircle className="icon"/>
              <span>Modern Website Development</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;