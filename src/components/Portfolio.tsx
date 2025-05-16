
import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react'; // Eye icon for view project

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags?: string[]; // Optional tags for more detail
}

const Portfolio: React.FC = () => {
  // Filter state is removed as per reference design (no explicit filter buttons shown)
  // To re-add, activeCategory state and filter buttons would be needed.
  
  const projects: Project[] = [
    {
      id: 1,
      title: "SANTRUPTHI",
      description: "Smart canopy for lactating mothers using automation and data collection.",
      category: "Innovation",
      image: "https://i.postimg.cc/FzdfwFfk/360-view.jpg", // Updated image
      tags: ["IoT", "Automation", "Healthcare"],
    },
    {
      id: 2,
      title: "GitHub AI Auto-Issue Triage",
      description: "NLP-based automated issue resolution for GitHub repositories.",
      category: "AI",
      image: "https://i.postimg.cc/4dTXbzt0/git-hub.png", // Updated image
      tags: ["AI", "NLP", "Development Tool"],
    },
    {
      id: 3,
      title: "Personal Portfolio Design",
      description: "Responsive portfolio website focused on modern UI/UX principles.",
      category: "Web",
      image: "https://i.postimg.cc/K8NWsBdV/portfolio.png", // Updated image
      tags: ["Web Design", "UI/UX", "React"],
    },
    {
      id: 4,
      title: "Smart Door Lock System",
      description: "IoT-based door lock with smartphone connectivity and security features.",
      category: "IoT",
      image: "https://i.postimg.cc/0Qg7YHVq/smart-lock.png", // Updated image
      tags: ["IoT", "Security", "Hardware"],
    },
    // ... Add more projects if needed, following the template of showing 4-6 main ones
  ];

  // The reference shows about 4 main projects then a "View More".
  // For simplicity, showing all defined projects.
  const displayedProjects = projects.slice(0, 4); // Or simply 'projects' if showing all

  return (
    <section id="portfolio" className="section-padding bg-background"> {/* Changed bg to background */}
      <div className="container mx-auto text-center">
        <p className="section-title-pretext justify-center">
          <span className="text-primary text-2xl mr-2">*</span> PROJECTS FEATURES
        </p>
        <h2 className="section-title !text-3xl md:!text-4xl mb-16">
          OUR FEATURES PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div key={project.id} className="animate-on-scroll group solid-dark-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-64 md:h-72">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                   <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <span className="text-xs text-background bg-primary px-3 py-1 rounded-full font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 text-left"> {/* Details below image */}
                <p className="text-gray-400 text-sm mb-4 h-16 overflow-hidden">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-muted px-2 py-1 rounded text-gray-300">{tag}</span>
                    ))}
                  </div>
                )}
                <button className="text-primary hover:text-lime-300 font-medium text-sm transition-colors duration-300 flex items-center group/button">
                  View Details <ArrowRight size={16} className="ml-1 group-hover/button:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <a href="#" className="btn-primary"> {/* View More Projects Button */}
           View More Project
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
