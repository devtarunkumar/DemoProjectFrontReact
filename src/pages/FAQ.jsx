import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FAQ.css";

const faqData = [
{
question:"What services does your company provide?",
answer:"We provide digital marketing, website development, SEO, and real estate consulting services."
},
{
question:"How can I contact your team?",
answer:"You can contact us through the contact form, WhatsApp button, or phone number available on the website."
},
{
question:"Do you offer project consultation?",
answer:"Yes, we offer complete consultation for marketing strategies and real estate projects."
},
{
question:"How long does it take to complete a project?",
answer:"Project timelines depend on the complexity, but most projects are completed within 2-6 weeks."
},
{
question:"Do you provide support after project completion?",
answer:"Yes, we provide post-project support and maintenance services."
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

{/* HERO */}

<section className="faq-hero">

<div className="faq-hero-content">

<h1>Frequently Asked Questions</h1>

<p>
Find answers to the most common questions about our services.
</p>

</div>

</section>


{/* FAQ SECTION */}

<section className="faq-section">

<div className="faq-container">

{faqData.map((item,index)=>(

<div
className={`faq-item ${active === index ? "active" : ""}`}
key={index}
>

<div
className="faq-question"
onClick={()=>toggleFAQ(index)}
>

<h3>{item.question}</h3>

<span>{active === index ? "-" : "+"}</span>

</div>

{active === index && (

<div className="faq-answer">

<p>{item.answer}</p>

</div>

)}

</div>

))}

</div>

</section>


{/* CTA */}

<section className="faq-cta">

<h2>Still Have Questions?</h2>

<p>Contact our team and we will help you.</p>

<button>Contact Us</button>

</section>

 {/* WhatsApp Icon */}
            <a
                href="https://wa.me/919911093426"
                className="whatsapp-btn"
                target="_blank"
            >
                <FaWhatsapp />
            </a>
<ScrollTopButton/>

<Footer/>

</>

)

}

export default FAQ