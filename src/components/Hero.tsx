
import React from 'react';
import { Download, ArrowRight } from 'lucide-react'; // Added icons for buttons

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32 md:pt-24">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image Section - Adjusted for new layout */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start order-1 md:order-none animate-fade-in delay-100">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-lime-500 to-green-500 opacity-20 blur-2xl animate-pulse-glow"></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-primary/30 shadow-2xl">
                {/* Placeholder for profile image, suggest user to replace */}
                <img 
                  src="https://via.placeholder.com/400x400?text=Pranav+Kumar" 
                  alt="Pranav Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-none">
            <span className="text-primary text-lg md:text-xl mb-2 inline-block animate-fade-in delay-200">
              Hi, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in delay-300">
              Pranav Kumar
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 animate-fade-in delay-400">
              A <span className="text-primary">UI/UX Designer</span> & <span className="text-lime-300">Developer</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in delay-500">
              Passionate about blending creativity and technical expertise to build 
              human-centric digital solutions. Aspiring professional web designer and developer.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start animate-fade-in delay-600">
              <a 
                href="#contact" // Assuming CV download could be part of contact or a direct link later
                className="px-8 py-3 rounded-md bg-primary hover:bg-lime-500 text-background font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>
              <a 
                href="#portfolio" 
                className="px-8 py-3 rounded-md border border-primary text-primary hover:bg-primary hover:text-background font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
              >
                View My Work <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - style updated */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-0">
        <span className="text-gray-400 mb-2">Scroll Down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-primary" // Use primary color
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
