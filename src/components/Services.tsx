
import React, { useState } from 'react';
import { LayoutGrid, Briefcase, Settings, Brain, Lightbulb, Code } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  detailedDescription: string; // Added for more details
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <p className="section-title-pretext justify-center">
          <span className="text-primary text-2xl mr-2">*</span> MY SERVICE PROVIDE
        </p>
        <h2 className="section-title !text-3xl md:!text-4xl mb-16">
          MY BEST QUALITY SERVICE
        </h2>
        
        <Dialog open={!!selectedService} onOpenChange={(isOpen) => { if (!isOpen) setSelectedService(null); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <DialogTrigger key={index} asChild onClick={() => setSelectedService(service)}>
                <div 
                  className="animate-on-scroll solid-dark-card rounded-xl p-8 text-left transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary/20 [perspective:1000px] hover:transform hover:-translate-y-1 hover:scale-[1.03] hover:rotate-x-[2deg] hover:-rotate-y-[2deg] cursor-pointer"
                >
                  <div className="mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </DialogTrigger>
            ))}
          </div>

          {selectedService && (
            <DialogContent className="sm:max-w-[525px] bg-card border-border text-foreground">
              <DialogHeader>
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-primary">
                    {/* Re-render the icon in the dialog */}
                    {React.cloneElement(selectedService.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">{selectedService.title}</DialogTitle>
                </div>
                <DialogDescription className="text-gray-300 text-sm text-left whitespace-pre-line leading-relaxed pt-2 max-h-[60vh] overflow-y-auto">
                  {selectedService.detailedDescription}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Services;

