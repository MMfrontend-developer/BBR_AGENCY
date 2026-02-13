import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaHandshake, FaUserCheck, FaBolt } from "react-icons/fa";

export default function ValueStrip() {
  const values = [
    { icon: <FaLock />, title: "Escrow Secured , Procteted" },
    { icon: <FaHandshake />, title: "Transparent Workflows" },
    { icon: <FaUserCheck />, title: "Top Freelancers, Verified" },
    { icon: <FaBolt />, title: "Fast Turnaround, Reliable" },
  ];

  // Container variant controls stagger timing
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // delay between each pop
      },
    },
  };

  // Each item pops in smoothly
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    },
  };

  return (
    <motion.section
      className="value-strip"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // 👈 triggers each time you scroll in
    >
      {values.map((v, i) => (
        <motion.div key={i} className="value-item" variants={itemVariants}>
          <div className="value-icon">{v.icon}</div>
          <h3>{v.title}</h3>
        </motion.div>
      ))}
    </motion.section>
  );
}
