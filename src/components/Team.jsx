import { useState } from "react";
import "./Team.css";

const team = [
    {
        img: "/t4.jpeg",
        name: "Miss. Neha",
        role: "Manager",
        description: "Oversees overall operations, client relations, and project management ensuring smooth execution of real estate projects."
    },
    {
        img: "/t1.jpeg",
        name: "Mr. Satish Kumar",
        role: "Senior Sales Manager",
        description: "Leads the sales team, strategizes property marketing, and drives high-value client acquisitions."
    },
    {                                      
        img: "/t2.jpeg",
        name: "Mr. Vishnu Sharma",
        role: "Senior Sales Executive",
        description: "Handles key client accounts, provides property consultation, and supports sales growth through relationship management."
    },
    {
        img: "/t3.jpeg",
        name: "Mr. Shivam Pal",
        role: "Sales Executive",
        description: "Manages day-to-day client interactions, assists buyers and sellers, and ensures timely closure of property deals."
    }
];

const TeamCard = ({ member }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="team-card" onClick={() => setFlipped(!flipped)}>
            <div className={`team-card-inner ${flipped ? "flipped" : ""}`}>
                {/* Front */}
                <div className="team-card-front">
                    <div className="team-img">
                        <img src={member.img} alt={member.name} />
                    </div>
                    <div className="team-info">
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                </div>

                {/* Back */}
                <div className="team-card-back">
                    <div className="team-img">
                        <img src={member.img} alt={member.name} />
                    </div>
                    <div className="team-info back-info">
                        <h3>{member.name}</h3>
                        <p>{member.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Team = () => {
    return (
        <section className="team" data-aos="fade-up">
            <h2 className="team-title"><span> Meet Our</span> Team</h2>
            <p className="team-desc">Our Team are here to help you.</p>

            <div className="team-container">
                {team.map((member, index) => (
                    <TeamCard member={member} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Team;