import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "“BRR Agency made my freelance payments 10x faster and safer. The escrow system is a game changer!”",
    name: "Doe johnson",
    role: "Startup Founder",
    avatar: "doe-johnson.jpg",
  },
  {
    text: "“I found reliable clients and got paid securely every time. I trust this platform completely.”",
    name: "Daniel Scott",
    role: "Freelance Designer",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    text: "“The user interface is smooth and modern. It gives confidence in every transaction.”",
    name: "Michael Smith",
    role: "Web Developer",
    avatar: "Michael Smith.jpg",
  },
  {
    text: "“Their support team is outstanding — quick responses and real solutions every time.”",
    name: "Michael Adams",
    role: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    text: "“BRR helped me scale my freelance business to clients worldwide!”",
    name: "Aisha Bello",
    role: "Brand Strategist",
    avatar: "aisha.jpg",
  },
  {
    text: "“Easy onboarding and transparent transactions. Highly recommended.”",
    name: "James Carter",
    role: "App Developer",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "“They truly care about both freelancers and clients. Top-notch experience!”",
    name: "David Lopez",
    role: "UI/UX Designer",
    avatar: "david.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-section-title">What Our Clients Say</h2>
      <p className="section-subtitle">Real stories from happy partners</p>

      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="testimonial-card fade-slide">
          <img
            src={testimonials[current].avatar}
            alt={testimonials[current].name}
            className="avatar"
          />
          <p>{testimonials[current].text}</p>
          <h4>— {testimonials[current].name}</h4>
          <span>{testimonials[current].role}</span>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
