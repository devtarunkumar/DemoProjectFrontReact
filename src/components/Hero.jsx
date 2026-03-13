import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {

    const words = [
        "Digital Marketing",
        "SEO Services",
        "Social Media Marketing",
        "Paid Advertising",
        "Website Development"
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
                href="https://wa.me/917082429925"
                className="whatsapp-btn"
                target="_blank"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <h1 data-aos="zoom-in">
                Grow Your Business with <span className="typing-text">{text}</span>
            </h1>

            <p data-aos="fade-up" data-aos-delay="300">
                Stratviz Solution helps businesses grow online with powerful
                digital marketing strategies including SEO, social media marketing,
                and paid advertising.
            </p>

        </div>
    );
};

export default Hero;