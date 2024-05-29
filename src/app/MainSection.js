import React, { useState, useEffect } from 'react';
import { Grid, Icon } from 'semantic-ui-react'; // Assuming you're using Semantic UI for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashnode } from '@fortawesome/free-brands-svg-icons';
import Skills from './Skills'; // Adjust the import according to your project structure
import IntroductionSection from './IntroSection';

const MainSection = ({ isMobile }) => {
  
  return (
    <main style={styles.main}>
      <Grid columns={2} style={styles.grid}>
        {!isMobile && (
          <Grid.Column width={3}>
            <Skills isMobile={false} />
          </Grid.Column>
        )}
        <Grid.Column width={isMobile ? 16 : 13}>
          <div className="section-container" style={styles.sectionContainer}>
            
            <section id="about">
              <div className="container" style={styles.container}>
                <section id="introduction">
                  <div className="container" style={styles.introContainer}>
                    <h2 style={styles.heading}>Introduction</h2>
                    <p style={styles.paragraph}>Hello and welcome to my corner of the digital universe! I'm Austin, a Colorado native with a passion for both coding and carving through fresh powder on the slopes. With over a decade of experience honing skis and snowboards in the picturesque town of Vail, I've learned the importance of precision, attention to detail, and the thrill of mastering a craft.</p>
                    <p style={styles.paragraph}>Transitioning from mountains to code, I bring that same dedication and expertise to my work as a full-stack software engineer. Specializing in crafting dynamic webpages and software solutions, I thrive on leveraging technology to drive business growth and efficiency.</p>
                    <p style={styles.paragraph}>Here, you'll find a showcase of my projects, each meticulously designed to not only meet but exceed client expectations. From responsive web designs to scalable software applications, I'm committed to delivering solutions that empower businesses to thrive in the digital landscape.</p>
                    <p style={styles.paragraph}>So, whether you're navigating the slopes or navigating the web, let's embark on a journey of innovation together. Let's harness the power of technology to elevate your business to new heights.</p>
                  </div>
                </section>
                {isMobile && (
                  <div style={styles.skillsContainer}>
                    <Skills isMobile={true} />
                  </div>
                )}
              </div>
            </section>
          </div>
          
        </Grid.Column>
      </Grid>
      <section id="contact">
        <div className="container" style={styles.contactContainer}>
          <h2 style={styles.heading}>Contact Me</h2>
          <p style={styles.paragraph}>If you have any questions or would like to discuss potential opportunities, feel free to reach out to me:</p>
          <ul style={styles.contactList}>
            <li style={styles.contactItem}>Email: ohlfsam96@gmail.com</li>
            <li style={styles.contactItem}>Phone: (303) 257-3882</li>
            <li style={styles.contactIcons}>
              <Icon name='github' size='large' style={styles.icon} link onClick={() => window.open('https://github.com/your-github-username', '_blank')} />
              <FontAwesomeIcon icon={faHashnode} size="lg" style={styles.icon} />
              <Icon name='linkedin' size='large' style={styles.icon} link onClick={() => window.open('https://www.linkedin.com/in/your-linkedin-username', '_blank')} />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

const styles = {
  main: {
    marginLeft: '10px',
    marginRight: '10px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    background: '#f9f9f9',
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  sectionContainer: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(to right, #4A90E2, #58B3D3)',
  },
  container: {
    marginBottom: '20px',
  },
  introContainer: {
    padding: '20px',
    borderRadius: '8px',
    background: '#e0e0e0',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.12)',
  },
  heading: {
    fontSize: '2rem',
    color: '#4A90E2',
    marginBottom: '15px',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#666',
  },
  skillsContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  contactContainer: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
  },
  contactItem: {
    margin: '10px 0',
    fontSize: '1rem',
  },
  contactIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
  },
  icon: {
    color: '#4A90E2',
    cursor: 'pointer',
  },
};

export default MainSection;
