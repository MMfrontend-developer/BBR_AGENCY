import React from "react";
import Footer from "../components/Footer";
const ServicesPage = () => {
  return (
    <div>
    <div className="services-page">

      <section className="services-hero">
        <h1>Our <span>Services</span></h1>
        <p>
          BRR Agency delivers top-notch digital solutions that help businesses grow, scale, and dominate their industry.
        </p>
      </section>

      <section className="services-grids">
        
        {/* Web Development */}
        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Web Development" />
          <h3>Web Development</h3>
          <p>
            Modern, fast and responsive websites built with the best technologies for high-performing brands.
          </p>
        </div>

        {/* Branding */}
        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Branding" />
          <h3>Branding & Identity</h3>
          <p>
            Creative and powerful branding that gives your business a unique identity that stands out.
          </p>
        </div>

        {/* Digital Marketing */}
        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" alt="Marketing" />
          <h3>Digital Marketing</h3>
          <p>
            Drive sales and visibility with SEO, social media ads, content marketing and customer analytics.
          </p>
        </div>

        {/* App Development */}
        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3" alt="Mobile App" />
          <h3>App Development</h3>
          <p>
            High-quality mobile apps designed for performance, user-experience and business efficiency.
          </p>
        </div>

      </section>

    </div>
      <Footer/>
      </div>
  );
};

export default ServicesPage;
