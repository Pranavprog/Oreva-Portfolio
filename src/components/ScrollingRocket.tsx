
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

  // Define roadmap waypoints as a path the rocket follows
  const roadmapPath = [
    { x: 10, y: 0, rotation: 45 },      // Start - top left
    { x: 30, y: 20, rotation: 0 },     // Move right
    { x: 25, y: 40, rotation: -30 },   // Curve down-left
    { x: 40, y: 60, rotation: 30 },    // Curve right
    { x: 20, y: 80, rotation: -45 },   // Sharp left turn
    { x: 50, y: 100, rotation: 45 },   // Move to center-right
    { x: 35, y: 120, rotation: -15 },  // Slight left
    { x: 45, y: 140, rotation: 15 },   // Slight right
    { x: 30, y: 160, rotation: -30 },  // Left turn
    { x: 60, y: 180, rotation: 60 },   // Sharp right
    { x: 15, y: 200, rotation: -60 },  // Sharp left to edge
  ];

  // Calculate progress based on scroll (0 to 1)
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  
  // Calculate which segment of the path we're on
  const pathProgress = scrollProgress * (roadmapPath.length - 1);
  const currentIndex = Math.floor(pathProgress);
  const nextIndex = Math.min(currentIndex + 1, roadmapPath.length - 1);
  const segmentProgress = pathProgress - currentIndex;

  // Interpolate between current and next waypoint
  const currentPoint = roadmapPath[currentIndex] || roadmapPath[0];
  const nextPoint = roadmapPath[nextIndex] || roadmapPath[roadmapPath.length - 1];

  const interpolatedX = currentPoint.x + (nextPoint.x - currentPoint.x) * segmentProgress;
  const interpolatedY = currentPoint.y + (nextPoint.y - currentPoint.y) * segmentProgress;
  const interpolatedRotation = currentPoint.rotation + (nextPoint.rotation - currentPoint.rotation) * segmentProgress;

  // Convert percentages to actual pixel positions
  const xPosition = (interpolatedX / 100) * window.innerWidth;
  const yPosition = (interpolatedY / 100) * window.innerHeight;

  return (
    <div 
      className="fixed z-50 pointer-events-none transition-all duration-150 ease-out"
      style={{
        left: `${xPosition}px`,
        top: `${yPosition}px`,
        transform: `rotate(${interpolatedRotation}deg)`,
      }}
    >
      <div className="relative">
        {/* Rocket trail */}
        <div 
          className="absolute -z-10 w-6 h-20 rounded-full opacity-40"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #ff6b35 50%, #f39c12 100%)',
            transform: 'translateX(-50%) translateY(100%)',
            left: '50%',
            animation: 'pulse 0.3s ease-in-out infinite alternate'
          }}
        />
        
        {/* Rocket icon */}
        <Rocket 
          size={28}
          className="text-orange-500 drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(255, 107, 53, 0.6))',
          }}
        />
        
        {/* Sparkle effects */}
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" />
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-200" />
        
        {/* Road path indicator (optional visual guide) */}
        <div 
          className="absolute w-1 h-1 bg-primary/30 rounded-full -z-20"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 8px rgba(163, 230, 53, 0.3)'
          }}
        />
      </div>
    </div>
  );
};

export default ScrollingRocket;
