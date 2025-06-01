
import React, { useEffect, useState } from 'react';
import { Palette, Figma, Layers, Grid3X3, MousePointer2, Zap, Eye, Users } from 'lucide-react';

const FloatingDesignElements: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show elements after scrolling 50px
      setIsVisible(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  // Design principles and tools that move with scroll
  const designElements = [
    { 
      icon: <Palette size={24} className="text-pink-400" />, 
      label: "Color Theory",
      x: 5, 
      y: 15,
      speed: 0.3,
      delay: 0
    },
    { 
      icon: <Figma size={24} className="text-purple-400" />, 
      label: "Figma",
      x: 90, 
      y: 25,
      speed: 0.5,
      delay: 0.2
    },
    { 
      icon: <Layers size={24} className="text-blue-400" />, 
      label: "Visual Hierarchy",
      x: 15, 
      y: 45,
      speed: 0.4,
      delay: 0.4
    },
    { 
      icon: <Grid3X3 size={24} className="text-green-400" />, 
      label: "Grid System",
      x: 85, 
      y: 55,
      speed: 0.35,
      delay: 0.6
    },
    { 
      icon: <MousePointer2 size={24} className="text-orange-400" />, 
      label: "Interaction",
      x: 10, 
      y: 75,
      speed: 0.45,
      delay: 0.8
    },
    { 
      icon: <Zap size={24} className="text-yellow-400" />, 
      label: "Usability",
      x: 80, 
      y: 85,
      speed: 0.6,
      delay: 1.0
    },
    { 
      icon: <Eye size={24} className="text-cyan-400" />, 
      label: "Visual Design",
      x: 25, 
      y: 30,
      speed: 0.25,
      delay: 1.2
    },
    { 
      icon: <Users size={24} className="text-indigo-400" />, 
      label: "User Research",
      x: 70, 
      y: 40,
      speed: 0.55,
      delay: 1.4
    }
  ];

  // Calculate progress based on scroll
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = Math.min(scrollY / maxScroll, 1);

  return (
    <>
      {designElements.map((element, index) => {
        // Calculate floating movement
        const floatOffset = Math.sin((scrollY * element.speed * 0.01) + element.delay) * 20;
        const horizontalDrift = Math.cos((scrollY * element.speed * 0.008) + element.delay) * 15;
        
        // Calculate positions
        const xPosition = (element.x / 100) * window.innerWidth + horizontalDrift;
        const yPosition = (element.y / 100) * window.innerHeight + floatOffset + (scrollProgress * 100);

        return (
          <div
            key={index}
            className="fixed z-40 pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: `${xPosition}px`,
              top: `${yPosition}px`,
              transform: `translateX(-50%) translateY(-50%)`,
            }}
          >
            <div className="relative group">
              {/* Main element card */}
              <div 
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded">
                    {element.icon}
                  </div>
                  <span className="text-white text-xs font-medium hidden group-hover:block">
                    {element.label}
                  </span>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div 
                className="absolute inset-0 rounded-lg opacity-40 blur-sm -z-10"
                style={{
                  background: `linear-gradient(135deg, ${element.icon.props.className.includes('pink') ? '#ec4899' : 
                    element.icon.props.className.includes('purple') ? '#a855f7' :
                    element.icon.props.className.includes('blue') ? '#3b82f6' :
                    element.icon.props.className.includes('green') ? '#10b981' :
                    element.icon.props.className.includes('orange') ? '#f97316' :
                    element.icon.props.className.includes('yellow') ? '#eab308' :
                    element.icon.props.className.includes('cyan') ? '#06b6d4' :
                    '#6366f1'}20, transparent)`,
                }}
              />
              
              {/* Floating particles around each element */}
              <div className="absolute -inset-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingDesignElements;
