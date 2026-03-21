import "./Partners.css";

const partners = [

    {
        img: "/1.png"
    },
    {
        img: "/2.jpg.jpeg"
    },
    {
        img: "/3.png"
    },
    {
        img: "/4.png"
    },
    {
        img: "/5.jpg.jpeg"
    },
    {
        img: "/6.png"
    },
    {
        img: "/7.png"
    },
    {
        img: "/9.png"
    },
    {
        img: "/10.jpg.jpeg"
    },
    {
        img: "/11.jpg.jpeg"
    },
    {
        img: "/14.jpg.jpeg"
    },
    {
        img: "/15.png"
    },
];

const Partners = () => {

return(

<section className="partners" data-aos="zoom-in-up">

<h2 className="partners-title"><span> Our</span> Partners</h2>

<p className="partners-desc">
The Companies That Represent Us.
</p>

<div className="logo-slider">

<div className="logo-track">
  {partners.concat(partners).map((logo, index) => (
    <div className="partner-logo" key={index}>
      <img src={logo.img} alt={`Partner ${index + 1}`} />
    </div>
  ))}
</div>

</div>

</section>

)

}

export default Partners;