
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-blue border-t border-gray-800">
      <div className="container mx-auto py-8 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              <span className="text-electric-blue">P</span>ranav
            </a>
            <p className="text-gray-400 mt-2">
              Creating digital experiences that blend creativity and technology.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="#home" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Portfolio
              </a>
              <a 
                href="#services" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              &copy; {year} Pranav Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
