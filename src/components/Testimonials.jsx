import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Testimonials.css";

const testimonials = [
  {
    img: "/c1.jpeg",
  },
  {
    img: "/c2.jpeg",
  },
  {
    img: "/c3.jpeg",
  },
  {
    img: "/c5.jpeg",
  },
  {
    img: "/c6.jpeg",
  },
  {
    img: "/c7.jpeg",
  },
  {
    img: "/c8.jpeg",
  },
  {
    img: "/c9.jpeg",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">

      <h2 className="test-title">Clients Testimonials</h2>
        <p>We collect reviews from our customers.</p>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={25}
        navigation
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >

        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={item.img} alt="gallery" />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
};

export default Testimonials;