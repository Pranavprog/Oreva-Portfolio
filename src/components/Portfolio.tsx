import React, { useState } from 'react';
import ProjectDetailDialog from './ProjectDetailDialog';
import ProjectCard from './ProjectCard';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { projects as allProjectsData, type Project } from '../data/projectsData'; // Import projects data and Project type
import { useProjectFilters } from '../hooks/useProjectFilters'; // Import the custom hook

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Use the custom hook for filtering logic
  const { allTags, filteredProjects } = useProjectFilters(allProjectsData, selectedTag);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDetailDialogOpen(true);
  };

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
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {filteredProjects.length > 4 && (
          <button onClick={handleToggleShowAll} className="btn-primary">
             {showAllProjects ? 'Show Less Projects' : `View More Projects (${filteredProjects.length - 4} more)`}
          </button>
        )}
        {(filteredProjects.length <= 4 || showAllProjects) && allProjectsData.length > 4 && !showAllProjects && filteredProjects.length > 0 && (
           <button onClick={handleToggleShowAll} className="btn-primary">
            View All {filteredProjects.length > 0 ? filteredProjects.length : ''} Projects
           </button>
        )}
        {filteredProjects.length === allProjectsData.length && allProjectsData.length > 4 && !showAllProjects && (
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
