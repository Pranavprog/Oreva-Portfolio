
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
  speed: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(window.innerWidth / 10, 80);
    
    // Mouse position
    let mouse = {
      x: 0,
      y: 0,
      radius: 100
    };
    
    window.addEventListener('mousemove', function(e) {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    
    // Create particles
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * (canvas.width - size * 2);
        const y = Math.random() * (canvas.height - size * 2);
        const directionX = Math.random() * 1 - 0.5;
        const directionY = Math.random() * 1 - 0.5;
        const speed = Math.random() * 0.5;
        
        // Random color from teal, electric blue and neon green with opacity
        const colors = ['rgba(96, 165, 250, 0.7)', 'rgba(20, 184, 166, 0.7)', 'rgba(74, 222, 128, 0.7)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particlesArray.push({
          x, y, directionX, directionY, size, color, speed
        });
      }
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Update position
        p.x += p.directionX * p.speed;
        p.y += p.directionY * p.speed;
        
        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.directionX = -p.directionX;
        if (p.y < 0 || p.y > canvas.height) p.directionY = -p.directionY;
        
        // Check proximity to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * 5;
          const directionY = forceDirectionY * force * 5;
          
          p.x -= directionX;
          p.y -= directionY;
        }
        
        // Draw connections
        for (let j = i; j < particlesArray.length; j++) {
          const p2 = particlesArray[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.1 - distance/1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', function(e) {
        mouse.x = e.x;
        mouse.y = e.y;
      });
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
