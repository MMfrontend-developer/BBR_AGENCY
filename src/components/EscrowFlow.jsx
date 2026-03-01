import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaShieldAlt, FaUserCog, FaCheckCircle } from "react-icons/fa";

export default function EscrowFlow() {
  return (
    <section id="workflow" className="container section-padding">
      <div className="feature-row">
        <motion.div 
          className="feature-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="feature-tag">Secure Escrow</span>
          <h2 className="feature-title">Peace of mind for every milestone.</h2>
          <p>Whether you're hiring or working, our escrow system ensures that everyone is protected. No more chasing payments or worrying about delivery.</p>
          
          <ul className="feature-list">
            <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="feature-list-icon"><FaUserTie /></div>
              <div><strong>Client:</strong> Bring your freelancer — we handle secure escrow for you.</div>
            </motion.li>
            <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="feature-list-icon"><FaShieldAlt /></div>
              <div><strong>Escrow:</strong> Your payment is safely held until work is delivered.</div>
            </motion.li>
            <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="feature-list-icon"><FaUserCog /></div>
              <div><strong>Freelancer:</strong> Deliver the project confidently — funds are guaranteed.</div>
            </motion.li>
            <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="feature-list-icon"><FaCheckCircle /></div>
              <div><strong>Delivery:</strong> Client approves, funds released. Simple and transparent.</div>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div 
          className="feature-visual"
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="visual-box">
            <div style={{ textAlign: 'center', fontSize: '4rem', color: '#4cc9f0', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              <motion.div 
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaShieldAlt />
              </motion.div>
            </div>
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '10px', position: 'relative', zIndex: 10 }}>100% Secured</h3>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 10 }}>Funds are locked safely in our digital vault until terms are met.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
