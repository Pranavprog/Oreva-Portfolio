
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import FloatingDesignElements from '../components/FloatingDesignElements';

const Index = () => {
  // Animation on scroll functionality
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate');
        }
      });
    };
    
    // Run once on initial load
    animateOnScroll();
    
    // Add event listener for scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-blue text-white overflow-x-hidden">
      <ParticleBackground />
      <FloatingDesignElements />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
