import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "BRR Agency made my freelance payments 10x faster and safer. The escrow system is an absolute game changer!",
    name: "Doe Johnson",
    role: "Startup Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "I found reliable clients and got paid securely every time. I trust this platform completely.",
    name: "Daniel Scott",
    role: "Freelance Designer",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    text: "The user interface is smooth and modern. It gives confidence in every high-ticket transaction.",
    name: "Michael Smith",
    role: "Web Developer",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container section-padding">
      <div className="section-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Our <span className="text-gradient">Partners Say</span>
        </motion.h2>
      </div>

      <div className="testimonial-slider">
        <div className="glass-panel testimonial-card-premium">
          <FaQuoteLeft className="quote-icon" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
              transition={{ duration: 0.6 }}
            >
              <p className="testimonial-text">"{testimonials[current].text}"</p>
              
              <div className="testimonial-author-wrapper">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="author-img"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonials[current].name) + '&background=random' }}
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonials[current].name}</h4>
                  <span className="author-role">{testimonials[current].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '30px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: i === current ? 'linear-gradient(90deg, #4cc9f0, #9d4edd)' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
