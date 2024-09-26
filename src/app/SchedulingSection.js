import React from 'react';
import styled from 'styled-components';
import { InlineWidget } from "react-calendly"; // Calendly widget

const SchedulingSection = () => {
  return (
    <ScheduleContainer>
      <ScheduleContent>
        <h2>Schedule a Meeting</h2>
        <p>
          Let's set up a time to discuss your project, business goals, or any consulting needs.
          Use the calendar below to book a 30 minute meeting directly with me.
        </p>
      </ScheduleContent>
      <CalendlyWrapper>
        <InlineWidget 
          url="https://calendly.com/ohlfsam96" // Replace with your Calendly link
          styles={{
            height: '100%', // Make widget responsive to parent height
            width: '100%',
          }}
        />
      </CalendlyWrapper>
    </ScheduleContainer>
  );
};

// Styled Components
const ScheduleContainer = styled.section`
  background-color: #121212;
  padding: 60px 20px;
  color: #f0f0f0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const ScheduleContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 40px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: rgb(0, 216, 255);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #bdbdbd;
    line-height: 1.8;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CalendlyWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 700px; // Default height for large screens
  width: 100%;

  @media (max-width: 1200px) {
    height: 600px; // Adjust height for medium screens
  }

  @media (max-width: 768px) {
    height: 500px; // Adjust height for mobile devices
  }

  @media (max-width: 480px) {
    height: 450px; // For very small screens
  }
`;

export default SchedulingSection;
