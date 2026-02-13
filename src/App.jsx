import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueStrip from "./components/ValueStrip";
import Services from "./components/Services";
import EscrowFlow from "./components/EscrowFlow";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ValueStrip />
              <Services />
              <EscrowFlow />
              <Portfolio />
              <WhyChooseUs />
              <Testimonials />
              <CTA />
              <Footer />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
