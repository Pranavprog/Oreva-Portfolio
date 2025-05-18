
import { useMemo } from 'react';
import type { Project } from '../data/projectsData'; // Import Project type from its new location

export const useProjectFilters = (projects: Project[], selectedTag: string | null) => {
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

  return { allTags, filteredProjects };
};
