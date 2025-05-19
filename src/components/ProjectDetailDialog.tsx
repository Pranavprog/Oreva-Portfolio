import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Project } from '../data/projectsData'; // Corrected import path

interface ProjectDetailDialogProps {
  project: Project | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ProjectDetailDialog: React.FC<ProjectDetailDialogProps> = ({ project, isOpen, onOpenChange }) => {
  if (!project) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] bg-dark-contrast text-white border-lime-accent/30 p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-3xl font-bold text-lime-accent">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-400 pt-1">
            Category: {project.category}
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 space-y-5 max-h-[calc(100vh-150px)] overflow-y-auto styled-scrollbar"> {/* Adjusted max-h and added styled-scrollbar class if you have one */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h4 className="font-semibold text-xl text-white mb-2">Project Overview</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.longDescription}</p>
          </div>

          {project.challenges && (
            <div>
              <h4 className="font-semibold text-xl text-white mb-2">Challenges</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{project.challenges}</p>
            </div>
          )}

          {project.solutions && (
            <div>
              <h4 className="font-semibold text-xl text-white mb-2">Solutions Implemented</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{project.solutions}</p>
            </div>
          )}

          {project.results && (
            <div>
              <h4 className="font-semibold text-xl text-white mb-2">Results & Impact</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{project.results}</p>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div>
              <h4 className="font-semibold text-xl text-white mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-muted px-3 py-1.5 rounded-full text-gray-200 font-medium">{tag}</span>
                ))}
              </div>
            </div>
          )}

          {project.galleryImages && project.galleryImages.length > 0 && (
            <div>
              <h4 className="font-semibold text-xl text-white mb-3">Gallery</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.galleryImages.map((imgUrl, index) => (
                  <div key={index} className="aspect-video rounded-md overflow-hidden group relative">
                    <img 
                      src={imgUrl} 
                      alt={`${project.title} - Gallery Image ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="sm:justify-start p-6 bg-dark-contrast/50 border-t border-lime-accent/20">
          {project.liveLink && (
            <Button asChild variant="default" className="bg-lime-accent text-deep-dark hover:bg-lime-accent/90">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo <ExternalLink size={16} className="ml-2" />
              </a>
            </Button>
          )}
          {project.repoLink && (
            <Button asChild variant="outline" className="text-lime-accent border-lime-accent hover:bg-lime-accent/10 hover:text-lime-accent">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                View Code <ExternalLink size={16} className="ml-2" />
              </a>
            </Button>
          )}
          <DialogClose asChild>
            <Button type="button" variant="ghost" className="text-gray-400 hover:text-white hover:bg-muted/50 ml-auto sm:ml-2">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;
