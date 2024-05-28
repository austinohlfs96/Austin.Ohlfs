import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import Skills from './Skills'; // Adjust the import according to your project structure

const IntroductionSection = ({ isMobile }) => {
  return (
    <Segment inverted vertical style={styles.segment}>
      <Container text>
        <Header as='h2' inverted style={styles.heading}>Introduction</Header>
        <p style={styles.paragraph}>
          Hello and welcome to my corner of the digital universe! I'm Austin, a Colorado native with a passion for both coding and carving through fresh powder on the slopes. With over a decade of experience honing skis and snowboards in the picturesque town of Vail, I've learned the importance of precision, attention to detail, and the thrill of mastering a craft.
        </p>
        <p style={styles.paragraph}>
          Transitioning from mountains to code, I bring that same dedication and expertise to my work as a full-stack software engineer. Specializing in crafting dynamic webpages and software solutions, I thrive on leveraging technology to drive business growth and efficiency.
        </p>
        <p style={styles.paragraph}>
          Here, you'll find a showcase of my projects, each meticulously designed to not only meet but exceed client expectations. From responsive web designs to scalable software applications, I'm committed to delivering solutions that empower businesses to thrive in the digital landscape.
        </p>
        <p style={styles.paragraph}>
          So, whether you're navigating the slopes or navigating the web, let's embark on a journey of innovation together. Let's harness the power of technology to elevate your business to new heights.
        </p>
        {isMobile && <Skills isMobile={true} />}
      </Container>
    </Segment>
  );
};

const styles = {
  segment: {
    padding: '4em 0em',
    background: 'linear-gradient(to right, #4A90E2, #58B3D3)',
    borderRadius: '20px',
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '0.5em',
    color: '#fff',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.5',
    color: '#fff',
  },
};

export default IntroductionSection;
