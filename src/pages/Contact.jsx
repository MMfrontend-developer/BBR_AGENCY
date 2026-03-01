import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <section className="container section-padding text-center">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact <span className="text-gradient">BRR Agency</span>
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Reach out to us for projects, collaborations, or inquiries. We’re always ready to bring your ideas to life.
        </motion.p>
      </section>

      <section className="container section-padding" style={{ paddingTop: 0 }}>
        <div className="feature-row">
          <motion.div 
            className="feature-content glass-panel"
            style={{ padding: 'clamp(24px, 5vw, 50px)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Get In Touch</h2>
            <div style={{ marginBottom: '40px' }}>
              <p style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                <strong className="text-gradient">Email</strong>
                <span style={{ fontSize: '1.2rem', color: '#fff' }}>support@brragency.com</span>
              </p>
              <p style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                <strong className="text-gradient">Phone</strong>
                <span style={{ fontSize: '1.2rem', color: '#fff' }}>+234 708 352 8377</span>
              </p>
              <p style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                <strong className="text-gradient">Address</strong>
                <span style={{ fontSize: '1.2rem', color: '#fff' }}>Lagos, Nigeria.</span>
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="feature-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-panel" style={{ padding: 'clamp(24px, 5vw, 50px)', display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
                style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }}
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
                style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }}
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
              ></textarea>

              <button type="submit" className="btn-premium" style={{ width: '100%', padding: '16px' }}>
                Send Message
              </button>
              {submitted && <p style={{ color: '#4cc9f0', textAlign: 'center', marginTop: '10px' }}>✓ Message sent successfully!</p>}
            </form>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Contact;
