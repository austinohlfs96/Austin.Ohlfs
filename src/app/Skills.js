import React, { useState } from 'react';
import { Grid, Modal, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Skills = ({ isMobile }) => {
  const initialSkills = [
    { name: "JavaScript", icon: "js", category: "Frontend" },
    { name: "React", icon: "react", category: "Frontend" },
    { name: "Python", icon: "python", category: "Backend" },
    { name: "HTML5/CSS3", icon: "html5", category: "Frontend" },
    { name: "Node.js", icon: "node js", category: "Backend" },
    { name: "Express.js", icon: "server", category: "Backend" },
    { name: "SQL", icon: "database", category: "Database" },
    { name: "PostgreSQL", icon: "database", category: "Database" },
    { name: "MySQL", icon: "database", category: "Database" },
    { name: "SQLite", icon: "database", category: "Database" },
    { name: "Git", icon: "git", category: "DevOps" },
    { name: "Redux", icon: "redux", category: "Frontend" },
    { name: "GraphQL", icon: "graphql", category: "Frontend" },
    { name: "RESTful APIs", icon: "code", category: "Backend" },
    { name: "AWS", icon: "aws", category: "DevOps" },
    { name: "Responsive Web Design", icon: "mobile alternate", category: "Frontend" },
    { name: "Webpack", icon: "cogs", category: "DevOps" },
    { name: "Babel", icon: "cogs", category: "DevOps" },
    { name: "OAuth", icon: "lock", category: "Security" },
    { name: "JWT", icon: "key", category: "Security" },
    { name: "UI/UX Design Principles", icon: "paint brush", category: "Design" },
    { name: "SEO", icon: "search", category: "Frontend" },
    { name: "Data Structures and Algorithms", icon: "code branch", category: "Programming" }
  ];

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <Header>Skills</Header>
      <Grid columns={isMobile ? 1 : 2}>
        {!isMobile && (
          <Grid.Column width={3}>
            <SkillsContainer>
              {initialSkills.slice(0, 12).map((skill, index) => (
                <SkillCard key={index}>
                  <SkillIcon name={skill.icon} />
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
              <MoreButton onClick={toggleModal}>
                <Icon name='ellipsis horizontal' />
              </MoreButton>
            </SkillsContainer>
          </Grid.Column>
        )}
        {isMobile && (
          <Grid.Column width={16}>
            <MoreButton onClick={toggleModal}>
              <Icon name='ellipsis horizontal' /> Tech Stack
            </MoreButton>
          </Grid.Column>
        )}
      </Grid>
      <Modal
        open={showModal}
        onClose={toggleModal}
        closeIcon
        size='small'
        centered
      >
        <ModalHeader>Tech Stack</ModalHeader>
        <ModalContent scrolling>
          <SkillsList>
            {initialSkills.map((skill, index) => (
              <SkillCard key={index}>
                <SkillIcon name={skill.icon} />
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsList>
        </ModalContent>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;
  text-align: center;
  background-color: #E0F7FA; /* Light Blue */
`;

const Header = styled.h2`
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #4A90E2; /* Matches the gradient */
`;

const SkillsContainer = styled.div`
  border-radius: 10px;
  text-align: center;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  margin-bottom: 10px;
  width: auto;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled(Icon)`
  &&& {
    font-size: 2em;
    color: #4A90E2;
  }
`;

const SkillName = styled.span`
  margin-top: 10px;
  font-size: 1.2em;
  color: #333;
`;

const MoreButton = styled(Button)`
  &&& {
    background-color: #00796B; /* Darker Teal */
    color: #FFFFFF; /* White */
    transition: background 0.5s;
    margin-top: 20px;

    &:hover {
      background-color: #004D40; /* Darker Darker Teal */
      color: #FFFFFF; /* White */
    }
  }
`;

const ModalHeader = styled(Modal.Header)`
  &&& {
    background: #0d0d0d;
    color: #27f5f5;
    text-align: center;
    font-size: 1.5em;
    border-bottom: 1px solid #27f5f5;
  }
`;

const ModalContent = styled(Modal.Content)`
  &&& {
    background: #0d0d0d;
    color: #fff;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style: none;
`;

export default Skills;
