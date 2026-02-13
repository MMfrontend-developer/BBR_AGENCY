import React, { useEffect, useState, useRef } from "react";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [projects, setProjects] = useState(0);
  const [freelancers, setFreelancers] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const animateCount = (setter, target, duration = 1500) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          // Add a small delay to ensure animation works when landing on the section
          setTimeout(() => {
            animateCount(setProjects, 200);
            animateCount(setFreelancers, 50);
            animateCount(setSatisfaction, 98);
          }, 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 } // triggers when 40% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [counted]);

  return (
    <section ref={sectionRef} className="stats-section">
      <h2 className="section-title">Why Choose Us</h2>
      <p className="section-subtitle">
        Trusted by clients and freelancers worldwide.
      </p>

      <div className="stats-grid">
        <div className="stat-box">
          <h3>{projects}+</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-box">
          <h3>{freelancers}+</h3>
          <p>Verified Freelancers</p>
        </div>
        <div className="stat-box">
          <h3>{satisfaction}%</h3>
          <p>Client Satisfaction</p>
        </div>
      </div>

      {/* ✅ Real partner logos */}
      <div className="partners">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    alt="Microsoft Partner"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    alt="Apple Partner"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    alt="Google Partner"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    alt="IBM Partner"
  />
</div>


    </section>
  );
}
