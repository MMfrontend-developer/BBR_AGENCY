import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="container section-padding">
      <motion.div 
        className="glass-panel cta-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="cta-title">
          Ready to scale with the <span className="text-gradient">Top 1%?</span>
        </h2>
        <p className="cta-desc">
          Join thousands of elite freelancers and forward-thinking businesses making secure, rapid deals through BRR Agency.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="#" className="btn-premium">Hire Talent Now</a>
          <a href="#" className="btn-premium btn-secondary">Apply as Freelancer</a>
        </div>
      </motion.div>
    </section>
  );
}
