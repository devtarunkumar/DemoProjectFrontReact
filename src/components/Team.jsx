import "./Team.css";

const team = [
    {
        img: "/public/t4.jpeg",
        name: "Miss. Neha",
        role: "Manager"
    },
    {
        img: "/public/t1.jpeg",
        name: "Mr. Satish Kumar",
        role: "Sr. Sales Manager"
    },
    {                                      

        img: "/public/t2.jpeg",
        name: "Mr. Vishnu Sharma",
        role: "Sr. Sales Executive"
    },
    {
        img: "/public/t3.jpeg",
        name: "Mr. Shivam Pal",
        role: "Sales Executive"
    }

];

const Team = () => {

    return (

        <section className="team" data-aos="fade-up">

            <h2 className="team-title"><span> Meet Our</span> Team</h2>

            <p className="team-desc">
                Our Team are here to help you.
            </p>

            <div className="team-container">

                {team.map((member, index) => (
                    <div className="team-card" key={index}>

                        <div className="team-img">

                            <img src={member.img} alt="" />

                           

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