import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import WhyChooseUs from './components/WhyChooseUs';
import PopularProjects from './components/PopularProjects';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';
import Careers from "./pages/Careers";
import Founder from './pages/Founder';
import OurTeam from "./pages/OurTeam";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollTopButton />
      <Popular />
      <WhyChooseUs />
      <PopularProjects />
      <Team />
      <Testimonials />
      <Partners />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>

      <Routes>



        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);