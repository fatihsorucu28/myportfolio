import React from 'react';

const AboutSection = () => {
  return (
    <div id="about-section" style={styles.container}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.heading}>Introduction</h2>
          <div style={styles.dot}></div>
          <p style={styles.paragraph}>
            Hello! My name is Fatih Sorucu, and I am a freshman at BYUI. I have a
            strong passion for programming and technology, and I'm eager to embark
            on new challenges and opportunities in the field.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.heading}>Work Experience</h2>
          <div style={styles.dot}></div>
          <p style={styles.paragraph}>
            - Position: Web Developer Intern <br />
            - Company: XYZ Tech Solutions <br />
            - Duration: June 2023 - August 2023 <br />
            - Responsibilities: Developed and maintained web applications using
            HTML, CSS, JavaScript, and React.js.
          </p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.heading}>Projects</h2>
          <div style={styles.dot}></div>
          <p style={styles.paragraph}>
            - Project 1: RPG Game <br />
            - Description: 
The RPG Quest System is a text-based adventure game project written in C++, simulating a role-playing game environment where players can create characters, choose classes (such as Warrior, Mage, or Archer), explore different locations (Town, Forest, and Cave), and interact with non-player characters (NPCs) to embark on quests.
<br />
            - Technologies Used: C++ <br />
            - GitHub Repository: <a href='https://github.com/fatihsorucu28/RPGProject'>Link</a> <br />
          </p>
          <p style={styles.paragraph}>
            - Project 2: Personal Portfolio Website <br />
            - Description: Designed and developed a portfolio website to showcase
            my skills and projects. <br />
            - Technologies Used: CSS, React.js <br />
            - GitHub Repository: <a href="https://github.com/fatihsorucu28/my-portfolio">Link</a> <br />
          </p>
        </div>
      </div>
      <div style={styles.line}></div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  content: {
    maxWidth: '600px',
    position: 'relative',
    zIndex: '2', // Ensure content is above the line
  },
  section: {
    marginLeft: '3em',
    float: 'left',
    marginBottom: '30px',
    paddingLeft: '40px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: '24px',
    margin: '0',
    flexGrow: 0,
    marginRight: '20px',
  },
  paragraph: {
    height : '35em',
    width: '15em',
    marginLeft: '6em',
    fontSize: '16px',
    lineHeight: '1.6',
    flexGrow: 1,
    float: 'left',
    paddingLeft: '20px', // Add padding to align with dots
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#333',
    position: 'absolute',
    left: '-26px', // Adjust position to align with section
    top: '50%', // Align with the middle of the section
    transform: 'translateY(-50%)', // Center vertically
    zIndex: '3', // Ensure dots are above the line
  },
  line: {
    width: '2px',
    height: '100%',
    background: '#333',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '1', // Ensure line is behind dots and content
  },
};


export default AboutSection;
