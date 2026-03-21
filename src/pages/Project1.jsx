import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSwimmingPool, FaDumbbell, FaTree, FaShieldAlt } from "react-icons/fa";
import "./Project1.css";

const Project1 = () => {

return(

<>

<Navbar forceScrolled={true}/>

{/* HERO */}

<section className="project-hero">

<div className="project-hero-content">

<h1>Luxury Heights</h1>

<p>Premium residential project with world class amenities</p>

<button className="visit-btn">Book Site Visit</button>

</div>

</section>


{/* PROJECT OVERVIEW */}

<section className="project-overview">

<div className="overview-container">

<div className="overview-img">
<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"/>
</div>

<div className="overview-content">

<h2>Project Overview</h2>

<p>
Luxury Heights is designed for modern living with spacious
apartments, lush greenery and top class facilities.
</p>

<div className="project-info-grid">

<div>
<span>Location</span>
<h4>Gurgaon</h4>
</div>

<div>
<span>Type</span>
<h4>Residential</h4>
</div>

<div>
<span>Units</span>
<h4>200+</h4>
</div>

<div>
<span>Size</span>
<h4>2 & 3 BHK</h4>
</div>

</div>

</div>

</div>

</section>


{/* AMENITIES */}

<section className="amenities">

<h2>Project Amenities</h2>

<div className="amenities-grid">

<div className="amenity">
<FaSwimmingPool/>
<p>Swimming Pool</p>
</div>

<div className="amenity">
<FaDumbbell/>
<p>Gymnasium</p>
</div>

<div className="amenity">
<FaTree/>
<p>Garden Area</p>
</div>

<div className="amenity">
<FaShieldAlt/>
<p>24x7 Security</p>
</div>

</div>

</section>


{/* GALLERY */}

<section className="project-gallery">

<h2>Project Gallery</h2>

<div className="gallery-grid">

<img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"/>
<img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"/>
<img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"/>
<img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"/>

</div>

</section>


{/* CTA */}

<section className="project-cta">

<h2>Interested in this Project?</h2>

<p>Contact us today to schedule a site visit.</p>

<button>Enquire Now</button>

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

export default Project1