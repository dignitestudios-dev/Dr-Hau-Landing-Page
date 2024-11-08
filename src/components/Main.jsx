import React from 'react'; // Ensure you import React
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Contact from './Contact';

function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
