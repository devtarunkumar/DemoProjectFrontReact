import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Testimonials.css";

const testimonials = [
{
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxzUYvPll-_kvI1z_Px4jSWHR_0QRPWio1g&s",
name:"Rohit Mehta",
review:"Stratviz Solution helped our business grow with amazing SEO strategies."
},
{
img:"https://www.shutterstock.com/image-photo/beauty-charisma-head-shot-portrait-600nw-2647728057.jpg",
name:"Anjali Sharma",
review:"Our social media engagement increased drastically after working with them."
},
{
img:"https://static.vecteezy.com/system/resources/thumbnails/058/270/883/small/confident-young-man-posing-with-crossed-arms-in-casual-denim-shirt-png.png",
name:"Amit Verma",
review:"Professional team and excellent Google Ads campaigns."
},
{
img:"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg",
name:"Neha Kapoor",
review:"Highly recommend for website development and marketing."
},
{
img:"https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6",
name:"Vikas Gupta",
review:"Best digital marketing agency we have worked with."
}
];

const Testimonials = () => {

return(

<section className="testimonials">

<h2 className="test-title">Client Testimonials</h2>

<p className="test-desc">
See what our clients say about our digital marketing services
and how we helped them grow their businesses.
</p>

<Swiper
modules={[Navigation,Autoplay]}
spaceBetween={25}
navigation
loop={true}
autoplay={{delay:3000}}

breakpoints={{
0:{
slidesPerView:1
},
640:{
slidesPerView:2
},
1024:{
slidesPerView:3
}
}}
>

{testimonials.map((item,index)=>(
<SwiperSlide key={index}>

<div className="testimonial-card">

<img src={item.img} alt={item.name}/>

<h3>{item.name}</h3>

<p>{item.review}</p>

</div>

</SwiperSlide>
))}

</Swiper>

</section>

)

}

export default Testimonials;