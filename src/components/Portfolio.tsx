import React, { useState, useMemo } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import ProjectDetailDialog from './ProjectDetailDialog';
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Updated Project interface
export interface Project {
  id: number;
  title: string;
  description: string; 
  category: string;
  image: string; 
  tags?: string[];
  longDescription: string;
  challenges?: string;
  solutions?: string;
  results?: string;
  liveLink?: string;
  repoLink?: string;
  galleryImages?: string[];
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "SANTRUPTHI",
      description: "Smart canopy for lactating mothers using automation and data collection.",
      category: "Innovation",
      image: "https://i.postimg.cc/FzdfwFfk/360-view.jpg",
      tags: ["IoT", "Automation", "Healthcare", "ESP32"],
      longDescription: "SANTRUPTHI is an innovative project aimed at providing a comfortable and private space for lactating mothers in public areas. It features a smart canopy equipped with sensors for environmental control, automation for ease of use, and data collection capabilities to improve maternal health services. The system is designed to be user-friendly, secure, and easily deployable in various public settings.",
      challenges: "Key challenges included designing a cost-effective yet robust hardware solution, ensuring user privacy and data security, and developing an intuitive user interface.",
      solutions: "Utilized ESP32 microcontrollers for IoT connectivity, developed a custom mobile application for control, and implemented end-to-end encryption for data. The canopy design focused on modularity.",
      results: "The prototype received positive feedback for its utility and design. Future work includes integration with public health databases.",
      liveLink: undefined, 
      repoLink: "https://github.com/example/santrupthi",
      galleryImages: [
        "https://i.postimg.cc/FzdfwFfk/360-view.jpg",
        "https://via.placeholder.com/400x300.png?text=Santrupthi+UI",
        "https://via.placeholder.com/400x300.png?text=Santrupthi+Hardware"
      ],
    },
    {
      id: 2,
      title: "GitHub AI Auto-Issue Triage",
      description: "NLP-based automated issue resolution for GitHub repositories.",
      category: "AI",
      image: "https://i.postimg.cc/4dTXbzt0/git-hub.png",
      tags: ["AI", "NLP", "Development Tool", "Python", "GitHub API"],
      longDescription: "This project leverages Natural Language Processing (NLP) to automatically categorize, prioritize, and even suggest solutions for issues raised in GitHub repositories. It aims to streamline the development workflow by reducing manual triage efforts.",
      challenges: "Accurately understanding the intent and severity of diverse issues, integrating seamlessly with GitHub's ecosystem, and training a reliable NLP model were significant hurdles.",
      solutions: "Implemented a pipeline using BERT-based models for issue classification and keyword extraction. Used GitHub Actions for automation and a web dashboard for maintainers to review AI suggestions.",
      results: "Early tests showed a 40% reduction in manual triage time for maintainers on pilot repositories.",
      liveLink: undefined, 
      repoLink: "https://github.com/example/ai-issue-triage",
      galleryImages: [
        "https://i.postimg.cc/4dTXbzt0/git-hub.png",
        "https://via.placeholder.com/400x300.png?text=AI+Triage+Dashboard"
      ],
    },
    {
      id: 3,
      title: "Personal Portfolio Design",
      description: "Responsive portfolio website focused on modern UI/UX principles.",
      category: "Web",
      image: "https://i.postimg.cc/K8NWsBdV/portfolio.png",
      tags: ["Web Design", "UI/UX", "React", "TailwindCSS", "TypeScript"],
      longDescription: "A personal portfolio website designed and developed to showcase projects, skills, and experiences. The focus was on creating a clean, modern, and responsive user interface with engaging animations and a professional aesthetic. This very website is an instance of this project!",
      challenges: "Ensuring optimal performance across devices, creating a unique visual identity, and implementing smooth animations without compromising accessibility.",
      solutions: "Built with React and Tailwind CSS for a highly customizable and responsive layout. Utilized TypeScript for type safety and Vite for a fast development experience. Animations were carefully chosen and implemented using CSS transitions and Framer Motion (example).",
      results: "A visually appealing and performant portfolio site that effectively communicates skills and project work. Continuously updated with new projects and features.",
      liveLink: "#", 
      repoLink: undefined, 
      galleryImages: [
        "https://i.postimg.cc/K8NWsBdV/portfolio.png",
        "https://via.placeholder.com/400x300.png?text=Portfolio+Mobile+View",
        "https://via.placeholder.com/400x300.png?text=Portfolio+Dark+Mode"
      ],
    },
    {
      id: 4,
      title: "Smart Door Lock System",
      description: "IoT-based door lock with smartphone connectivity and security features.",
      category: "IoT",
      image: "https://i.postimg.cc/0Qg7YHVq/smart-lock.png",
      tags: ["IoT", "Security", "Hardware", "Raspberry Pi", "Mobile App"],
      longDescription: "An IoT-enabled smart door lock system that allows users to lock and unlock their doors remotely via a smartphone application. Features include activity logs, temporary access codes, and tamper alerts.",
      challenges: "Ensuring robust security against physical and cyber threats, maintaining low power consumption for battery operation, and creating a reliable communication protocol between the lock and the smartphone.",
      solutions: "Used a Raspberry Pi Zero W for the core logic, an electric strike plate for the locking mechanism, and MQTT for secure communication. The mobile app was developed using React Native.",
      results: "A functional prototype demonstrating secure and convenient remote access control. Successfully tested for reliability and security vulnerabilities.",
      liveLink: undefined,
      repoLink: "https://github.com/example/smart-door-lock",
      galleryImages: [
        "https://i.postimg.cc/0Qg7YHVq/smart-lock.png",
        "https://via.placeholder.com/400x300.png?text=Smart+Lock+App+UI"
      ],
    },
  ];

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDetailDialogOpen(true);
  };

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach(project => {
      project.tags?.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!selectedTag) {
      return projects;
    }
    return projects.filter(project => project.tags?.includes(selectedTag));
  }, [projects, selectedTag]);

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 4);

  const handleToggleShowAll = () => {
    setShowAllProjects(prev => !prev);
  };

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <p className="section-title-pretext justify-center">
          <span className="text-primary text-2xl mr-2">*</span> PROJECTS FEATURES
        </p>
        <h2 className="section-title !text-3xl md:!text-4xl mb-8">
          OUR FEATURES PROJECTS
        </h2>

        <div className="mb-10 flex justify-center flex-wrap gap-2">
          <ToggleGroup 
            type="single" 
            value={selectedTag || "all"}
            onValueChange={(value) => {
              if (value === "all" || !value) { 
                setSelectedTag(null);
              } else {
                setSelectedTag(value);
              }
            }}
            className="flex-wrap justify-center"
          >
            <ToggleGroupItem value="all" aria-label="All projects" className="border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground hover:bg-primary/10">
              All
            </ToggleGroupItem>
            {allTags.map(tag => (
              <ToggleGroupItem key={tag} value={tag} aria-label={`Filter by ${tag}`} className="border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground hover:bg-primary/10">
                {tag}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        
        {filteredProjects.length === 0 && selectedTag && (
          <p className="text-gray-400 mb-12">No projects found for the tag "{selectedTag}".</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
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
                  onClick={() => handleViewDetails(project)}
                  className="text-primary hover:text-lime-300 font-medium text-sm transition-colors duration-300 flex items-center group/button"
                >
                  View Details <ArrowRight size={16} className="ml-1 group-hover/button:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length > 4 && (
          <button onClick={handleToggleShowAll} className="btn-primary">
             {showAllProjects ? 'Show Less Projects' : `View More Projects (${filteredProjects.length - 4} more)`}
          </button>
        )}
        {(filteredProjects.length <= 4 || showAllProjects) && projects.length > 4 && !showAllProjects && filteredProjects.length > 0 && (
           <button onClick={handleToggleShowAll} className="btn-primary">
            View All {filteredProjects.length > 0 ? filteredProjects.length : ''} Projects
           </button>
        )}
        {filteredProjects.length === projects.length && projects.length > 4 && !showAllProjects && (
            <button onClick={handleToggleShowAll} className="btn-primary">
                View More Projects
            </button>
        )}
      </div>
      <ProjectDetailDialog 
        project={selectedProject}
        isOpen={isDetailDialogOpen}
        onOpenChange={setIsDetailDialogOpen}
      />
    </section>
  );
};

export default Portfolio;
