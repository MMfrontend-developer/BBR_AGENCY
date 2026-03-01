import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPenNib, FaBullhorn, FaPalette, FaRobot, FaWallet} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Engineering",
      text: "Modern, high-performance web experiences tailored with precision and scalability.",
    },
    {
      icon: <FaPenNib />,
      title: "Content Architecture",
      text: "Save time and scale content creation with AI-powered, human-refined workflows.",
    },
    {
      icon: <FaBullhorn />,
      title: "Growth Marketing",
      text: "Data-driven SEO, hyper-targeted ads, and comprehensive growth campaigns.",
    },
    {
      icon: <FaPalette />,
      title: "Brand Identity",
      text: "Make your brand unforgettable with stunning, immersive visual designs.",
    },  
    {
      icon: <FaRobot />,
      title: "AI Automation",
      text: "Automate your business processes with AI-powered tools to save time and increase efficiency.",
    },  
    {
      icon: <FaWallet />,
      title: "Payment Processing",
      text: "Effortless payment processing with secure, fast, and reliable transactions.",
    },    
  ];

  const handleMouseMove = (e) => {
    for(const card of document.getElementsByClassName("service-card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="services" className="container section-padding services-section">
      <div className="section-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-gradient">Core Capabilities</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem'}}
        >
          We offer elite, end-to-end solutions to power your business success.
        </motion.p>
      </div>

      <div className="services-grid" onMouseMove={handleMouseMove}>
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="glass-panel service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
