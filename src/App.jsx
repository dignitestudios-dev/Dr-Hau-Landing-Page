import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
