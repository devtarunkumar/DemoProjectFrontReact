import "./WhyChoose.css";
import { FaHome, FaHandshake, FaWallet, FaMapMarkedAlt } from "react-icons/fa";

const data = [
  {
    icon: <FaHome />,
    title: "Wide Range Of Properties",
    desc: "Discover a diverse selection of properties tailored to meet every need and lifestyle — from cozy apartments to luxurious villas. Whether you're buying, selling, or renting, we have the perfect property waiting for you."
  },
  {
    icon: <FaHandshake />,
    title: "Trusted by thousands",
    desc: "Our commitment to excellence and customer satisfaction has earned the trust of thousands of happy clients. Join a growing community of homeowners and investors who rely on us for their real estate needs."
  },
  {
    icon: <FaWallet />,
    title: "Financing made easy",
    desc: "Navigating real estate financing can be complex — but not with us. We simplify the process with expert guidance and partnerships with leading financial institutions to help you secure the best deals effortlessly."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "We are here near you",
    desc: "With a strong local presence, we’re always nearby and ready to assist. Our dedicated team offers personalized support, ensuring a seamless experience whether you're searching, visiting, or closing on your property."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why">

      <h2 className="why-title">Why Choose Us</h2>
      <p className="why-sub">
        We provide full service at every step.
      </p>

      <div className="why-container">
        {data.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;