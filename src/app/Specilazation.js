import React from 'react';
import styled from 'styled-components';

const Specialization = () => {
  return (
    <SpecializationSection>
      <Container>
        <Heading>Specialization</Heading>
        <Paragraph>
          I specialize in full-stack web development and consulting for businesses looking to expand their online presence or streamline their operations. My services focus on:
        </Paragraph>
        <SpecializationList>
          <ListItem>
            <ListItemIcon>▶︎</ListItemIcon>
            <ListItemText>
              <strong>Web Design & Development</strong>: Crafting dynamic, responsive websites and applications that elevate user experience.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>▶︎</ListItemIcon>
            <ListItemText>
              <strong>Consulting Services</strong>: Helping businesses optimize technology for growth and efficiency.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>▶︎</ListItemIcon>
            <ListItemText>
              <strong>AI Integration</strong>: Building and experimenting with AI tools to drive innovation in both consumer-facing and business applications.
            </ListItemText>
          </ListItem>
        </SpecializationList>
      </Container>
    </SpecializationSection>
  );
};

// Styled Components
const SpecializationSection = styled.section`
  background-color: #1c1c1c;
  padding: 60px 20px;
  color: #f0f0f0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Heading = styled.h3`
  font-size: 2.5rem;
  color: rgb(0, 216, 255);
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #bdbdbd;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const SpecializationList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ListItemIcon = styled.span`
  color: rgb(0, 216, 255); // Neon green for the icon
  font-size: 1.5rem;
  margin-right: 10px;
`;

const ListItemText = styled.span`
  font-size: 1.2rem;
  color: #bdbdbd;
  line-height: 1.6;

  strong {
    color: #f0f0f0;
  }
`;

export default Specialization;
