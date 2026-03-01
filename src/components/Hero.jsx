import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPenNib, FaBullhorn, FaPaintBrush } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Floating Elements (Glassmorphism) */}
      <div className="floating-element float-1"><FaCode color="#4cc9f0" /></div>
      <div className="floating-element float-2"><FaPenNib color="#9d4edd" /></div>
      <div className="floating-element float-3"><FaBullhorn color="#4cc9f0" /></div>
      <div className="floating-element float-4"><FaPaintBrush color="#9d4edd" /></div>

      <div className="hero-content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-badge"
        >
          <span className="hero-badge-dot"></span>
          The Future of Remote Work
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h1 
            className="hero-title"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            Your <span className="text-gradient">On-Demand</span><br />Freelancer Agency.
          </motion.h1>

          <motion.p 
            className="hero-description"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            We unite top 1% freelancers under one roof. Flexible, lightning-fast, and escrow-protected for your peace of mind.
          </motion.p>

          <motion.div 
            className="hero-actions"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <a href="#" className="btn-premium">Start Your Project</a>
            <a href="#" className="btn-premium btn-secondary">Apply as Freelancer</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
