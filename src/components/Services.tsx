
import React, { useState, useEffect } from 'react';
import { LayoutGrid, Briefcase, Settings, Brain, Lightbulb, Code } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  detailedDescription: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const services: Service[] = [
    {
      icon: <LayoutGrid size={28} className="text-primary" />,
      title: "UI/UX DESIGN",
      description: "Crafting intuitive and engaging user interfaces through wireframing, prototyping, and user testing.",
      detailedDescription: `Our UI/UX design process is deeply rooted in understanding your users. We begin with comprehensive research, user personas, and journey mapping. 
This leads to wireframes and interactive prototypes, which are then rigorously tested with real users. 
We iterate based on feedback to ensure the final design is not only visually stunning but also intuitive, accessible, and aligned with your business objectives. 
We use industry-standard tools like Figma, Adobe XD, and Sketch to deliver pixel-perfect designs and style guides.`,
    },
    {
      icon: <Code size={28} className="text-primary" />,
      title: "FRONT-END DEVELOPMENT",
      description: "Building responsive and dynamic websites using modern front-end technologies.",
      detailedDescription: `We specialize in building high-performance, responsive, and scalable front-end applications. 
Using modern JavaScript frameworks and libraries like React, Next.js, or Vue.js, and leveraging TypeScript for robust code, we transform designs into dynamic user experiences. 
Our focus is on clean code architecture, optimal performance (Core Web Vitals), SEO-friendliness, and seamless integration with backend services via APIs. 
We ensure cross-browser compatibility and adherence to accessibility standards (WCAG).`,
    },
    {
      icon: <Briefcase size={28} className="text-primary" />,
      title: "WEB DESIGN",
      description: "Creating visually appealing and user-friendly websites tailored to your brand and goals.",
      detailedDescription: `Our web design services focus on creating a unique and compelling online presence for your brand. 
We combine aesthetic appeal with strategic thinking to design websites that not only look great but also drive conversions. 
This includes responsive design for all devices, custom graphics, and a content strategy that speaks to your target audience. 
We work closely with you to understand your brand identity and business goals, ensuring the final design is a true reflection of your vision.`,
    },
    {
      icon: <Settings size={28} className="text-primary" />,
      title: "IOT SOLUTIONS",
      description: "Designing smart, sensor-based systems with cloud integration for diverse applications.",
      detailedDescription: `We develop end-to-end IoT solutions, from hardware selection and firmware development to cloud platform integration and data analytics. 
Our expertise covers a range of applications, including smart homes, industrial automation, and environmental monitoring. 
We focus on creating secure, scalable, and reliable systems using technologies like ESP32, Raspberry Pi, MQTT, and various cloud IoT platforms (AWS IoT, Azure IoT Hub). 
We can help you turn your innovative IoT concepts into market-ready products.`,
    },
    {
      icon: <Brain size={28} className="text-primary" />,
      title: "AI INTEGRATION",
      description: "Developing intelligent assistants and NLP automation for enhanced business processes.",
      detailedDescription: `Leverage the power of Artificial Intelligence to optimize your operations and create innovative products. 
We offer AI integration services including custom machine learning model development, Natural Language Processing (NLP) solutions for text analysis and chatbots, and computer vision applications. 
Whether it's automating tasks, deriving insights from data, or building intelligent features, we can help you integrate AI effectively into your existing systems or develop new AI-powered applications.`,
    },
    {
      icon: <Lightbulb size={28} className="text-primary" />,
      title: "INNOVATION CONSULTING",
      description: "Guiding patentable product concepts and mentoring in technology innovation.",
      detailedDescription: `Navigate the complexities of technology innovation with our expert consulting services. 
We help businesses and startups identify emerging technology trends, develop innovative product concepts, and create strategies for bringing them to market. 
Our services include ideation workshops, technology roadmapping, feasibility studies, and guidance on intellectual property, including support for developing patentable ideas. 
We also offer mentorship programs for tech teams and entrepreneurs.`,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateY: -15, rotateX: 15 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotateY: 0, 
      rotateX: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      rotateX: -5,
      boxShadow: "0px 10px 20px rgba(163, 230, 53, 0.3)",
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    tap: {
      scale: 0.98,
      rotateY: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 5,
      color: "#c1ff72",
      transition: { yoyo: Infinity, duration: 1.5 }
    }
  };

  // Parallax effect for cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!inView) return;
      
      document.querySelectorAll('.service-card').forEach(card => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to card center
        const distanceX = e.clientX - cardCenterX;
        const distanceY = e.clientY - cardCenterY;
        
        // Apply subtle rotation based on mouse position (limited effect)
        const rotateY = distanceX * 0.01; 
        const rotateX = -distanceY * 0.01;
        
        (card as HTMLElement).style.transform = 
          `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [inView]);

  return (
    <section id="services" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.p 
          className="section-title-pretext justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-2xl mr-2 animate-pulse-glow">*</span> MY SERVICE PROVIDE
        </motion.p>
        <motion.h2 
          className="section-title !text-3xl md:!text-4xl mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          MY BEST QUALITY SERVICE
        </motion.h2>
        
        <Dialog open={!!selectedService} onOpenChange={(isOpen) => { if (!isOpen) setSelectedService(null); }}>
          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <DialogTrigger key={index} asChild onClick={() => setSelectedService(service)}>
                <motion.div 
                  className="service-card solid-dark-card rounded-xl p-8 text-left cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div className="mb-5" variants={iconVariants} whileHover="hover">
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* 3D layered elements */}
                  <motion.div 
                    className="absolute -bottom-1 -right-1 w-20 h-20 opacity-20" 
                    style={{ 
                      transform: "translateZ(-10px)",
                      background: "linear-gradient(135deg, transparent, rgba(163, 230, 53, 0.3))",
                      borderRadius: "50%",
                      filter: "blur(8px)"
                    }}
                  />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
                        initial={{ 
                          x: Math.random() * 100 - 50, 
                          y: Math.random() * 100 - 50,
                          opacity: 0.1
                        }}
                        animate={{ 
                          x: Math.random() * 100 - 50, 
                          y: Math.random() * 100 - 50,
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ 
                          duration: 3 + Math.random() * 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </DialogTrigger>
            ))}
          </motion.div>

          {selectedService && (
            <DialogContent className="sm:max-w-[525px] bg-card border-border text-foreground">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <DialogHeader>
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="mr-4 text-primary"
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {React.cloneElement(selectedService.icon as React.ReactElement, { size: 32 })}
                    </motion.div>
                    <DialogTitle className="text-2xl font-bold text-white">
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {selectedService.title}
                      </motion.span>
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-gray-300 text-sm text-left whitespace-pre-line leading-relaxed pt-2 max-h-[60vh] overflow-y-auto">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedService.detailedDescription}
                    </motion.div>
                  </DialogDescription>
                </DialogHeader>
              </motion.div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Services;
