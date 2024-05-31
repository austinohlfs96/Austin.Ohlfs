import React, { useState, useEffect } from 'react';
import { Container, Card, Image, Modal, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import StackIcon from "tech-stack-icons";
import MatrixRain from './MatrixRain';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const projectsData = [
    {
      id: 1,
      title: 'AESIR Speed Techs',
      description: 'Website and booking software for AESIR Speed Techs.',
      images: ['/AESIRSite2.png', '/AESIRServices.png', 'AESIRMobile.png'], // Add more image paths here
      link: 'https://capstone-deploy-14pb.onrender.com',
      technologies: ['React', 'Redux', 'Python', 'Postgresql', 'SemanticUI', 'Flask'],
      features: 'Real-time updates, User Authentication, Responsive Design',
      challenges: 'Implementing real-time features, Ensuring cross-browser compatibility',
      learnings: 'Advanced state management with Redux, Working with Flask for backend development',
    },
    {
      id: 2,
      title: 'Pokemon Card Shop',
      description: 'Pokemon card e-commerce model.',
      images: ['ABALight.png', 'ABACardShop.png', 'PokemonCart.png'], // Add more image paths here
      link: 'https://github.com/anthonyBosek/table-two-phase-one-project',
      technologies: ['JavaScript', 'Bootstrap', 'JSON'],
      features: 'E-commerce functionality, Dynamic content loading',
      challenges: 'Handling user sessions, Integrating payment systems',
      learnings: 'Client-side JavaScript, Bootstrap for styling',
    },
    {
      id: 3,
      title: 'BackYard Fantasy Football',
      description: 'Backyard fantasy fotball game.',
      images: ['/BacKYardFantasyFootBall.png', '/BacKYardFantasyFootBall2.png'], // Add more image paths here
      link: 'https://github.com/isaacsong1/Backyard-Fantasy-Football',
      technologies: ['React', 'CSS', 'JSON'],
      features: 'Fantasy league management, Real-time scoring',
      challenges: 'Data synchronization, User interface design',
      learnings: 'React components and state management, CSS for responsive design',
    },
    {
      id: 4,
      title: 'Date-smith',
      description: 'Match making project.',
      images: ['DateSmith.png', 'DateSmith2.png'], // Add more image paths here
      link: 'https://github.com/isaacwilhite/table-3-phase-4-project',
      technologies: ['React', 'Python', 'Mysql', 'CSS'],
      features: 'Matchmaking algorithm, Secure user authentication',
      challenges: 'Algorithm design, Data security',
      learnings: 'Combining React with Python backend, Enhancing security practices',
    },
    {
      id: 5,
      title: 'AAA Madlibs',
      description: 'Backend CLI Madlib Game.',
      images: ['Designer.png', 'Designer2.png'], // Add more image paths here
      link: 'https://github.com/anthonyBosek/madlibs',
      technologies: ['Python', 'Mysql'],
      features: 'Interactive story creation, Database integration',
      challenges: 'Designing a user-friendly interface, Managing database connections',
      learnings: 'Enhancing Python skills, Database design and management',
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <StyledContainer id='projectContainer' >
      <div className="matrix-rain-container">
      <StyledMatrixRain />
      </div>
    
      {/* <StyledSection id="projects"> */}
        <StyledHeader style={{textAlign: 'center'}}>My Projects</StyledHeader>
        <StyledCardGroup itemsPerRow={3} stackable>
          {projectsData.map((project) => (
            <StyledCard key={project.id} onClick={() => handleOpenModal(project)}>
              <StyledImage src={project.images[0]} wrapped ui={false} style={{width: isMobile ? "100%" : '30vw'}}/>
              <StyledCardContent>
                <StyledCardHeader style={{color: "rgb(62, 163, 163)"}}>{project.title}</StyledCardHeader>
                <StyledCardDescription style={{color: "rgb(62, 163, 163)"}}>{project.description}</StyledCardDescription>
                <StyledCardMeta>
                  {project.technologies.map((technology, index) => (
                    <StackIcon key={index} name={getIconForTechnology(technology)} title={technology} style={{width: '5vw', height: 'auto'}} />
                  ))}
                </StyledCardMeta>
              </StyledCardContent>
            </StyledCard>
          ))}
        </StyledCardGroup>
        
      {/* </StyledSection> */}

      {selectedProject && (
        <StyledModal open={true} onClose={handleCloseModal}>
          <Modal.Header style={{textAlign: 'center'}}>{selectedProject.title}</Modal.Header>
          <Modal.Content image scrolling>
          <Image.Group>
              <Slider {...settings}>
              {selectedProject.images.map((image, index) => (
                <div key={index}>
                  <Image src={image} wrapped />
                </div>
              ))}
            </Slider>
            </Image.Group>

            <Modal.Description>
              <StyledModalDescription>
                <p><strong>Description:</strong> {selectedProject.description}</p>
                <p><strong>Features:</strong> {selectedProject.features}</p>
                <p><strong>Challenges:</strong> {selectedProject.challenges}</p>
                <p><strong>Learnings:</strong> {selectedProject.learnings}</p>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}><strong>Technologies Used:</strong>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                  {selectedProject.technologies.map((technology, index) => (
                    <span key={index} style={{display: 'flex', flexDirection: 'column'}}>
                      {' '}
                      <StackIcon name={getIconForTechnology(technology)} title={technology} /> {technology}
                    </span>
                  ))}
                  </div>
                </p>
                </div>
                
              </StyledModalDescription>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => window.open(selectedProject.link, '_blank')} style={{ background: '#00e6e6', color: 'white' }}>
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
  position: relative;
  padding: 40px;
  background: linear-gradient(to bottom, #000000, #000000); /* Example gradient */
  color: #ffffff;
  min-height: 100vh;
  z-index: 1;
  margin-top: 60px;
  

  @media (max-width: 768px) { // Adjust the maximum width as needed
    width: 100%; // Adjust the width for smaller screens
    margin-left: 0px !important; // Adjust margin-left for smaller screens
    margin-right: 0px !important; // Adjust margin-right for smaller screens
  }


  .matrix-rain-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: -webkit-fill-available;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    overflow: hidden;
    z-index: -2;
    font-size: 0.8em; /* Adjust the font size as needed */
  }
`;

const StyledMatrixRain = styled(MatrixRain)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const StyledSection = styled.section`
  text-align: center;
`;

const StyledHeader = styled.h2`
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #00e6e6;
 

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes glow {
    from { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00e6e6, 0 0 20px #00e6e6, 0 0 25px #00e6e6, 0 0 30px #00e6e6, 0 0 35px #00e6e6; }
    to { text-shadow: 0 0 10px #fff, 0 0 20px #00e6e6, 0 0 30px #00e6e6, 0 0 40px #00e6e6, 0 0 50px #00e6e6, 0 0 60px #00e6e6, 0 0 70px #00e6e6; }
  }
`;

const StyledCardGroup = styled(Card.Group)`
&&& {
  display: 'flex';
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

const StyledCard = styled(Card)`
  &&& {
    display: flex;
    flex-direction: row;
    filter: drop-shadow(0 0 20px rgba(0, 0, 255, 0.7));
    align-items: center;
    width: 1000px !important;
    background: linear-gradient(145deg, rgba(0, 0, 255, 0.4), rgba(0, 255, 255, 0.2));
    border: 1px solid rgb(62, 163, 163);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 230, 230, 0.1);
    height: 100%; /* Ensure each card takes the full height of its grid cell */
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease; /* Add transition for smooth effect */
    
   

    &:hover {
      background: linear-gradient(145deg, rgba(0, 0, 255, 0.7), rgba(0, 255, 255, 0.5)) !important;
      box-shadow: 0 12px 24px rgba(0, 230, 230, 0.2);
      transform: scale(1.05); /* Slightly enlarge the card */
    }
    cursor: pointer;
  }
`;


const StyledCardContent = styled(Card.Content)`
display: flex;
flex-direction: column;
align-items: center;
height: 100%; /* Ensure the content takes the full height of the card */
`;

const StyledCardHeader = styled(Card.Header)`
flex: 1; /* Allow the header to grow to fill the available space */
overflow: hidden;
text-overflow: ellipsis; /* Truncate text if it overflows */
white-space: nowrap; /* Prevent text from wrapping */
color: rgb(62, 163, 163);
`;

const StyledCardDescription = styled(Card.Description)`
flex: 1; /* Allow the description to grow to fill the available space */
overflow: hidden;
text-overflow: ellipsis; /* Truncate text if it overflows */
color: rgb(62, 163, 163);
`;

const StyledCardMeta = styled(Card.Meta)`
display: flex;
justify-content: center;
margin-top: 10px;
`;

const StyledImage = styled(Image)`
  border-radius: 10px 10px 0 0 !important;
  width:  20em;
  height: auto;
  
`;

const StyledModal = styled(Modal)`
  &&& {
    .header {
      font-size: 1.8em;
      color: #00e6e6;
      background: #212121;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #212121;
      color: #ffffff;
      img {
        border-radius: 10px;
        margin-bottom: 10px;
      }
    }
    .actions {
      display: flex;
      justify-content: space-between;
      background: #212121;
    }
  }
`;

const StyledModalDescription = styled.div`
  text-align: left;
  margin-top: 20px;
  p {
    font-size: 1.1em;
    color: #e0e0e0;
    line-height: 1.5;
    margin-bottom: 10px;
    strong {
      color: #00e6e6;
    }
  }
`;

export default Projects;
