import React from 'react';
import { Card, Image, Segment, Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import Footer from './Footer';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'AESIR Speed Techs',
      description: 'A brief description of project one.',
      image: './AESIRSite.png',
      link: 'https://github.com/yourusername/project-one'
    },
    {
      id: 2,
      title: 'Date-smith',
      description: 'A brief description of project two.',
      image: './DateSmith.png',
      link: 'https://github.com/yourusername/project-two'
    },
    {
      id: 3,
      title: 'AAA Madlibs',
      description: 'A brief description of project one.',
      image: './Designer.png',
      link: 'https://github.com/yourusername/project-one'
    },
    {
      id: 4,
      title: 'BackYard Fantasy Football',
      description: 'A brief description of project two.',
      image: './BacKYardFantasyFootBall.png',
      link: 'https://github.com/yourusername/project-two'
    },
    {
      id: 5,
      title: 'Pokemon Card Shop',
      description: 'A brief description of project one.',
      image: '/ABACardShop.png',
      link: 'https://github.com/yourusername/project-one'
    }
    // Add more projects as needed
  ];

  return (
    <div>
      
      <Container>
        <section id="projects">
          <h2 style={{ textAlign: 'center', margin: '20px 0' }}>My Projects</h2>
          <Card.Group itemsPerRow={3} stackable>
            {projectsData.map(project => (
              <Card key={project.id} href={project.link} target="_blank">
                <Image src={project.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{project.title}</Card.Header>
                  <Card.Description>{project.description}</Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </section>
      </Container>
    
    </div>
  );
};

export default Projects;
