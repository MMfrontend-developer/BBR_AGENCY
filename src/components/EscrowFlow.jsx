import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaShieldAlt, FaUserCog, FaCheckCircle } from "react-icons/fa";

export default function EscrowFlow() {
  const steps = [
    {
      icon: <FaUserTie />,
      title: "Client",
      text: "Bring your freelancer — we handle secure escrow for you.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Escrow",
      text: "Your payment is safely held until work is delivered.",
    },
    {
      icon: <FaUserCog />,
      title: "Freelancer",
      text: "Deliver the project confidently — funds are guaranteed.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Delivery",
      text: "Client approves, funds released. Simple and transparent.",
    },
  ];

  // Container controls stagger timing
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.35 },
    },
  };

  // Each step slides from left + glows in
  const stepVariants = {
    hidden: { opacity: 0, x: -80, filter: "brightness(0.5)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "brightness(1.2)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="workflow"
      className="workflow-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How Escrow Works
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Trust, transparency, and security — every step of the way.
      </motion.p>

      <motion.div className="workflow-steps" variants={containerVariants}>
        {steps.map((s, i) => (
          <motion.div key={i} className="workflow-card" variants={stepVariants}>
            <div className="workflow-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {i !== steps.length - 1 && <div className="workflow-line" />}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="escrow-badge"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        🔒 Escrow Secured
      </motion.div>
    </motion.section>
  );
}
