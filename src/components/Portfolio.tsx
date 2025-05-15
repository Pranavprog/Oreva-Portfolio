import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
      image: "https://via.placeholder.com/600x400?text=SANTRUPTHI",
    },
    {
      id: 2,
      title: "GitHub AI Auto-Issue Triage System",
      description: "NLP-based automated issue resolution system for GitHub repositories.",
      category: "ai",
      image: "https://via.placeholder.com/600x400?text=GitHub+AI",
    },
    {
      id: 3,
      title: "Portfolio Design",
      description: "Custom portfolio website with focus on UI/UX and responsive design.",
      category: "web",
      image: "https://via.placeholder.com/600x400?text=Portfolio+Design",
    },
    {
      id: 4,
      title: "Smart Door Lock",
      description: "IoT-based door lock system with smartphone connectivity.",
      category: "iot",
      image: "https://via.placeholder.com/600x400?text=Smart+Door+Lock",
    },
    {
      id: 5,
      title: "DIY AR Shades",
      description: "Object recognition and gesture detection using OpenCV and Python.",
      category: "innovation",
      image: "https://via.placeholder.com/600x400?text=AR+Shades",
    },
    {
      id: 6,
      title: "Theoretical Nano Robots Model",
      description: "Conceptual model for curing heart attacks using nano technology.",
      category: "innovation",
      image: "https://via.placeholder.com/600x400?text=Nano+Robots",
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
    <section id="portfolio" className="section-padding bg-deep-dark">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">My Portfolio</h2>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-3 animate-on-scroll">
          {categories.map(category => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none
              ${activeCategory === category.id 
                ? 'bg-primary text-background' 
                : 'bg-dark-contrast text-gray-300 hover:bg-primary/80 hover:text-background'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-on-scroll group">
              <div className="solid-dark-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                     <span className="text-xs text-background bg-primary px-2 py-1 rounded font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 h-16 overflow-hidden">
                    {project.description}
                  </p>
                  <button className="mt-2 text-primary hover:text-lime-300 font-medium text-sm transition-colors duration-300 flex items-center group">
                    View Details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
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
