import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./PopularProjects.css";

const PopularProjects = () => {

const projects = [
{
img:"https://essinstitute.in/wp-content/uploads/2024/07/what-is-seo-1024x525.webp",
title:"SEO Marketing",
desc:"Improve Google ranking with SEO"
},
{
img:"https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2023/03/Social-Media-Advertising.jpg.optimal.jpg",
title:"Social Media",
desc:"Instagram & Facebook growth"
},
{
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNCpMGVQ7IN2Ku55y_GUgtAvv5m8G2mPWc5w&s",
title:"Google Ads",
desc:"High converting PPC campaigns"
},
{
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz82P7arPhimfuw4OK3-hgk3iVCpP787T8yA&s",
title:"Website Development",
desc:"Modern responsive websites"
},
{
img:"https://www.stpaulsice.com/wp-content/uploads/2023/12/What-is-Content-Marketing.png",
title:"Content Marketing",
desc:"SEO blog strategy"
}
];

return (

<section className="popular" data-aos="zoom-in">

<h2 className="section-title">Discover Popular Services</h2>
<p className="section-desc">
We provide result-driven digital marketing services that help businesses
increase their online visibility, generate quality leads and grow faster
in the digital world.
</p>
<Swiper
modules={[Navigation, Autoplay]}
spaceBetween={30}
slidesPerView={3}
navigation
autoplay={{ delay:2500 }}
loop={true}
>

{projects.map((item,index)=>(
<SwiperSlide key={index}>

<div className="popular-card">

<img src={item.img} alt="" />

<div className="card-info">
<h3>{item.title}</h3>
<p>{item.desc}</p>
</div>

</div>

</SwiperSlide>
))}

</Swiper>

</section>

);

};

export default PopularProjects;