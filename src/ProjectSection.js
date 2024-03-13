import React from 'react';
import ProjectCard from './ProjectCard';
import logo1 from './images/c-logo.png'
const ProjectsSection = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5em' }}>
      <ProjectCard logo={logo1} href={"https://github.com/fatihsorucu28/TaskManager"} description="This is a Task Manager app that runs on the Command Prompt." />
      <ProjectCard logo={logo1} href={"https://github.com/fatihsorucu28/RPGProject"} description="This is a RPG Game that runs on the Command Prompt." />
      <ProjectCard logo={logo1} description="About to come..." />
    </div>
  );
};

export default ProjectsSection;
