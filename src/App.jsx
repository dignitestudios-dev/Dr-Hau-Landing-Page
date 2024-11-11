import React from 'react';
import '@fontsource/inter/400.css';  // Regular weight
import '@fontsource/inter/500.css';  // Medium weight
import '@fontsource/inter/600.css';  // Semi-bold weight
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Privacypolicy from './components/Privacypolicy';
import Termsandconditions from './components/Termsandconditions';
import Cookiepolicy from './components/Cookiepolicy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Globalnavbar from './components/Globalnavbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar /> 
            <section id="home">
              <Hero />
            </section>
            <section id="features">
            <Features />
            </section>
            <section id="aboutus">
              <About />
            </section>
            <section id="contactus">
              <Contact />
            </section>
          </>
        }
      />

      <Route
        path="/privacypolicy"
        element={
          <>
            <Globalnavbar /> 
            <Privacypolicy />
          </>
        }
      />
       <Route
          path="/cookiepolicy"
          element={
            <>
              <Globalnavbar />
              <Cookiepolicy />
            </>
          }
        />
         <Route
          path="/termsandconditions"
          element={
            <>
              <Globalnavbar />
              <Termsandconditions />
            </>
          }
        />
    </Routes>
    <Footer />
  </BrowserRouter>
);
}

export default App;
