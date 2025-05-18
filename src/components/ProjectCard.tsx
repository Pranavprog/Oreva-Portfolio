import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/projectsData'; // Updated import path for Project type

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div 
      className="animate-on-scroll group solid-dark-card rounded-lg overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/20 [perspective:1000px] hover:transform hover:-translate-y-1 hover:scale-[1.03] hover:rotate-x-[2deg] hover:-rotate-y-[2deg]"
    >
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
      <div className="p-6 text-left">
        <p className="text-gray-400 text-sm mb-4 h-16 overflow-hidden">
          {project.description}
        </p>
        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0,3).map(tag => (
              <span key={tag} className="text-xs bg-muted px-2 py-1 rounded text-gray-300">{tag}</span>
            ))}
          </div>
        )}
        <button 
          onClick={() => onViewDetails(project)}
          className="text-primary hover:text-lime-300 font-medium text-sm transition-colors duration-300 flex items-center group/button"
        >
          View Details <ArrowRight size={16} className="ml-1 group-hover/button:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
