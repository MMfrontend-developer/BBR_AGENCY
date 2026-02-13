import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About <span>BRR Agency</span></h1>
        <p>
          We are a creative & results-driven digital agency delivering top-tier
          solutions for businesses across the world.
        </p>
      </section>

      {/* MISSION + VISION */}
      <section className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To elevate brands by providing premium digital services <span>that blend
            creativity, technology, and strategy.</span> 
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To become Africa’s leading digital agency, trusted for innovation, <span>
            excellence, and world-class results.</span>
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          BRR Agency delivers a wide range of digital services tailored to help
          businesses grow, scale, and dominate their markets.
        </p>

        <ul className="about-services">
          <li>✔ UI/UX Design</li>
          <li>✔ Web Design & Development</li>
          <li>✔ Mobile App Development</li>
          <li>✔ Digital Marketing & SEO</li>
          <li>✔ Branding & Creative Design</li>
          <li>✔ E-commerce Solutions</li>
          <li>✔ Content Creation & Strategy</li>
        </ul>
      </section>

      {/* TEAM */}
      <section className="about-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">

          {/* MEMBER 1 */}
          <div className="team-card">
            <div className="team-photo">
              <img 
                src="Michael Smith.jpg"
                alt="BRR Boss"
              />
            </div>
            <h3>BRR Boss</h3>
            <p>CEO & Creative Director</p>
          </div>

          {/* MEMBER 2 */}
          <div className="team-card">
            <div className="team-photo">
              <img 
                src="doe-johnson.jpg"
                alt="Designer"
              />
            </div>
            <h3>Designer</h3>
            <p>Brand & UI Specialist</p>
          </div>

          {/* MEMBER 3 */}
          <div className="team-card">
            <div className="team-photo">
              <img 
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                alt="Developer"
              />
            </div>
            <h3>Developer</h3>
            <p>Lead Software Engineer</p>
          </div>

        </div>
      </section>
      </div>
         <Footer/>
    </div>
  );
};

export default About;
