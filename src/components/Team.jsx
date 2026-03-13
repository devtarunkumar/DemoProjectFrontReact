import "./Team.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const team = [
{
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsna_CDm0N4g4fp-0-zi9LurGsH1ZyxUpDTw&s",
name:"Rahul Sharma",
role:"SEO Specialist"
},
{
img:"https://thumbs.dreamstime.com/b/profile-picture-smiling-indian-female-employee-profile-picture-smiling-millennial-indian-female-employee-posing-office-198022033.jpg",
name:"Priya Verma",
role:"Social Media Manager"
},
{
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbZtzGKyBiv3KoCTW3jBkrCJsvogEkFDBUg&s",
name:"Aman Gupta",
role:"Google Ads Expert"
},
{
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTCvvYhk4EuUzhLdNErAUjqQ_7YlJlpYGkQ&s",
name:"Sneha Kapoor",
role:"Web Developer"
}
];

const Team = () => {

return(

<section className="team" data-aos="fade-up">

<h2 className="team-title">Meet Our Team</h2>

<p className="team-desc">
Our team of experts helps businesses grow faster with powerful
digital marketing strategies and innovative solutions.
</p>

<div className="team-container">

{team.map((member,index)=>(
<div className="team-card" key={index}>

<div className="team-img">

<img src={member.img} alt="" />

<div className="social-icons">
<a href="#"><FaFacebookF/></a>
<a href="#"><FaInstagram/></a>
<a href="#"><FaLinkedinIn/></a>
</div>

</div>

<div className="team-info">
<h3>{member.name}</h3>
<p>{member.role}</p>
</div>

</div>
))}

</div>

</section>

)

}

export default Team;