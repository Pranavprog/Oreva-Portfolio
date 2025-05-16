import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react'; // Using Code as a placeholder for PRANAV logo icon

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg py-4' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold text-white flex items-center group">
          <Code size={30} className="text-primary mr-2 group-hover:animate-pulse" /> {/* PRANAV Logo placeholder */}
          <span className="font-heading tracking-wide">PRANAV</span>
        </a>
        
        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link" // Uses text-gray-300 hover:text-primary
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col px-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link text-lg py-3 border-b border-border/50 last:border-none"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
