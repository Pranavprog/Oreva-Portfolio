
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 mt-10 md:mt-0">
            <span className="text-electric-blue text-lg md:text-xl mb-2 inline-block animate-fade-in delay-100">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in delay-200">
              Pranav Kumar
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 animate-fade-in delay-300">
              <span className="text-teal">Computer Science</span> Student & <span className="text-neon-green">Innovator</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed animate-fade-in delay-400">
              Passionate about blending creativity and technical expertise to build 
              human-centric digital solutions. Aspiring professional web designer and developer.
            </p>
            <div className="flex space-x-4 animate-fade-in delay-500">
              <a 
                href="#portfolio" 
                className="px-6 py-3 rounded-lg bg-electric-blue hover:bg-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg border border-teal text-teal hover:bg-teal hover:text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-blue via-teal to-neon-green opacity-20 blur-2xl animate-pulse-glow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-electric-blue/30">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-teal/20"></div>
                <img 
                  src="https://via.placeholder.com/400x400" 
                  alt="Pranav Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
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
          className="text-electric-blue"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
