import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
      title: "E-Commerce Dashboard",
      category: "Web Development"
    },
    {
      img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
      title: "Marketing Website",
      category: "Design & Conversion"
    },
    {
      img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
      title: "Automation Tool",
      category: "Software Engineering"
    },
    {
  img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
  title: "Brand Design Kit",
  category: "Identity & Branding"
},
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Reduce parallax effect on mobile to prevent extreme overlaps
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const range1 = isMobile ? [0, -30] : [0, -100];
  const range2 = isMobile ? [0, 30] : [0, 100];

  const y1 = useTransform(scrollYProgress, [0, 1], range1);
  const y2 = useTransform(scrollYProgress, [0, 1], range2);

  return (
    <section id="portfolio" className="container section-padding" ref={ref}>
      <div className="section-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected <span className="text-gradient">Case Studies</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}
        >
          A few highlights of what our top 1% freelancers have built.
        </motion.p>
      </div>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="portfolio-item"
            style={{ y: i % 2 === 0 ? y1 : y2 }}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <img src={p.img} alt={p.title} className="portfolio-img" />
            <div className="portfolio-overlay">
              <h3 className="portfolio-title">{p.title}</h3>
              <span className="portfolio-category">{p.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
