import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Collaboration = () => {
  return (
    <CollaborationSection>
      <CollaborationContent>
        <h2>Let's Collaborate</h2>
        <p>
          Whether you're navigating the slopes or building the web, we can work together to harness technology and elevate your business. 
          I'd love to hear from you!
        </p>
        <p>
          Have a project in mind? Let's connect and make it happen.
        </p>
        <ButtonGroup>
          <StyledButton href="mailto:ohlfsam96@gmail.com">
            <Icon name="mail" /> Email Me
          </StyledButton>
          <StyledButton href="https://www.linkedin.com/in/austinohlfs" target="_blank">
            <Icon name="linkedin" /> Connect on LinkedIn
          </StyledButton>
        </ButtonGroup>
      </CollaborationContent>
    </CollaborationSection>
  );
};

// Styled components
const CollaborationSection = styled.section`
  background-color: #1c1c1c;
  padding: 60px 20px;
  text-align: center;
  color: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const CollaborationContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: rgb(0, 216, 255);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #bdbdbd;
    margin-bottom: 30px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgb(0, 216, 255);
  color: #121212;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #00c853;
    transform: scale(1.05);
  }

  & > .icon {
    margin-right: 8px;
  }
`;

export default Collaboration;
