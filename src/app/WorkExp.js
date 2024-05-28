import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import NavBar from './NavBar';
import Footer from './Footer';

const WorkExp = () => {
  return (
    <StyledContainer>
      <NavBar />
      <StyledSection id="experience">
        <div className="container">
          <StyledHeader>Work Experience</StyledHeader>
          <JobExperience>
            <JobTitle>Charter Sports - Tune Shop Manager</JobTitle>
            <StyledImage src="https://thecharter.com/wp-content/uploads/2020/12/Charter-Sports-logo.jpg" size="small" />
            <StyledList>
              <li>Trained and managed staff to maintain rental and customer equipment (skis/snowboards/bikes)</li>
              <li>Ran and maintained shop machines and equipment</li>
            </StyledList>

            <JobTitle>Ski Base - Tuner</JobTitle>
            <StyledImage src="https://vailskibase.com/wp-content/uploads/2021/09/ski-base-logo-lg-1.jpg" size="small" />
            <StyledList>
              <li>Tuned, repaired, and mounted skis and snowboards for the shop and customers</li>
              <li>Assisted with rentals and sales</li>
            </StyledList>

            <JobTitle>Troon - Irrigation Crew</JobTitle>
            <StyledImage src="https://www.troon.com/wp-content/uploads/2020/03/TG_Logo_PMS_7595-white.png" size="small" />
            <StyledList>
              <li>Identified and fixed irrigation problems for an 18-hole golf course</li>
              <li>Assisted with mowing and turf crews when short-handed</li>
            </StyledList>

            <JobTitle>Buzz’s Boards - Tuner</JobTitle>
            <StyledImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlm1Q0qI2ybEBa3BLzkQWSFmWzsXDhQNuop5PxSt0aQA&s" size="small" />
            <StyledList>
              <li>Tuned, repaired, and mounted skis and snowboards for the shop and customers</li>
              <li>Performed high-end race tunes with specific hand-edged bevels</li>
            </StyledList>

            <JobTitle>Vail Resorts - Customer Service/Rental Tech</JobTitle>
            <StyledImage src="https://photos.prnewswire.com/prnfull/20160718/390690LOGO" size="small" />
            <StyledList>
              <li>Sized and fit customers with appropriate ski and snowboard equipment</li>
              <li>Provided answers for any questions that the customer may have</li>
            </StyledList>
          </JobExperience>
        </div>
      </StyledSection>
      <Footer />
    </StyledContainer>
  );
};

export default WorkExp;

const StyledContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #e0e0e0;
  background: #121212;
  padding: 20px;
`;

const StyledSection = styled.section`
  padding: 60px 0;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

const StyledHeader = styled.h2`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 50px;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  color: transparent;
`;

const JobExperience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const JobTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #f5f5f5;
  text-transform: uppercase;
`;

const StyledImage = styled(Image)`
  border: 2px solid #6a11cb;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const StyledList = styled.ul`
  margin: 0 0 20px 20px;
  padding: 0;
  list-style: none;
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    &::before {
      content: '>';
      position: absolute;
      left: 0;
      color: #6a11cb;
      transition: color 0.3s ease-in-out;
    }
    &:hover::before {
      color: #2575fc;
    }
  }
`;
