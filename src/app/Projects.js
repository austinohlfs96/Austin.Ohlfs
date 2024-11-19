import React, { useState, useEffect } from 'react';
import { Container, Card, Image, Modal, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import StackIcon from "tech-stack-icons";
import MatrixRain from './MatrixRain';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Helper function
const getIconForTechnology = (technology) => {
  switch (technology.toLowerCase()) {
    case 'scss':
      return 'scss';
    case 'react':
      return 'reactjs';
    case 'flask':
      return 'flask';
    case 'postgresql':
      return 'postgresql';
    case 'python':
      return 'python';
    case 'redux':
      return 'redux';
    case 'css':
      return 'css3';
    case 'javascript':
      return 'js';
    case 'semanticui':
      return 'semanticui';
    default:
      return 'code';
  }
};

// Projects data
const projectsData = [
  {
    id: 1,
    isDeployed: true,
    title: 'AESIR Speed Techs',
    description: 'Created a fully functional website and booking system for AESIR Speed Techs, a service-based business specializing in high-performance ski and snowboard tuning.',
    images: [
      { src: '/AESIRSite2.png', description: 'AESIR Speed Techs Website' },
      { src: '/AESIRServices.png', description: 'AESIR Services Page' },
      { src: '/AESIRMobile.png', description: 'AESIR Mobile View' },
    ],
    link: 'https://capstone-deploy-14pb.onrender.com',
    technologies: ['React', 'Redux', 'Python', 'Postgresql', 'SemanticUI', 'Flask'],
    features: 'Real-time updates, User Authentication, Responsive Design',
    challenges: 'Implementing real-time features, Ensuring cross-browser compatibility',
    learnings: 'Advanced state management with Redux, Working with Flask for backend development',
    showDisclaimer: true, // Flag for the disclaimer
  },
  {
      id: 2,
      isDeployed: true,
      title: 'Stovetop Gemini Website',
      description: 'Built a dynamic and responsive website for the local Denver rock band, Stovetop Gemini. The site includes an integrated music player, band information, event scheduling, and social media links, offering a central hub for fans to engage with the band’s content.',
      images: [
        { src: '/STGHome.png', description: 'Home page of the Stovetop Gemini website' },
        { src: '/AboutSTG.png', description: 'Mobile view of the band’s site' },
        { src: 'STGmobile.png', description: 'About section showcasing the band members' },
      ],
      link: 'https://stovetopgemini.onrender.com/', // Deployed link
      technologies: ['React', 'Python', 'PostgreSQL', 'CSS'],
      features: 'Integrated Spotify and Instagram feeds, Custom video carousel for music videos, Mobile-first design',
      challenges: 'Implementing real-time updates for event scheduling and ensuring cross-browser compatibility for multimedia elements',
      learnings: 'Mastered advanced state management using Redux, Enhanced knowledge of backend development with Flask, Improved mobile responsiveness and cross-browser testing',
      showDisclaimer: true, // Flag for the disclaimer
    },
  {
    id: 3,
    isDeployed: true,
    title: 'Divided By Desert Website',
    description: 'Developed a sleek and responsive website for the Denver-based rock band, Divided by Desert. The site provides fans with band information, integrated music players, and social media connections. Visitors can stay updated with event schedules and enjoy multimedia content, including music videos and live performances.',
    images: [
      { src: 'DbyDhome.png', description: 'Home page of the Stovetop Gemini website' },
    ],
    link: 'https://bydesert.onrender.com/', // Deployed link
    technologies: ['React', 'CSS'],
    features: 'Integrated Spotify and Instagram feeds, Custom video carousel for music videos, Mobile-first design',
    challenges: 'Implementing real-time updates for event scheduling and ensuring cross-browser compatibility for multimedia elements',
    learnings: 'Mastered advanced state management using Redux, Enhanced knowledge of backend development with Flask, Improved mobile responsiveness and cross-browser testing',
  },
  {
    id: 4,
    title: 'Spot Ai',
    isDeployed: false,
    description: `Developed an AI-powered travel assistant chatbot, designed to provide personalized travel suggestions and itineraries for users. The chatbot interacts in real-time, utilizing OpenAI's natural language processing capabilities, making it an intelligent and user-friendly tool for travelers looking for tailored recommendations.`,
    images: [
      { src: 'SpotHome.png', description: 'Description for ABALight' },
      { src: 'SpotMobile.png', description: 'Description for ABALight'},
    ], // Add more image paths here
    link: 'https://spot-jo7o.onrender.com',
    technologies: ['Python', 'React', "Sass", 'Openai'],
    features: 'Interactive story creation, Database integration',
    challenges: 'Designing a user-friendly interface, Managing database connections',
    learnings: 'Enhancing Python skills, Database design and management',
    showDisclaimer: true, // Flag for the disclaimer
  },
  {
    id: 4,
    isDeployed: false,
    title: 'ABA Card Shop',
    description: 'A fully functional e-commerce model for Pokémon card enthusiasts. The site features dynamic content loading for card listings, a shopping cart system, and user-friendly navigation to allow customers to browse and purchase Pokémon cards seamlessly.',
    images: [
      { src: 'ABALight.png', description: 'Description for ABALight' },
      { src: 'ABACardShop.png', description: 'Description for ABACardShop' },
      { src: 'PokemonCart.png', description: 'Description for PokemonCart' },
    ], // Add more image paths here
    link: 'https://github.com/anthonyBosek/table-two-phase-one-project',
    technologies: ['JavaScript', 'Bootstrap', 'JSON', 'CSS', "HTML"],
    features: 'E-commerce functionality, Dynamic content loading',
    challenges: 'Handling user sessions, Integrating payment systems',
    learnings: 'Client-side JavaScript, Bootstrap for styling',
  },
  {
    id: 5,
    isDeployed: false,
    title: 'BackYard Fantasy Football',
    description: 'Backyard fantasy fotball game.',
    images: [
      { src: 'BacKYardFantasyFootBall.png', description: 'Description for ABALight' },
    ], // Add more image paths here
    link: 'https://github.com/isaacsong1/Backyard-Fantasy-Football',
    technologies: ['React', 'CSS', 'JSON'],
    features: 'Fantasy league management, Real-time scoring',
    challenges: 'Data synchronization, User interface design',
    learnings: 'React components and state management, CSS for responsive design',
  },
  // {
  //   id: 7,
  //   title: 'Date-smith',
  //   isDeployed: false,
  //   description: 'Match making project.',
  //   images: [
  //     { src: 'DateSmith.png', description: 'Description for ABALight' },
  //   ], // Add more image paths here
  //   link: 'https://github.com/isaacwilhite/table-3-phase-4-project',
  //   technologies: ['React', 'Python', 'Mysql', 'CSS'],
  //   features: 'Matchmaking algorithm, Secure user authentication',
  //   challenges: 'Algorithm design, Data security',
  //   learnings: 'Combining React with Python backend, Enhancing security practices',
  // },
  {
    id: 8,
    title: 'AAA Madlibs',
    isDeployed: false,
    description: 'A command-line based Madlibs game that offers a fun, interactive experience for users by generating custom stories based on user input. This game leverages a Python backend and a MySQL database to manage story templates and ensure a smooth gameplay experience.',
    images: [
      { src: 'Designer.png', description: 'Description for ABALight' },
    ],
    link: 'https://github.com/anthonyBosek/madlibs',
    technologies: ['Python', 'Mysql'],
    features: 'Interactive story creation, Database integration',
    challenges: 'Designing a user-friendly interface, Managing database connections',
    learnings: 'Enhancing Python skills, Database design and management',
  },
];

// Styled Components
const StyledContainer = styled(Container)`
  position: relative;
  padding: 20px;
  background: #000;
  color: #fff;
  min-height: 100vh;
  z-index: 1;
  margin-top: 60px;
  @media (max-width: 768px) {
    padding: 10px;
  }
  .matrix-rain-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -2;
  }
`;

const StyledMatrixRain = styled(MatrixRain)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.h2`
  text-align: center;
  color: #00e6e6;
  margin-bottom: 30px;
`;

const StyledCardGroup = styled(Card.Group)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  &&& {
    width: calc(100% - 40px);
    max-width: 300px;
    margin: 20px;
    background: linear-gradient(145deg, rgba(0, 0, 255, 0.4), rgba(0, 255, 255, 0.9));
    border: 1px solid rgb(62, 163, 163);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 24px rgba(0, 230, 230, 0.2);
      background: linear-gradient(145deg, rgba(0, 0, 255, 0.6), rgba(0, 255, 255, 1)) !important;
    }
    cursor: pointer;
  }
`;

const StyledCardContent = styled(Card.Content)`
  text-align: center;
`;

const StyledCardHeader = styled(Card.Header)`
  color: #fff !important;
`;

const StyledCardDescription = styled(Card.Description)`
  color: #e0e0e0 !important;
`;

const StyledCardMeta = styled(Card.Meta)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StyledModal = styled(Modal)`
  &&& {
    width: auto;
    max-width: 90vw !important;
    margin: auto;
    background: blue !important;
    color: #fff !important;
    .header {
      background: #212121 !important;
      color: #00e6e6 !important;
      text-align: center;
      font-size: 2em;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #212121 !important;
      .description {
        max-width: 800px;
        text-align: left;
      }
    }
    .actions {
      background: #212121 !important;
    }
    @media (max-width: 768px) {
      .header {
        font-size: 1.5em;
      }
      .content {
        padding: 10px;
      }
      .actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;

const ModalImageContainer = styled.div`


  width: auto;
  max-width: 90vw;
  margin-bottom: 20px;
  .slick-slider {
    .slick-dots li button:before {
      color: #00e6e6;
    }
  }
`;

const ModalImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;


const ImageDescription = styled.p`
  text-align: center;
  color: white;
  margin-top: 5px;
`;

const StyledModalDescription = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 20px;
  p {
    font-size: 1.1em;
    color: white;
    line-height: 1.5;
    margin-bottom: 10px;
    strong {
      color: #00e6e6;
    }
  }
`;

const TechnologiesUsed = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechnologyItem = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #fff;
`;

// Main Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Event handlers
  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <StyledContainer id='projectContainer'>
      <div className="matrix-rain-container">
        <StyledMatrixRain />
      </div>
      <StyledHeader>My Projects</StyledHeader>
      <StyledCardGroup>
        {projectsData.map((project) => (
          <StyledCard key={project.id} onClick={() => handleOpenModal(project)}>
            <StyledImage src={project.images[0].src} alt={project.title} />
            <StyledCardContent>
              <StyledCardHeader>{project.title}</StyledCardHeader>
              <StyledCardDescription>{project.description}</StyledCardDescription>
              <StyledCardMeta>
                {project.technologies.map((technology, index) => (
                  <StackIcon key={index} name={getIconForTechnology(technology)} title={technology} />
                ))}
              </StyledCardMeta>
            </StyledCardContent>
          </StyledCard>
        ))}
      </StyledCardGroup>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={handleCloseModal}
        />
      )}
    </StyledContainer>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const handleVisitSite = () => {
    if (project.showDisclaimer) {
      setShowDisclaimer(true); // Show disclaimer if applicable
    } else {
      window.open(project.link, '_blank');
    }
  };

  const handleProceed = () => {
    setShowDisclaimer(false);
    window.open(project.link, '_blank'); // Open site after confirmation
  };

  const sliderSettings = {
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <StyledModal open={isOpen} onClose={onClose}>
        <Modal.Header>{project.title}</Modal.Header>
        <Modal.Content scrolling>
          <ModalImageContainer>
            <Slider {...sliderSettings}>
              {project.images.map((image, index) => (
                <div key={index}>
                  <ModalImage src={image.src} alt={image.description} />
                  <ImageDescription>{image.description}</ImageDescription>
                </div>
              ))}
            </Slider>
          </ModalImageContainer>
          <Modal.Description>
            <StyledModalDescription>
              <p><strong>Description:</strong> {project.description}</p>
              <p><strong>Features:</strong> {project.features}</p>
              <p><strong>Challenges:</strong> {project.challenges}</p>
              <p><strong>Learnings:</strong> {project.learnings}</p>
              <div>
                <p><strong>Technologies Used:</strong></p>
                <TechnologiesUsed>
                  {project.technologies.map((technology, index) => (
                    <TechnologyItem key={index}>
                      <StackIcon name={getIconForTechnology(technology)} title={technology} /> {technology}
                    </TechnologyItem>
                  ))}
                </TechnologiesUsed>
              </div>
            </StyledModalDescription>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button 
            onClick={handleVisitSite}
            style={{ background: '#00e6e6', color: 'white' }}
          >
            {project.isDeployed ? 'Visit Site' : 'Visit Repo'} <Icon name='external' />
          </Button>
          <Button onClick={onClose}>Close</Button>
        </Modal.Actions>
      </StyledModal>

      {showDisclaimer && (
        <StyledModal open={showDisclaimer} onClose={() => setShowDisclaimer(false)}>
          <Modal.Header>Disclaimer</Modal.Header>
          <Modal.Content>
            <p>The page you are about to visit may take up to 60 seconds to load. Do you want to proceed?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button 
              onClick={handleProceed}
              style={{ background: '#00e6e6', color: 'white' }}
            >
              Proceed
            </Button>
            <Button onClick={() => setShowDisclaimer(false)}>Cancel</Button>
          </Modal.Actions>
        </StyledModal>
      )}
    </>
  );
}

export default Projects;