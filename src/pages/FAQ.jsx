import { useState } from "react";
import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import "./FAQ.css";
import { Link } from "react-router-dom";


const faqData = [
{
question:"What payment methods does Grownest Realty accept?",
answer:"Grownest Realty accepts payments through bank transfers, certified checks, and verified digital payment platforms. Please consult your agent for specific payment procedures."
},
{
question:"Can Grownest Realty help me find off-campus housing?",
answer:"Absolutely! We specialize in helping students and professionals find safe and affordable off-campus rentals in prime locations."
},
{
question:"Does Grownest Realty share my personal information?",
answer:"No, we prioritize your privacy and do not share your information with third parties without your consent. Read our privacy policy for more details."
},
{
question:"What type of real estate advice does Grownest Realty offer?",
answer:"We provide guidance on buying, selling, renting, property investments, market trends, and legal documentation. Our agents are here to support you at every step."
},
{
question:"Can I link multiple listings or properties under one profile?",
answer:"Yes, property owners and agents can manage multiple listings from a single dashboard after registering with Grownest Realty."
},
{
question:"Is your real estate advice reliable and up-to-date?",
answer:"Definitely. Our market insights and property evaluations are based on the latest data and industry standards, ensuring accuracy and transparency."
},
{
question:"How can I apply for rental assistance through Grownest Realty?",
answer:"We partner with housing programs and landlords offering flexible options. Contact our support team to check eligibility for rental assistance or discounts."
},
{
question:"Do you assist with legal documentation and property registration?",
answer:"Yes, our legal experts assist clients in verifying property documents, drafting agreements, and registering the property post-sale."
}
];

const FAQ = () => {

const [active,setActive] = useState(null);

const toggleFAQ = (index)=>{
setActive(active === index ? null : index);
};

return(

<>

<Navbar forceScrolled={true}/>

{/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>FAQs</h1>
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <span>FAQs</span>
          </p>
        </div>
      </section>
{/* FAQ Section */}
<section className="faq-section">

  <h2 className="faq-title">Frequently Asked Questions</h2>
  <p className="faq-subtitle">
    Questions About Buying, Selling, and Renting
  </p>

  <div className="faq-container">
    {faqData.map((item, index) => (
      <div 
        key={index} 
        className={`faq-item ${active === index ? "active" : ""}`}
      >
        <div 
          className="faq-question"
          onClick={() => toggleFAQ(index)}
        >
          {item.question}
          <span>{active === index ? "-" : "+"}</span>
        </div>

        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      </div>
    ))}
  </div>

</section>


 {/* WhatsApp Icon */}
            <a
                href="https://wa.me/917042192802"
                className="whatsapp-btn"
                target="_blank"
            >
                <FaWhatsapp />
            </a>
<ScrollTopButton/>


</>

)

}

export default FAQ;