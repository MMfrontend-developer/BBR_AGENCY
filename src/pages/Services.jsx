import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "Modern, fast and responsive websites built with the best technologies for high-performing brands."
    },
    {
      title: "Branding & Identity",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      desc: "Creative and powerful branding that gives your business a unique identity that stands out."
    },
    {
      title: "Digital Marketing",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      desc: "Drive sales and visibility with SEO, social media ads, content marketing and customer analytics."
    },
    {
      title: "App Development",
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      desc: "High-quality mobile apps designed for performance, user-experience and business efficiency."
    }
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <section className="container section-padding text-center">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-gradient">Services</span>
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          BRR Agency delivers top-notch digital solutions that help businesses grow, scale, and dominate their industry.
        </motion.p>
      </section>

      <section className="container section-padding" style={{ paddingTop: 0 }}>
        <div className="portfolio-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="glass-panel" 
              style={{ overflow: 'hidden', padding: 0 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={service.img} alt={service.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#fff' }}>{service.title}</h3>
                <p style={{ fontSize: '1.1rem' }}>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default ServicesPage;
