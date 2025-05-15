
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-blue/80 glassmorphism shadow-lg py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          <span className="text-electric-blue">P</span>ranav
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full glassmorphism shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link py-3 border-b border-gray-700/50 last:border-none"
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
