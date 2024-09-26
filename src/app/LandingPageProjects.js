import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Image, Icon, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import Slider from 'react-slick';
import StackIcon from "tech-stack-icons"; 

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const LandingPageProjects = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/projects', { replace: true });
    window.scrollTo(0, 0);
  };

  const projectsData = [
    {
      id: 1,
      title: 'AESIR Speed Techs',
      description: 'Website and booking software for AESIR Speed Techs.',
      image: '/AESIRSite2.png',
      link: '/projects',
      technologies: ['React', 'Redux', 'Python', 'Postgresql', 'SemanticUI', 'Flask'],
    },
    {
      id: 2,
      title: 'Stovetop Gemini',
      description: 'Website for Denver Rock Band Stovetop Gemini.',
      image: 'STGHome.png',
      link: '/projects',
      technologies: ['Python', 'React', 'Flask', 'Postgresql'],
    },
    {
      id: 3,
      title: 'Divided by Desert',
      description: 'Website for Denver Rock Band Divided by Desert.',
      image: 'DbyDhome.png',
      link: '/projects',
      technologies: ['React', 'CSS'],
    },
    {
      id: 4,
      title: 'Spot Ai',
      description: 'Friendly Ai travel assistant chatbot.',
      image: 'SpotHome.png',
      link: '/projects',
      technologies: ['Python', 'React', 'Openai', "sass"],
    },
    {
      id: 3,
      title: 'Pokemon Card Shop',
      description: 'Pokemon card e-commerce model.',
      image: 'ABACardShop.png',
      link: 'https://github.com/yourusername/project-one',
      technologies: [ 'JavaScript', 'Bootstrap', 'JSON'],
    },
    {
      id: 4,
      title: 'BackYard Fantasy Football',
      description: 'Backyard fantasy fotball game.',
      image: '/BacKYardFantasyFootBall.png',
      link: 'https://github.com/yourusername/project-two',
      technologies: ['React', 'CSS', 'JSON'],
    },
    {
      id: 5,
      title: 'AAA Madlibs',
      description: 'Backend CLI Madlib Game.',
      image: 'Designer.png',
      link: '/projects',
      technologies: ['Python', 'Mysql'],
    },
    // {
    //   id: 5,
    //   title: 'Date-smith',
    //   description: 'Match making project.',
    //   image: 'DateSmith.png',
    //   link: 'https://github.com/yourusername/project-two',
    //   technologies: ['React', 'Python', 'Mysql', 'CSS'],
    // },
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
        case 'openai':
          return 'openai';
        case 'sass':
          return 'sass';
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
            <StyledCard key={project.id} onClick={handleClick}>
              <StyledImage src={project.image} wrapped ui={false} />
              <Card.Content style={{display: 'flex', flexDirection: 'column'}}>
                <StyledCardHeader>{project.title}</StyledCardHeader>
                <StyledCardDescription>{project.description}</StyledCardDescription>
                <StyledCardMeta>
                  {project.technologies.map((technology, index) => (
                    <StackIcon key={index} name={getIconForTechnology(technology)} title={technology} style={{ width: '20px', height: '20px' }}/>
                  ))}
                </StyledCardMeta>
                <Button primary as='a' onClick={() => navigate(`/projects`)} style={{backgroundColor: '#4a90e2',
                  color: '#fff',
                  marginTop: '20px' }}>
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
  color: rgb(0, 216, 255); /* Blue color for header */
 
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
