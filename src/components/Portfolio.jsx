import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
      title: "E-Commerce Dashboard",
    },
    {
      img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
      title: "Marketing Website",
    },
    {
  img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
  title: "Automation Tool",
},
{
  img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  title: "Brand Design Kit",
},

  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // starts when visible
  });

  // Parallax transforms for each row
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]); // top row slower
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]); // bottom row opposite

  return (
    <section id="portfolio" className="portfolio-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Portfolio & Case Studies
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A few highlights from our freelancer collaborations.
      </motion.p>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="portfolio-card"
            style={{
              y: i % 2 === 0 ? y1 : y2, // alternate float direction
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={p.img} alt={p.title} />
            <div className="portfolio-overlay">
              <h3>{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
