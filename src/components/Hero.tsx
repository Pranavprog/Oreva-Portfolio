
import React from 'react';
import { Download, Play } from 'lucide-react'; // Play icon for Play Video button

const Hero: React.FC = () => {
  // Placeholder for orbiting skills - this would typically be more complex
  // For simplicity, we'll hint at it with text positioning or skip for now.
  // The design shows icons like WordPress, Figma, etc. which are not standard Lucide icons.

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32 md:pt-24 overflow-hidden">
      {/* Decorative asterisks - example */}
      <span className="deco-asterisk hidden md:block" style={{ top: '20%', right: '15%', transform: 'rotate(15deg)' }}>✲</span>
      <span className="deco-asterisk hidden md:block" style={{ bottom: '15%', left: '10%', transform: 'rotate(-15deg)', fontSize: '3rem' }}>✱</span>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image Section - Circular image */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start order-1 md:order-1 animate-fade-in delay-100 relative">
            {/* Orbiting "Best Skills On:" - simplified */}
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-xs text-gray-400 hidden md:block">
              {/* Best Skills On: (WordPress, Figma icons would go here) */}
            </div>
            <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-lime-500/30 to-green-500/30 opacity-50 blur-2xl animate-pulse-glow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl animated-border">
                <img 
                  src="https://via.placeholder.com/400x400?text=Pranav" // User should replace with actual image
                  alt="Pranav Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle/ring around image from reference */}
              <div className="absolute inset-[-10px] border-2 border-primary/20 rounded-full animate-spin-slow hidden md:block"></div>
              <div className="absolute inset-[-20px] border border-primary/10 rounded-full animate-ping-slowly hidden md:block"></div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-2">
            <span className="text-primary text-lg md:text-xl mb-2 inline-block animate-fade-in delay-200 font-medium">
              👋 Hi, I'm Pranav Kumar
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in delay-300 leading-tight">
              A UI/UX DESIGNER
              <br />
              <span className="text-gray-300">& DEVELOPER</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in delay-400">
              As a dedicated professional with a passion for innovation, I bring expertise in UI/UX design & development to craft meaningful digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start animate-fade-in delay-500">
              <a 
                href="#contact" // Assuming CV download is part of contact or a direct link later
                className="btn-primary text-lg" // Use new button style
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>
              <a 
                href="#portfolio" // Placeholder for Play Video action
                className="btn-secondary text-lg" // Use new button style
              >
                <Play size={20} className="mr-2" />
                Play Video 
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator remains mostly the same, ensure colors match */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-0">
        <span className="text-gray-400 mb-2 text-sm">Scroll Down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-primary"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
