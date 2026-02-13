import { div } from "framer-motion/client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
     <div className="contact-main">
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Contact <span>BRR Agency</span></h1>
        <p>
          Reach out to us for projects, collaborations, or inquiries.  
          We’re always ready to bring your ideas to life.
        </p>
      </section>

      <section className="contact-grid">
        
        {/* LEFT BOX */}
        <div className="contact-card">
          <h2>Get In Touch</h2>

          <p><strong>Email:</strong> support@brragency.com</p>
          <p><strong>Phone:</strong> +234 708 352 8377</p>
          <p><strong>Address:</strong> Lagos, Nigeria.</p>

          <img 
            src="/public/contact.jpg"
            alt="Contact"
          />
        </div>

        {/* RIGHT BOX */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="6" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
          {submitted && <p className="success-message">✓ Message sent successfully!</p>}

        </form>

      </section>

    </div>
    </div>
  );
};

export default Contact;
