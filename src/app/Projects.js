import React, { useState } from 'react';
import { Container, Card, Image, Modal, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import StackIcon from "tech-stack-icons"; 

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'AESIR Speed Techs',
      description: 'A brief description of project one.',
      images: ['/AESIRSite.png', '/AESIRSite2.png'], // Add more image paths here
      link: 'https://capstone-deploy-14pb.onrender.com',
      technologies: ['React', 'Redux', 'Python', 'Postgresql', 'SemanticUI', 'Flask'],
      features: 'Real-time updates, User Authentication, Responsive Design',
      challenges: 'Implementing real-time features, Ensuring cross-browser compatibility',
      learnings: 'Advanced state management with Redux, Working with Flask for backend development',
    },
    {
      id: 2,
      title: 'AAA Madlibs',
      description: 'A brief description of project one.',
      images: ['Designer.png', 'Designer2.png'], // Add more image paths here
      link: 'https://github.com/anthonyBosek/madlibs',
      technologies: ['Python', 'Mysql'],
      features: 'Interactive story creation, Database integration',
      challenges: 'Designing a user-friendly interface, Managing database connections',
      learnings: 'Enhancing Python skills, Database design and management',
    },
    {
      id: 3,
      title: 'Pokemon Card Shop',
      description: 'A brief description of project one.',
      images: ['ABACardShop.png', 'ABACardShop2.png'], // Add more image paths here
      link: 'https://github.com/anthonyBosek/table-two-phase-one-project',
      technologies: ['JavaScript', 'Bootstrap', 'JSON'],
      features: 'E-commerce functionality, Dynamic content loading',
      challenges: 'Handling user sessions, Integrating payment systems',
      learnings: 'Client-side JavaScript, Bootstrap for styling',
    },
    {
      id: 4,
      title: 'BackYard Fantasy Football',
      description: 'A brief description of project two.',
      images: ['/BacKYardFantasyFootBall.png', '/BacKYardFantasyFootBall2.png'], // Add more image paths here
      link: 'https://github.com/isaacsong1/Backyard-Fantasy-Football',
      technologies: ['React', 'CSS', 'JSON'],
      features: 'Fantasy league management, Real-time scoring',
      challenges: 'Data synchronization, User interface design',
      learnings: 'React components and state management, CSS for responsive design',
    },
    {
      id: 5,
      title: 'Date-smith',
      description: 'A brief description of project two.',
      images: ['DateSmith.png', 'DateSmith2.png'], // Add more image paths here
      link: 'https://github.com/isaacwilhite/table-3-phase-4-project',
      technologies: ['React', 'Python', 'Mysql', 'CSS'],
      features: 'Matchmaking algorithm, Secure user authentication',
      challenges: 'Algorithm design, Data security',
      learnings: 'Combining React with Python backend, Enhancing security practices',
    },
    // Add more projects as needed
  ];

  const getIconForTechnology = (technology) => {
    switch (technology.toLowerCase()) {
      case 'react':
        return 'reactjs';
      case 'node.js':
        return 'node js';
      case 'flask':
        return 'flask';
      case 'mongodb':
        return 'database';
      case 'angular':
        return 'angular';
      case 'express':
        return 'server';
      case 'postgresql':
        return 'postgresql';
      case 'vue.js':
        return 'vuejs';
      case 'python':
        return 'python';
      case 'mysql':
        return 'mysql';
      case 'redux':
        return 'redux';
      case 'html':
        return 'html5';
      case 'css':
        return 'css3';
      case 'bootstrap':
        return 'bootstrap5';
      case 'javascript':
        return 'js';
      case 'semanticui':
        return 'semanticui';
      case 'json':
        return 'json';
      default:
        return 'code';
    }
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <StyledContainer>
      <StyledSection id="projects">
        <StyledHeader>My Projects</StyledHeader>
        <StyledCardGroup itemsPerRow={3} stackable>
          {projectsData.map((project) => (
            <StyledCard key={project.id}  onClick={() => handleOpenModal(project)}>
              <StyledImage src={project.images[0]} wrapped ui={false} />
              <Card.Content>
                <StyledCardHeader id={project.id}>{project.title}</StyledCardHeader>
                <StyledCardDescription>{project.description}</StyledCardDescription>
                <StyledCardMeta>
                  {project.technologies.map((technology, index) => (
                    <StackIcon key={index} name={getIconForTechnology(technology)} title={technology} />
                  ))}
                </StyledCardMeta>
              </Card.Content>
            </StyledCard>
          ))}
        </StyledCardGroup>
      </StyledSection>

      {selectedProject && (
        <StyledModal open={true} onClose={handleCloseModal}>
          <Modal.Header>{selectedProject.title}</Modal.Header>
          <Modal.Content image scrolling>
            <Image.Group size='medium'>
              {selectedProject.images.map((image, index) => (
                <Image key={index} src={image} wrapped />
              ))}
            </Image.Group>
            <Modal.Description>
              <StyledModalDescription>
                <p><strong>Description:</strong> {selectedProject.description}</p>
                <p><strong>Features:</strong> {selectedProject.features}</p>
                <p><strong>Challenges:</strong> {selectedProject.challenges}</p>
                <p><strong>Learnings:</strong> {selectedProject.learnings}</p>
                <p><strong>Technologies Used:</strong>
                  {selectedProject.technologies.map((technology, index) => (
                    <span key={index}>
                      {' '}
                      <StackIcon name={getIconForTechnology(technology)} title={technology} /> {technology}
                    </span>
                  ))}
                </p>
              </StyledModalDescription>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='blue' onClick={() => window.open(selectedProject.link, '_blank')}>
              Visit Project <Icon name='external' />
            </Button>
            <Button onClick={handleCloseModal}>Close</Button>
          </Modal.Actions>
        </StyledModal>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding: 40px;
`;

const StyledSection = styled.section`
  text-align: center;
`;

const StyledHeader = styled.h2`
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #4a90e2; /* Blue color for header */
`;

const StyledCardGroup = styled(Card.Group)`
  &&& {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
`;

const StyledCard = styled(Card)`
  &&& {
    border: 1px solid #4a90e2; /* Blue border color */
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(74, 144, 226, 0.2); /* Blue shadow */
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 12px 24px rgba(74, 144, 226, 0.4); /* Hover effect */
    }
    cursor: pointer;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 10px 10px 0 0 !important;
`;

const StyledCardHeader = styled(Card.Header)`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333; /* Dark text color */
`;

const StyledCardDescription = styled(Card.Description)`
  color: #666; /* Medium text color */
  margin-bottom: 15px;
`;

const StyledCardMeta = styled(Card.Meta)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const StyledIcon = styled(Icon)`
  &&& {
    display: flex;
    flex-direction: row;
    margin: 0 5px;
    color: #4a90e2; /* Blue icon color */
    font-size: 1.2em;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2); /* Hover effect */
    }
  }
`;

const StyledModal = styled(Modal)`
  &&& {
    .header {
      font-size: 1.8em;
      color: #4a90e2;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        border-radius: 10px;
        margin-bottom: 10px;
      }
    }
    .actions {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const StyledModalDescription = styled.div`
  text-align: left;
  margin-top: 20px;
  p {
    font-size: 1.1em;
    color: #333;
    line-height: 1.5;
    margin-bottom: 10px;
    strong {
      color: #4a90e2;
    }
  }
`;

export default Projects;
