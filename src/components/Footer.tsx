
import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'; // Added Twitter as an example

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://linkedin.com/in/" },
    { name: "Instagram", icon: <Instagram size={20} />, href: "https://instagram.com/" },
    // { name: "Twitter", icon: <Twitter size={20} />, href: "https://twitter.com/" }, // Example
  ];

  return (
    <footer className="bg-card border-t border-border/50"> {/* Changed bg to card */}
      <div className="container mx-auto py-10 px-6 md:px-12 text-center">
        <a 
          href="#home" 
          className="text-3xl font-bold text-white inline-block mb-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-primary"
        >
          Pranav {/* Changed SIFT to Pranav and added hover animation */}
        </a>
        
        <div className="flex justify-center space-x-5 mb-6">
          {socialLinks.map(link => (
            <a 
              key={link.name}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out hover:scale-125 hover:-translate-y-1" // Enhanced hover animation
            >
              {link.icon}
            </a>
          ))}
        </div>
            
        <p className="text-gray-500 text-sm animate-fade-in animation-delay-200"> {/* Added subtle fade-in */}
          &copy; {year} Pranav Kumar. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-1 animate-fade-in animation-delay-400"> {/* Added subtle fade-in */}
          Inspired by SIFT template.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
