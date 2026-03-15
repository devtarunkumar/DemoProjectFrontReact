import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

const [menuOpen,setMenuOpen] = useState(false);
const [scrolled,setScrolled] = useState(false);

useEffect(()=>{

const handleScroll=()=>{
if(window.scrollY>window.innerHeight/2){
setScrolled(true)
}else{
setScrolled(false)
}
}

window.addEventListener("scroll",handleScroll)

return()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<div className={`navbar ${scrolled ? "scrolled":""}`}>

{/* Logo */}

<div className="logo">
<img src="/logo.png" alt="Stratviz Logo"/>
</div>

{/* Menu */}

<ul className={`nav-links ${menuOpen ? "active":""}`}>

<li><Link to="/">Home</Link></li>

<li className="dropdown">
<Link to="/about">About <FontAwesomeIcon icon={faChevronDown}/></Link>
<ul className="dropdown-menu">
<li><Link to="/founder">About Founder</Link></li>
<li><Link to="/careers">Careers</Link></li>
<li><Link to="/team">Our Team</Link></li>
</ul>
</li>

<li className="dropdown">
<Link to="/projects">Projects <FontAwesomeIcon icon={faChevronDown}/></Link>
<ul className="dropdown-menu">
<li><Link to="/project1">Project 1</Link></li>
<li><Link to="/project2">Project 2</Link></li>
<li><Link to="/project3">Project 3</Link></li>
</ul>
</li>

<li><Link to="/faq">FAQ</Link></li>
<li><Link to="/contact">Contact</Link></li>

</ul>

{/* Phone button */}

<div className="nav-btn">
<a href="tel:+917082429925">
<button>
<FontAwesomeIcon icon={faPhone}/> 70824-29925
</button>
</a>
</div>

{/* Hamburger */}

<div className="menu-icon" onClick={()=>setMenuOpen(!menuOpen)}>
{menuOpen ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
</div>

</div>

)

}

export default Navbar;