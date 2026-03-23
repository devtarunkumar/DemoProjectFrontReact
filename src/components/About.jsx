import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChooseUs from "./WhyChooseUs";
import ScrollTopButton from "../components/ScrollTopButton";
import { FaWhatsapp, FaHome, FaList, FaUsers, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./About.css";

const About = () => {

    const [counts, setCounts] = useState({
        houses: 0,
        listings: 0,
        agents: 0,
        awards: 0
    });

    const sectionRef = useRef(null);
    const [start, setStart] = useState(false);

    //  Scroll trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    //  Counter animation
    useEffect(() => {
        if (!start) return;

        const animate = (target, key) => {
            const duration = 2200;
            const startTime = performance.now();

            const update = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const value = Math.floor(progress * target);

                setCounts((prev) => ({
                    ...prev,
                    [key]: value
                }));

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            };

            requestAnimationFrame(update);
        };

        animate(300, "houses");
        animate(400, "listings");
        animate(250, "agents");
        animate(200, "awards");

    }, [start]);

    return (
        <>
            <Navbar forceScrolled={true} />

            {/* HERO */}
            <section className="about-hero"

            >

                <div className="about-hero-content">
                    <h1>ABOUT OUR COMPANY</h1>

                    <p className="breadcrumb">
                        <Link to="/">Home</Link> / <span>ABOUT OUR COMPANY</span>
                    </p>
                </div>
            </section>

            {/* ABOUT */}
            <section className="about-company">
                <div className="about-container">
                    <div className="about-img">
                        <img src="./about-us.jpg" alt="about" />
                    </div>

                    <div className="about-content">
                        <h2><span className="Ah">ABOUT </span><span>US</span></h2>

                        <p>
                            GrowNest Realty is a dynamic and forward-thinking real estate company founded in 2016. Specializing in residential and commercial properties, GrowNest Realty has rapidly established itself as a trusted name in the real estate industry. With a strong focus on customer satisfaction and personalized services, the company is committed to helping clients find their dream properties or investment opportunities.
                        </p>

                        <p>
                            Whether it’s buying, selling, or renting, GrowNest Realty offers expert guidance and seamless transactions, ensuring clients have an exceptional experience. The company’s team of dedicated professionals leverages their deep market knowledge and industry expertise to offer tailored solutions, making it a reliable choice for anyone looking to navigate the real estate market with confidence.
                        </p>
                        <p>
                            By blending innovation with integrity, GrowNest Realty continues to expand its footprint, building long-lasting relationships with clients and becoming a key player in the real estate sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* WhatsApp */}
            <a
                href="https://wa.me/917042192802"
                className="whatsapp-btn"
                target="_blank"
            >
                <FaWhatsapp />
            </a>

            <ScrollTopButton />
            <WhyChooseUs />

            {/* STATS */}
            <section className="stats-section"

                ref={sectionRef}>
                <div className="stats-overlay">
                    <div className="stats-container">

                        <div className="stat-box">
                            <FaHome className="stat-icon" />
                            <h2>{counts.houses}</h2>
                            <p>Sold Houses</p>
                        </div>

                        <div className="stat-box">
                            <FaList className="stat-icon" />
                            <h2>{counts.listings}</h2>
                            <p>Daily Listings</p>
                        </div>

                        <div className="stat-box">
                            <FaUsers className="stat-icon" />
                            <h2>{counts.agents}</h2>
                            <p>Expert Agents</p>
                        </div>

                        <div className="stat-box">
                            <FaTrophy className="stat-icon" />
                            <h2>{counts.awards}</h2>
                            <p>Won Awards</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="testimonials-section">

                <h2 className="test-title">
                    <span>CLIENTS</span> TESTIMONIALS
                </h2>
                <p className="test-subtitle">We collect reviews from our customers.</p>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }}
                    speed={5000}

                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >

                    <SwiperSlide>
                        <div className="testimonial-card">
                            <h4>Amit Sharma, Sector 150 Noida</h4>
                            <p>"Trustworthy and knowledgeable – that’s how I’d describe GrowNest Realty."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card">
                            <h4>Ramesh Verma, Noida</h4>
                            <p>"GrowNest Realty made my dream home a reality. Highly recommended!"</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card">
                            <h4>Priya Malhotra, Greater Noida</h4>
                            <p>"The team was incredibly helpful and explained everything clearly."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card">
                            <h4>Rahul Mehta, Delhi</h4>
                            <p>"Amazing experience, smooth process and great support."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card">
                            <h4>Sneha Kapoor, Gurgaon</h4>
                            <p>"Professional team and transparent dealing throughout."</p>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </section>

        </>
    );
};

export default About;