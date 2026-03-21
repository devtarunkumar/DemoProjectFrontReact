import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./PopularProjects.css";

const PopularProjects = () => {

    const projects = [
        {
            img: "/Eldeco Group4.jpg.jpeg",
            title: "Eldeco Group",
            location: "Sector 76, Noida"
        },
        {
            img: "/Nirala Estate 2.jpg.jpeg",
            title: "Nirala Estate",
            location: "Sector 78, Noida"
        },
        {
            img: "/SKA Orion4.webp",
            title: "SKA Orion",
            location: "GH-01A/2,Sector 143B, Noida"
        },
        {
            img: "/Arihant 1.webp",
            title: "Arihant Adobe",
            location: "Sector 10,Noida Extension"
        },
        {
            img: "/Fusion 1.jpg.jpeg",
            title: "Fusion Rivulet",
            location: "Sector 12,Noida Extension"
        },
        {
            img: "/Mahagun 1.jpg.jpeg",
            title: "Mahagun Mylagoon",
            location: "Sector 12,Noida Extension"
        },
        {
            img: "/Civitech-1.jpg.jpeg",
            title: "Civitech",
            location: "Sector 1, Noida Extension"
        },
        {
            img: "/Godrej.jfif",
            title: "Godrej Majesty",
            location: "Sector 12,Noida Extension"
        },
        {
            img: "/Aigin 2.jpg.jpeg",
            title: "AIGN Royal",
            location: "Sector 1,Greater Noida West"
        },
        {
            img: "/Hawelia 1.jpg.jpeg",
            title: "Hawelia",
            location: "Sector 1,Greater Noida West"
        }
    ];

    return (

        <section className="popular">

            <h2 className="section-title">Discover Popular Projects</h2>
            <p className="section-desc">
                We provide full service at every step.
            </p>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={25}
                pagination={{ clickable: true }}

                breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 }
                }}
            >

                {projects.map((item, index) => (
                    <SwiperSlide key={index}>

                        <div className="property-card">

                            {/* IMAGE */}
                            <div className="card-img">
                                <img src={item.img} alt={item.title} />
                            </div>

                            {/* CONTENT */}
                            <div className="card-content">

                                {/* TITLE */}
                                <h3>{item.title}</h3>

                                {/* LOCATION */}
                                <p className="location">📍 {item.location}</p>

                                {/* DETAILS */}
                                <div className="details">

                                    <div className="detail-item">
                                        <span className="ic">🛏</span>
                                        <span className="ic">6 Bedrooms</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="ic">🛁</span>
                                        <span className="ic">3 Bathrooms</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="ic">📐</span>
                                        <span className="ic">720 sq ft</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="ic">🚗</span>
                                        <span className="ic">2 Garages</span>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <br />
                        <br />
                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    );
};

export default PopularProjects;