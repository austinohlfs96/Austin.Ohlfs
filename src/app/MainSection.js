import React from 'react';
import { Grid, Icon, Card, Image, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashnode } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import Skills from './Skills'; // Adjust the import according to your project structure

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import LandingPageProjects from './LandingPageProjects';


const MainSection = ({ isMobile }) => {
  const projects = [
    {
      id: 1,
      title: 'AESIR Speed Techs',
      description: 'A brief description of project one.',
      imageUrl: '/AESIRSite.png',
      link: 'https://github.com/yourusername/project-one',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'AAA Madlibs',
      description: 'A brief description of project one.',
      imageUrl: '/Designer.png',
      link: 'https://github.com/yourusername/project-one',
      technologies: ['Vue.js', 'Django', 'SQLite'],
    },
    {
      id: 3,
      title: 'Pokemon Card Shop',
      description: 'A brief description of project one.',
      imageUrl: '/ABACardShop.png',
      link: 'https://github.com/yourusername/project-one',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 4,
      title: 'BackYard Fantasy Football',
      description: 'A brief description of project two.',
      imageUrl: '/BacKYardFantasyFootBall.png',
      link: 'https://github.com/yourusername/project-two',
      technologies: ['React Native', 'Express', 'MongoDB'],
    },
    {
      id: 5,
      title: 'Date-smith',
      description: 'A brief description of project two.',
      imageUrl: '/DateSmith.png',
      link: 'https://github.com/yourusername/project-two',
      technologies: ['Angular', 'Express', 'PostgreSQL'],
    },
    // Add more projects as needed
  ];

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
    <main style={styles.main}>
          <div className="section-container" style={styles.sectionContainer}>
            <section id="about">
              <div className="container" style={styles.container}>
                <section id="introduction">
                  <div className="container" style={styles.introContainer}>
                    <h2 style={styles.heading}>Introduction</h2>
                    <p style={styles.paragraph}>I'm Austin, a proud Colorado native with a deep passion for both coding and exploring the great outdoors. My journey into the world of software engineering has been driven by a love for solving complex problems and creating innovative solutions.  When I'm not immersed in code, you can find me exploring the rugged beauty of the Rockies, seeking adventure and inspiration in nature. Join me as I share my projects, insights, and experiences from the intersection of technology and the natural world.</p>
                  </div>
                </section>

                <section id="transition">
                  <div className="container" style={styles.subContainer}>
                    <h3 style={styles.subHeading}>From Mountains to Code</h3>
                    <p style={styles.paragraph}>With over a decade of experience tuning skis and snowboards in Vail, Colorado, I've mastered precision and attention to detail. Now, I bring that same dedication and passion to my work as a full-stack software engineer.</p>
                  </div>
                </section>

                <section id="specialization">
                  <div className="container" style={styles.subContainer}>
                    <h3 style={styles.subHeading}>Specialization</h3>
                    <p style={styles.paragraph}>I specialize in crafting dynamic webpages and software solutions, leveraging technology to drive business growth and efficiency.</p>
                    {!isMobile && (
                  <div style={styles.skillsContainer}>
                    <Skills isMobile={false} />
                  </div>
                )}
                  {isMobile && (
                  <div style={styles.skillsContainer}>
                    <Skills isMobile={true} />
                  </div>
                )}
                  </div>
                  
                </section>

               
                <LandingPageProjects/>

                <section id="introduction">
                  <div className="container" style={styles.subContainer}>
                    <h3 style={styles.subHeading}>Let's Collaborate</h3>
                    <p style={styles.paragraph}>Whether you're navigating the slopes or the web, let's innovate together. Let's harness technology to elevate your business. I'd love to hear for you!</p>
                  </div>
                </section>

                
              </div>
            </section>
          </div>
      <section id="contact" style={styles.contactSection}>
        <div className="container" style={styles.contactContainer}>
          <h2 style={styles.heading}>Contact Me</h2>
          <p style={styles.paragraph}>Have questions or opportunities? Reach out:</p>
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
    margin: '0 auto',
    maxWidth: '1200px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    background: '#f9f9f9',
  },
  grid: {
    margin: '0 auto',
    justifyContent: 'space-between',
  },
  sectionContainer: {
    padding: '20px',
    borderRadius: '12px',
    background: 'linear-gradient(to right, #232526, #414345)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  container: {
    marginBottom: '20px',
  },
  introContainer: {
    padding: '20px',
    borderRadius: '8px',
    background: '#333',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.12)',
    color: '#fff',
  },
  subContainer: {
    padding: '15px',
    borderRadius: '8px',
    background: '#444',
    marginBottom: '15px',
  },
  heading: {
    fontSize: '2rem',
    color: '#00d8ff',
    marginBottom: '15px',
    textTransform: 'uppercase',
  },
  subHeading: {
    fontSize: '1.5rem',
    color: '#00d8ff',
    marginBottom: '10px',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#ddd',
  },
  projectColumn: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#00d8ff',
    color: '#fff',
  },
  skillsContainer: {
    textAlign: 'center',
    marginTop: '20px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.6)',
  },
  contactSection: {
    marginTop: '40px',
  },
  contactContainer: {
    textAlign: 'center',
    padding: '30px',
    borderRadius: '8px',
    background: '#232526',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    color: '#fff',
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
    color: '#00d8ff',
    cursor: 'pointer',
  },
};

export default MainSection;
