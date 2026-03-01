import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      {/* HERO SECTION */}
      <section className="container section-padding text-center">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-gradient">BRR Agency</span>
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are a creative & results-driven digital agency delivering top-tier solutions for businesses across the world.
        </motion.p>
      </section>

      {/* MISSION + VISION */}
      <section className="container section-padding" style={{ paddingTop: 0 }}>
        <div className="portfolio-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <motion.div 
            className="glass-panel" 
            style={{ padding: 'clamp(20px, 5vw, 50px)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Our Mission</h2>
            <p>
              To elevate brands by providing premium digital services <span className="text-gradient" style={{ fontWeight: 600 }}>that blend creativity, technology, and strategy.</span> 
            </p>
          </motion.div>

          <motion.div 
            className="glass-panel" 
            style={{ padding: 'clamp(20px, 5vw, 50px)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Our Vision</h2>
            <p>
              To become the leading digital agency, trusted for innovation, <span className="text-gradient" style={{ fontWeight: 600 }}>excellence, and world-class results.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="container section-padding">
        <div className="section-header text-center">
          <h2 className="section-title">Meet <span className="text-gradient">Our Leaders</span></h2>
        </div>
        
        <div className="services-grid">
          {[{name: 'BRR Boss', title: 'CEO & Creative Director', img: 'Michael Smith.jpg'},
            {name: 'Doe Johnson', title: 'Brand & UI Specialist', img: 'doe-johnson.jpg'},
            {name: 'Dev Lead', title: 'Lead Software Engineer', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6'}
          ].map((member, i) => (
            <motion.div 
              key={i} 
              className="glass-panel" 
              style={{ overflow: 'hidden', padding: 0 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={member.img} alt={member.name} style={{ width: '100%', height: '300px', objectFit: 'cover', filter: 'grayscale(50%)' }} />
              <div style={{ padding: '30px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{member.name}</h3>
                <p className="text-gradient" style={{ fontWeight: 600 }}>{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default About;
