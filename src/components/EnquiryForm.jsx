import { useState } from "react";
import "./EnquiryForm.css";

const EnquiryForm = ({ project, closeForm }) => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name required";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid phone";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Enquiry Submitted ");
      closeForm();
    }
  };

  return (
    <div className="enquiry-overlay">

      <div className="enquiry-modal">

        <button className="close-btn" onClick={closeForm}>✕</button>

        <h2>Property Enquiry</h2>
        <p className="project-name">{project?.title}</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <span>{errors.name}</span>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <span>{errors.phone}</span>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <span>{errors.email}</span>

          <textarea
            name="message"
            placeholder="I am interested in this property..."
            onChange={handleChange}
          />

          <button type="submit">Submit Enquiry</button>

        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;