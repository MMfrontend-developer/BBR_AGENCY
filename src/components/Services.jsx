import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPenNib, FaBullhorn, FaPalette } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      text: "Modern, fast, and responsive web experiences tailored to your goals.",
    },
    {
      icon: <FaPenNib />,
      title: "Content Automation",
      text: "Save time and scale content creation with automation workflows.",
    },
    {
      icon: <FaBullhorn />,
      title: "SEO & Marketing",
      text: "Boost your reach with expert SEO, ads, and growth-driven campaigns.",
    },
    {
      icon: <FaPalette />,
      title: "Design & Branding",
      text: "Make your brand unforgettable with stunning visuals and identity design.",
    },
  ];

  // Container variant controls stagger timing
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // delay between each card
      },
    },
  };

  // Each service card fades in and moves upward
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="services"
      className="services-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // triggers each time it appears
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Core Services
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We offer top-tier solutions to power your business success.
      </motion.p>

      <motion.div className="services-grid" variants={containerVariants}>
        {services.map((s, i) => (
          <motion.div key={i} className="service-card services" variants={cardVariants}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
