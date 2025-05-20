
import React, { useState } from 'react';
import { LayoutGrid, Briefcase, Settings, Brain, Lightbulb, Code } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Service } from '@/types/service';
import { useServiceAnimations } from '@/hooks/useServiceAnimations';
import ServiceCard from './ServiceCard';
import ServiceDialogContent from './ServiceDialogContent';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { 
    containerVariants, 
    cardVariants,
    iconContainerVariants,
    serviceTitleVariants,
    serviceDescriptionVariants 
  } = useServiceAnimations();

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

  return (
    <section id="services" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.p
          className="section-title-pretext justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-2xl mr-2 animate-pulse-glow">*</span> MY SERVICE PROVIDE
        </motion.p>
        <motion.h2
          className="section-title !text-3xl md:!text-4xl mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
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
              <ServiceCard
                key={index}
                service={service}
                onClick={() => setSelectedService(service)}
                cardVariants={cardVariants} // Pass down the specific variant object
                iconContainerVariants={iconContainerVariants}
                serviceTitleVariants={serviceTitleVariants}
                serviceDescriptionVariants={serviceDescriptionVariants}
              />
            ))}
          </motion.div>

          {selectedService && (
            <DialogContent className="sm:max-w-[525px] bg-card border-border text-foreground">
              <ServiceDialogContent service={selectedService} />
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Services;
