import React from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects1 from './sections/Projects1';
import Experiences from './sections/Experiences';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects1 />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;