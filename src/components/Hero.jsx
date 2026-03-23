import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {

    const words = [
        "House ",
        "Apartment ",
        "Plaza ",
       
    ];

    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {

        if (charIndex < words[wordIndex].length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + words[wordIndex][charIndex]);
                setCharIndex(charIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
        else {

            setTimeout(() => {
                setText("");
                setCharIndex(0);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, 1500);

        }

    }, [charIndex, wordIndex]);
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });
    }, []);

    return (
        <div className="hero">
            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/917042192802"
                className="whatsapp-btn"
                target="_blank"
            >
                <FaWhatsapp />
            </a>
            <h1 data-aos="zoom-in">
                Find Your Dream <span className="typing-text">{text}</span>
            </h1>

            <p data-aos="fade-up" data-aos-delay="300">
                We Have Over Million Properties For You.
            </p>

        </div>
    );
};

export default Hero;