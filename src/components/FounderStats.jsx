import { useEffect, useRef, useState } from "react";
import { FaUserTie, FaUsers, FaProjectDiagram, FaAward } from "react-icons/fa";
import "./FounderStats.css";

const stats = [
  { number: 10, label: "Years Experience", icon: <FaUserTie /> },
  { number: 500, label: "Happy Clients", icon: <FaUsers /> },
  { number: 120, label: "Projects Completed", icon: <FaProjectDiagram /> },
  { number: 15, label: "Awards Won", icon: <FaAward /> }
];

const FounderStats = () => {

  const [count, setCount] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !started.current) {

          started.current = true;

          stats.forEach((item, index) => {

            let start = 0;
            const end = item.number;

            const interval = setInterval(() => {

              start += Math.ceil(end / 40);   // fast counter

              if (start >= end) {
                start = end;
                clearInterval(interval);
              }

              setCount(prev => {
                const newCount = [...prev];
                newCount[index] = start;
                return newCount;
              });

            }, 30);

          });

        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

  }, []);

  return (

    <section className="founder-stats" ref={sectionRef}>

      <div className="stats-container">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>{count[index]}+</h2>

            <p>{item.label}</p>

          </div>

        ))}

      </div>

    </section>

  )

}

export default FounderStats;