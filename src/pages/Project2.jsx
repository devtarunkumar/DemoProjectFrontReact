import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSwimmingPool, FaDumbbell, FaTree, FaShieldAlt } from "react-icons/fa";
import "./Project1.css";

const Project2 = () => {

return(

<>

<Navbar forceScrolled={true}/>

<section className="project-hero">

<div className="project-hero-content">

<h1>Green Valley Residency</h1>

<p>Modern apartments surrounded by nature and greenery</p>

<button className="visit-btn">Book Site Visit</button>

</div>

</section>


<section className="project-overview">

<div className="overview-container">

<div className="overview-img">
<img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"/>
</div>

<div className="overview-content">

<h2>Project Overview</h2>

<p>
Green Valley Residency offers comfortable living with
modern architecture and peaceful surroundings.
</p>

<div className="project-info-grid">

<div>
<span>Location</span>
<h4>Noida</h4>
</div>

<div>
<span>Type</span>
<h4>Residential</h4>
</div>

<div>
<span>Units</span>
<h4>150+</h4>
</div>

<div>
<span>Size</span>
<h4>2 BHK</h4>
</div>

</div>

</div>

</div>

</section>


<section className="amenities">

<h2>Project Amenities</h2>

<div className="amenities-grid">

<div className="amenity"><FaSwimmingPool/><p>Swimming Pool</p></div>
<div className="amenity"><FaDumbbell/><p>Gymnasium</p></div>
<div className="amenity"><FaTree/><p>Garden Area</p></div>
<div className="amenity"><FaShieldAlt/><p>24x7 Security</p></div>

</div>

</section>

<section className="project-gallery">

<h2>Project Gallery</h2>

<div className="gallery-grid">

<img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"/>
<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"/>
<img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"/>
<img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"/>

</div>

</section>

<section className="project-cta">

<h2>Interested in this Project?</h2>

<p>Contact us today to schedule a site visit.</p>

<button>Enquire Now</button>

</section>

{/* WhatsApp Icon */}
            <a
                href="https://wa.me/917082429925"
                className="whatsapp-btn"
                target="_blank"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
<ScrollTopButton/>
<Footer/>

</>

)

}

export default Project2