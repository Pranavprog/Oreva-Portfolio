
import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const ScrollingRocket: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show rocket after scrolling 100px
      setIsVisible(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  // Calculate rocket position based on scroll
  const rocketPosition = (scrollY * 0.5) % (window.innerHeight + 200);
  const horizontalOffset = Math.sin(scrollY * 0.005) * 50;

  return (
    <div 
      className="fixed z-50 pointer-events-none transition-all duration-300 ease-out"
      style={{
        left: `calc(5% + ${horizontalOffset}px)`,
        top: `${rocketPosition - 100}px`,
        transform: `rotate(${15 + horizontalOffset * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Rocket trail */}
        <div 
          className="absolute -z-10 w-8 h-32 rounded-full opacity-30"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #ff6b35 50%, #f39c12 100%)',
            transform: 'translateX(-50%) translateY(100%)',
            left: '50%',
            animation: 'pulse 0.5s ease-in-out infinite alternate'
          }}
        />
        
        {/* Rocket icon */}
        <Rocket 
          size={32}
          className="text-orange-500 drop-shadow-lg animate-bounce"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(255, 107, 53, 0.5))',
          }}
        />
        
        {/* Sparkle effects */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-300" />
      </div>
    </div>
  );
};

export default ScrollingRocket;
