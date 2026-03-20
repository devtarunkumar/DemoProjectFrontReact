import "./Team.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const team = [
    {
    img:"/public/t4.jpeg",
name:"Miss. Neha", 
role:"Manager"     
    },
{
img:"/public/t1.jpeg",
name:"Mr. Satish Kumar",
role:"Sr.Sales Manager"
},
{

img:"/public/t3.jpeg",
name:"Mr. Shivam Pal",
role:"Sales Executive"
},
{
img:"/public/t2.jpeg",
name:"Mr. Vishnu Sharma",
role:"Sr.Sales Executive"
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