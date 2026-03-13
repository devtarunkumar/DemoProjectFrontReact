import "./Partners.css";

const partners = [

    "https://img.freepik.com/premium-vector/simple-construction-company-logo-design_278222-8241.jpg?semt=ais_rp_progressive&w=740&q=80",
    "https://marketplace.canva.com/EAGaybKnslM/1/0/1600w/canva-blue-simple-modern-minimalist-building-company-logo-VWMkc4ioVFE.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UoEll_tjrqtv90zWHwD-iUEuK2ek177lMQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5qf2jW3hikohj5DCf7wBIHRVF7oq8qnLQw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqfttHrJkk0JBZ9zJaS_YqnYtQoMT5iHAEQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjGs73yykO7NqNufsW24hrNKKe9yVcYXeqw&s"
];

const Partners = () => {

return(

<section className="partners" data-aos="zoom-in-up">

<h2 className="partners-title">Our Partners</h2>

<p className="partners-desc">
We collaborate with trusted brands and companies to deliver
high-quality digital marketing solutions.
</p>

<div className="logo-slider">

<div className="logo-track">
  {partners.concat(partners).map((logo, index) => (
    <div className="logo" key={index}>
      <img src={logo} alt={`Partner ${index + 1}`} />
    </div>
  ))}
</div>

</div>

</section>

)

}

export default Partners