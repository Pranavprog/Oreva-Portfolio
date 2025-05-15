
import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "SANTRUPTHI",
      description: "Smart canopy innovation for lactating mothers using automation and data collection.",
      category: "innovation",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "GitHub AI Auto-Issue Triage System",
      description: "NLP-based automated issue resolution system for GitHub repositories.",
      category: "ai",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 3,
      title: "Portfolio Design",
      description: "Custom portfolio website with focus on UI/UX and responsive design.",
      category: "web",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 4,
      title: "Smart Door Lock",
      description: "IoT-based door lock system with smartphone connectivity.",
      category: "iot",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 5,
      title: "DIY AR Shades",
      description: "Object recognition and gesture detection using OpenCV and Python.",
      category: "innovation",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 6,
      title: "Theoretical Nano Robots Model",
      description: "Conceptual model for curing heart attacks using nano technology.",
      category: "innovation",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'innovation', name: 'Innovations' },
    { id: 'iot', name: 'IoT Projects' },
    { id: 'ai', name: 'AI Projects' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-[#131c30] to-dark-blue">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">My Portfolio</h2>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4 animate-on-scroll">
          {categories.map(category => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 
              ${activeCategory === category.id 
                ? 'bg-electric-blue text-white' 
                : 'bg-muted text-gray-300 hover:bg-electric-blue/20'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-on-scroll">
              <div className="group glassmorphism rounded-xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-teal capitalize">
                      {project.category}
                    </span>
                    <button className="text-electric-blue hover:text-white transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
