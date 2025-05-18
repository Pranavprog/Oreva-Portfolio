import React from 'react';
import { LayoutGrid, Briefcase, Settings, Brain, Lightbulb, Code } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <LayoutGrid size={28} className="text-primary" />,
      title: "UI/UX DESIGN",
      description: "Crafting intuitive and engaging user interfaces through wireframing, prototyping, and user testing.",
    },
    {
      icon: <Code size={28} className="text-primary" />,
      title: "FRONT-END DEVELOPMENT",
      description: "Building responsive and dynamic websites using modern front-end technologies.",
    },
    {
      icon: <Briefcase size={28} className="text-primary" />,
      title: "WEB DESIGN",
      description: "Creating visually appealing and user-friendly websites tailored to your brand and goals.",
    },
    {
      icon: <Settings size={28} className="text-primary" />,
      title: "IOT SOLUTIONS",
      description: "Designing smart, sensor-based systems with cloud integration for diverse applications.",
    },
    {
      icon: <Brain size={28} className="text-primary" />,
      title: "AI INTEGRATION",
      description: "Developing intelligent assistants and NLP automation for enhanced business processes.",
    },
    {
      icon: <Lightbulb size={28} className="text-primary" />,
      title: "INNOVATION CONSULTING",
      description: "Guiding patentable product concepts and mentoring in technology innovation.",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-on-scroll solid-dark-card rounded-xl p-8 text-left transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary/20 [perspective:1000px] hover:transform hover:-translate-y-1 hover:scale-[1.03] hover:rotate-x-[2deg] hover:-rotate-y-[2deg]"
            >
              <div className="mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
