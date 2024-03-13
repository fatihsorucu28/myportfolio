import React from 'react';
import ProjectCard from './ProjectCard';
import logo1 from './images/c-logo.png'
const ProjectsSection = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5em' }}>
      <ProjectCard logo={logo1} description="Project 1 Description" />
      <ProjectCard logo={logo1} description="Project 2 Description" />
      <ProjectCard logo={logo1} description="Project 3 Description" />
    </div>
  );
};

export default ProjectsSection;
