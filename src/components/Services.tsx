
import React from 'react';
import { Briefcase, LayoutGrid, Settings, Brain, Lightbulb } from 'lucide-react'; // Example icons

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <LayoutGrid size={32} />, // Using Lucide icon
      title: "UI/UX Design",
      description: "Professional wireframing, prototyping, and user testing to create intuitive and engaging user interfaces.",
    },
    {
      icon: <Briefcase size={32} />, // Using Lucide icon
      title: "Web Design & Development",
      description: "Creating responsive websites with dynamic features and modern front-end technologies.",
    },
    {
      icon: <Settings size={32} />, // Using Lucide icon
      title: "IoT Solutions & Consulting",
      description: "Designing and implementing sensor-based smart systems with cloud integration for various applications.",
    },
    {
      icon: <Brain size={32} />, // Using Lucide icon
      title: "AI Integration & Prompt Engineering",
      description: "Creating intelligent assistants and implementing NLP automation for businesses and projects.",
    },
    {
      icon: <Lightbulb size={32} />, // Using Lucide icon
      title: "Project Ideation & Innovation",
      description: "Consulting on patentable product concepts and mentoring students and startups on innovation.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background"> {/* Updated background */}
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">My Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-on-scroll solid-dark-card rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="w-16 h-16 rounded-lg bg-dark-contrast flex items-center justify-center text-primary mb-6"> {/* Icon container style from reference */}
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
