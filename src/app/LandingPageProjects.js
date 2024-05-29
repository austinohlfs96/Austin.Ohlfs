import React from 'react';
import { Container, Card, Image, Icon, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const LandingPageProjects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'AESIR Speed Techs',
      description: 'A brief description of project one.',
      image: '/AESIRSite.png',
      link: 'https://github.com/yourusername/project-one',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'AAA Madlibs',
      description: 'A brief description of project one.',
      image: 'Designer.png',
      link: 'https://github.com/yourusername/project-one',
      technologies: ['Vue.js', 'Django', 'SQLite'],
    },
    {
      id: 3,
      title: 'Pokemon Card Shop',
      description: 'A brief description of project one.',
      image: 'ABACardShop.png',
      link: 'https://github.com/yourusername/project-one',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 4,
      title: 'BackYard Fantasy Football',
      description: 'A brief description of project two.',
      image: '/BacKYardFantasyFootBall.png',
      link: 'https://github.com/yourusername/project-two',
      technologies: ['React Native', 'Express', 'MongoDB'],
    },
    {
      id: 5,
      title: 'Date-smith',
      description: 'A brief description of project two.',
      image: 'DateSmith.png',
      link: 'https://github.com/yourusername/project-two',
      technologies: ['Angular', 'Express', 'PostgreSQL'],
    },
    // Add more projects as needed
  ];

  const getIconForTechnology = (technology) => {
    switch (technology.toLowerCase()) {
      case 'react':
        return 'react';
      case 'node.js':
        return 'node js';
      case 'mongodb':
        return 'database';
      case 'angular':
        return 'angular';
      case 'express':
        return 'server';
      case 'postgresql':
        return 'database';
      case 'vue.js':
        return 'vuejs';
      case 'django':
        return 'python';
      case 'sqlite':
        return 'database';
      case 'react native':
        return 'react';
      case 'html':
        return 'html5';
      case 'css':
        return 'css3 alternate';
      case 'javascript':
        return 'js';
      default:
        return 'code';
    }
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
    <StyledContainer>
      <StyledSection>
        <StyledHeader>My Projects</StyledHeader>
        <Slider {...settings}>
          {projectsData.map((project) => (
            <StyledCard key={project.id} href={project.link} target="_blank">
              <StyledImage src={project.image} wrapped ui={false} />
              <Card.Content style={{display: 'flex', flexDirection: 'column'}}>
                <StyledCardHeader>{project.title}</StyledCardHeader>
                <StyledCardDescription>{project.description}</StyledCardDescription>
                <StyledCardMeta>
                  {project.technologies.map((technology, index) => (
                    <StyledIcon key={index} name={getIconForTechnology(technology)} title={technology} />
                  ))}
                </StyledCardMeta>
                <Button primary as='a' href="/projects" style={{backgroundColor: '#4a90e2',
                  color: '#fff', }}>
                  View Project
                </Button>
              </Card.Content>
            </StyledCard>
          ))}
        </Slider>
      </StyledSection>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding: 40px;
  
`;

const StyledSection = styled.section`
  text-align: center;

  border-radius: 10px;
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
    border-radius: 10px;
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
    margin: 0 5px;
    margin-bottom: 20px;
    color: #4a90e2; /* Blue icon color */
    font-size: 1.2em;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2); /* Hover effect */
    }
  }
`;

export default LandingPageProjects;
