import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar /> 
      <Hero />
      <AboutUs />
      <Menu />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
