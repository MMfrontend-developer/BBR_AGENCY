import React, { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [projects, setProjects] = useState(100);
  const [freelancers, setFreelancers] = useState(75);
  const [satisfaction, setSatisfaction] = useState(98);

  useEffect(() => {
    const animateCount = (setter, target, duration = 1500) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target); 
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          setTimeout(() => {
            animateCount(setProjects, 200);
            animateCount(setFreelancers, 75);
            animateCount(setSatisfaction, 98);
          }, 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [counted]);

  return (
    <section ref={sectionRef} className="container" style={{ paddingBottom: '120px' }}>
      <div className="feature-row reverse">
        <motion.div 
          className="feature-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="feature-tag">Why Choose Us</span>
          <h2 className="feature-title">Built for scale, designed for speed.</h2>
          <p style={{ marginBottom: '24px' }}>Thousands of clients and freelancers trust BRR Agency to deliver extraordinary results securely and efficiently.</p>
          
          <div className="partners" style={{ justifyContent: 'flex-start', filter: 'invert(1) opacity(0.5)', flexWrap: 'wrap' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
          </div>
        </motion.div>

        <motion.div 
          className="feature-visual"
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="visual-box" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', padding: '30px' }}>
            <div className="glass-panel" style={{ padding: '30px', textAlign: 'center', gridColumn: '1 / -1' }}>
              <h3 className="text-gradient" style={{ fontSize: '3.5rem', margin: 0 }}>{projects}+</h3>
              <p style={{ fontWeight: 600, color: '#fff', margin: '10px 0 0' }}>Projects Delivered</p>
            </div>
            <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', margin: 0, color: '#4cc9f0' }}>{freelancers}+</h3>
              <p style={{ fontSize: '0.9rem', margin: '10px 0 0' }}>Elite Talent</p>
            </div>
            <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', margin: 0, color: '#9d4edd' }}>{satisfaction}%</h3>
              <p style={{ fontSize: '0.9rem', margin: '10px 0 0' }}>Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
