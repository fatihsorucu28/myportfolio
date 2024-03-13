import React, { useState } from 'react';

const ProjectCard = ({ logo, description, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        width: '15em',
        height: '20em',
        backgroundColor: hovered ? '#555' : '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        margin: '0.8em',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={logo}
        alt="Project Logo"
        style={{
          width: '5em',
          marginBottom: '1em',
          transition: 'transform 0.3s ease-in-out',
          transform: hovered ? 'scale(0.8)' : 'scale(1)',
        }}
      />
      <div
        style={{
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          textAlign: 'center',
        }}
      >
        <p>{description}</p>
        <a href={href}
          style={{
            backgroundColor: '#fff',
            fontFamily : 'Poppins',
            fontSize : '1em',
            color: 'white',
            border: '0.2em solid white',
            backgroundColor: 'transparent',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Go to the project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
