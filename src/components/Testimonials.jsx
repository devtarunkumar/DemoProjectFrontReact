import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
img:"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
name:"Neha Kapoor",
review:"Highly recommend for website development and marketing."
},
{
img:"https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
name:"Vikas Gupta",
review:"Best digital marketing agency we have worked with."
},
{
img:"https://www.shutterstock.com/image-photo/head-shot-portrait-confident-positive-260nw-2473271385.jpg",
name:"Pooja Singh",
review:"Great results in a very short time."
},
{
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsj6C74yPqYq77nP0GI-a1IV0Z7w-sz0NnA&s",
name:"Rakesh Jain",
review:"Our online visibility improved significantly."
},
{
img:"https://wallpapers.com/images/hd/women-profile-pictures-2400-x-1600-n2or9xbo3q54wblo.jpg",
name:"Simran Kaur",
review:"Amazing experience working with Stratviz team."
},
{
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqlYkckldyC8arOg4nkIpe2l0c-V_D7oBiQ&s",
name:"Deepak Sharma",
review:"Very professional service and great support."
},
{
img:"https://media.istockphoto.com/id/1488358643/photo/happy-business-portrait-of-black-woman-planning-company-project-goals-and-startup-management.jpg?s=612x612&w=0&k=20&c=hLU-H57nz5HYQkCwqjesjfWtvJEmrBvJ0hGNjc_hAIg=",
name:"Priya Malhotra",
review:"Highly satisfied with their digital marketing services."
}

];

const Testimonials = () => {

return(

<section className="testimonials" data-aos="fade-left">

<h2 className="test-title">Client Testimonials</h2>

<p className="test-desc">
See what our clients say about our digital marketing services
and how we helped them grow their businesses.
</p>

<Swiper
modules={[Navigation]}
spaceBetween={30}
slidesPerView={3}
navigation
loop={true}
>

{testimonials.map((item,index)=>(
<SwiperSlide key={index}>

<div className="testimonial-card">

<img src={item.img} alt="" />

<h3>{item.name}</h3>

<p>{item.review}</p>

</div>

</SwiperSlide>
))}

</Swiper>

</section>

)

}

export default Testimonials