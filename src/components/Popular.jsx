import "./Popular.css";

const popularData = [
  {
    name: "Noida",
    img: "https://www.sundreamgroup.com/wp-content/themes/Anthurium/assets/images/real-estate-properties.png"
  },
  {
    name: "Greater Noida",
    img: "https://www.gaurcity2.com/blogs/wp-content/uploads/2021/08/flats-2.png"
  },
  {
    name: "Greater Noida  West",
    img: "https://www.prefeaconsultants.com/images/nirala-india/IMG_2978.jpeg"
  }
];

const Popular = () => {
  return (
    <section className="popular-1">

      <h2 className="section-title">
        <span>Popular</span> Places
      </h2> <br /> <br />
      <p>Properties In Most Popular Places.</p>

      <div className="popular-container">

        {popularData.map((item, index) => (
          <div className="popular-card" key={index}>

            {/* IMAGE */}
            <div className="card-img">
              <img src={item.img} alt={item.name} />
            </div>

            {/* TEXT */}
            <div className="card-content"> 
              <h3>{item.name}</h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Popular;