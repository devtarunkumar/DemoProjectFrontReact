import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhyChooseUs from "../components/WhyChooseUs";
import FounderStats from "../components/FounderStats";
import "./Founder.css";

const Founder = () => {
  return (
    <>

      {/* Navbar always scrolled + fixed */}
      <Navbar forceScrolled={true} />

      <section className="founder">

        <div className="founder-container">

          <div className="founder-img">
            <img
              src="https://media.istockphoto.com/id/1911521695/photo/successful-businessman-in-modern-office-working-on-laptop.jpg?s=612x612&w=0&k=20&c=SpbXONYEU27uZpRYxVKuR8OIcmhzTQvcJ6U-bTkXci0="
              alt="Founder"
            />
          </div>

          <div className="founder-content">

            <h2>Our Founder</h2>

            <h3>Mr. Rahul Sharma</h3>

            <p>
              Rahul Sharma is the visionary founder behind our company.
              With years of experience in digital marketing and business strategy,
              he has helped hundreds of brands grow online.
            </p>

            <p>
              His mission is to deliver innovative solutions that help businesses
              achieve sustainable growth in the digital world.
            </p>

          </div>

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
            <WhyChooseUs />
            <FounderStats />
      {/* Same footer as home page */}
      <Footer />

    </>
  );
};

export default Founder;