import React, { useState } from 'react';
import { Grid, Modal, Button, Icon, Card } from 'semantic-ui-react';
import styled from 'styled-components';
import Slider from 'react-slick';
import StackIcon from "tech-stack-icons"; 


import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Skills = ({ isMobile }) => {
  const initialSkills = [
    { name: "JavaScript", icon: "js" , category: "Frontend" },
    { name: "React", icon: "reactjs", category: "Frontend" },
    { name: "Python", icon: "python", category: "Backend" },
    { name: "Openai", icon: "openai", category: "Backend" },
    { name: "PostgreSQL", icon: "postgresql", category: "Backend" },
    { name: "Node.js", icon: "nodejs", category: "Backend" },
    // { name: "Express.js", icon: "server", category: "Backend" },
    { name: "Sass", icon: "sass", category: "Frontend" },
    { name: "HTML5", icon: "html5", category: "Frontend" },
    { name: "CSS3", icon: "css3", category: "Frontend" },
    // { name: "SQL", icon: "database", category: "Backend" },
    { name: "MySQL", icon: "mysql", category: "Backend" },
    // { name: "SQLite", icon: "database", category: "Backend" },
    { name: "Flask", icon: "flask", category: "Backend" },
    { name: "Github", icon: "github", category: "DevOps" },
    { name: "Redux", icon: "redux", category: "Frontend" },
    { name: "GraphQL", icon: "graphql", category: "Frontend" },
    { name: "npm", icon: "npm", category: "Frontend" },
    // { name: "RESTful APIs", icon: "code", category: "Backend" },
    { name: "AWS", icon: "aws", category: "DevOps" },
    // { name: "Webpack", icon: "cogs", category: "DevOps" },
    // { name: "Babel", icon: "cogs", category: "DevOps" },
    // { name: "OAuth", icon: "lock", category: "DevOps" },
    // { name: "JWT", icon: "key", category: "DevOps" },
    { name: "Postman", icon: "postman", category: "DevOps" },
    { name: "Render", icon: "render", category: "DevOps" },
    { name: "Semantic UI", icon: "semanticui", category: "Frontend" },
    // { name: "SEO", icon: "search", category: "DevOps" },
    { name: "VSCode", icon: "vscode", category: "DevOps" },
    // { name: "Data Structures and Algorithms", icon: "code branch", category: "DevOps" }
  ];

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const categories = Array.from(new Set(initialSkills.map(skill => skill.category)));

  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 3,
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
const header = '<Tech Stack/>'
  return (
     <Container>
      <Header>{header}</Header>
      {/* <Grid>
        <Grid.Column width={isMobile ? 16 : 8}> */}

            <div style={{display: 'flex', flexDirection: 'row'}}>
            {initialSkills.slice(0,6).map((skill, index) => (
             
             <StackIcon name={skill.icon } style={{display: 'flex', flexDirection: 'row', fontSize: '2em'}}/>
             
              
            ))}
          
          </div>
          <MoreButton onClick={toggleModal} >
         <Icon  style={{display: 'contents', fontFamily: 'Montserrat, sans-serif'}}>More</Icon>
          </MoreButton>
          
        {/* </Grid.Column>
      </Grid> */}
      <Modal
        open={showModal}
        onClose={toggleModal}
        closeIcon
        size='small'
        centered
      >
        <ModalHeader>All Skills</ModalHeader>
        <ModalContent scrolling>
          {categories.map((category, index) => (
            <div key={index} style={{display: 'flex', flexDirection: 'column'}}>
              <CategoryHeader>{category}</CategoryHeader>
              <SkillsList>
                {initialSkills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div style={{display: "flex", flexDirection: 'column'}}>
                      <StackIcon name={skill.icon } style={{fontSize: '2em'}}/>
                      <p>{skill.icon ? skill.name : null}</p>
                    </div>
                     
                      
                   
                  ))}
              </SkillsList>
            </div>
          ))}
        </ModalContent>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;
  text-align: center;
  background: linear-gradient(45deg, rgb(182 189 198), #2a75b3);
  border-radius: 10px
`;

const Header = styled.h2`
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #fff; /* White text color for header */
`;

const SkillSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin: 0 10px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SliderContainer = styled.div`
  margin-bottom: 20px;
  .slick-slider {
    margin: 0 auto;
    padding: 0 20px;
  }
  .slick-slide {
    outline: none; /* Remove outline on slide focus */
  }
`;

const CategoryHeader = styled.h3`
  margin-bottom: 20px;
  color: #fff; /* Darker Teal */
  text-align: center;
  padding-left: 10px;
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
  margin: 10px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled(Icon)`
  &&& {
    font-size: 2em;
    
  }
`;

const SkillName = styled.span`
  margin-top: 10px;
  font-size: 1.2em;
  color: #333;
`;

const MoreButton = styled(Button)`
  &&& {
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for button */
    color: #fff; /* White text color for button */
    margin-top: 20px;
  }
`;

const ModalHeader = styled(Modal.Header)`
  &&& {
    background: linear-gradient(45deg, rgb(182 189 198), #2a75b3); /* Semi-transparent background for modal header */
    color: #fff; /* White text color for modal header */
    text-align: center;
    font-size: 1.5em;
  }
`;

const ModalContent = styled(Modal.Content)`
  &&& {
    background: linear-gradient(45deg, rgb(182 189 198), #2a75b3);
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
