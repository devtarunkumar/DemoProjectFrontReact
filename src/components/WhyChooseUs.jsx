import "./WhyChoose.css";

const data = [
  {
    image: "/icon-4.png",
    title: "Wide Range Of Properties",
    desc: "Discover a diverse selection of properties tailored to meet every need and lifestyle — from cozy apartments to luxurious villas. Whether you're buying, selling, or renting, we have the perfect property waiting for you."
  },
  {
    image: "/icon-5.png",
    title: "Trusted by thousands",
    desc: "Our commitment to excellence and customer satisfaction has earned the trust of thousands of happy clients. Join a growing community of homeowners and investors who rely on us for their real estate needs."
  },
  {
    image: "/icon-6.png",
    title: "Financing made easy",
    desc: "Navigating real estate financing can be complex — but not with us. We simplify the process with expert guidance and partnerships with leading financial institutions to help you secure the best deals effortlessly."
  },
  {
    image: "/icon-15.png",
    title: "We are here near you",
    desc: "With a strong local presence, we’re always nearby and ready to assist. Our dedicated team offers personalized support, ensuring a seamless experience whether you're searching, visiting, or closing on your property."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why">

      <h2 className="why-title"><span>Why </span> Choose Us</h2>
      <p className="why-sub">
        We provide full service at every step.
      </p>

      <div className="why-container">
        {data.map((item, index) => (
          <div className="why-card" key={index}>

            {/* ✅ IMAGE */}
            <img src={item.image} alt={item.title} className="icon-img"/>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;