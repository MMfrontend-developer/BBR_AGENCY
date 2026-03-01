import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaHandshake, FaUserCheck, FaBolt } from "react-icons/fa";

export default function ValueStrip() {
  const values = [
    { icon: <FaLock />, title: "Escrow Secured", desc: "Your funds are safe until the work is 100% approved." },
    { icon: <FaHandshake />, title: "Transparent Workflow", desc: "Clear milestones, continuous updates, and zero surprises." },
    { icon: <FaUserCheck />, title: "Top 1% Talent", desc: "Every freelancer is rigorously vetted for quality." },
    { icon: <FaBolt />, title: "Lightning Fast", desc: "Start in 24 hours. Rapid turnarounds, reliable delivery." },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1, scale: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="container value-strip-section">
      <motion.div
        className="value-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {values.map((v, i) => (
          <motion.div key={i} className="glass-panel value-card" variants={itemVariants}>
            <div className="value-icon-wrapper">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
