import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPenNib, FaBullhorn, FaPaintBrush } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Floating Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="floating-icons"
      >
        <motion.div
          className="icon icon1"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <FaCode />
        </motion.div>
        <motion.div
          className="icon icon2"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FaPenNib />
        </motion.div>
        <motion.div
          className="icon icon3"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <FaBullhorn />
        </motion.div>
        <motion.div
          className="icon icon4"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5.5, repeat: Infinity }}
        >
          <FaPaintBrush />
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Your On-Demand Freelancer Agency.
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          We unite top freelancers under one roof — flexible, fast, escrow-protected.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <button className="btn primary-btn">Start Your Project</button>
          <button className="btn secondary-btn">Apply as Freelancer</button>
        </motion.div>
      </motion.div>
    </section>
  );
}
