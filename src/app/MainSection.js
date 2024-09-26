import React from 'react';
import { Grid, Icon, Card, Image, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashnode } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import Skills from './Skills'; // Adjust the import according to your project structure

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import LandingPageProjects from './LandingPageProjects';
import Collaboration from './Collaboration';
import SchedulingSection from './SchedulingSection';
import Specialization from './Specilazation';


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
                    <p style={styles.paragraph}>Hi, I'm Austin, a Software Engineer and AI enthusiast based in Colorado. With a deep passion for coding and a love for the outdoors, I specialize in blending creativity with technology to build robust, scalable solutions. Whether it's developing user-friendly web interfaces or solving complex backend challenges, I bring a fresh perspective to software development.</p>
                    <p style={styles.paragraph}>Outside of work, you'll often find me adventuring through the Rockies, where I draw inspiration from the natural world to fuel my coding endeavors.</p>
                  </div>
                </section>

                <section id="specialization">
                  <div className="container" style={styles.subContainer}>
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

                <section id="transition">
                  {/* <div className="container" style={styles.subContainer}>
                    <h3 style={styles.subHeading}>Specialization</h3>
                    <p style={styles.paragraph}>I specialize in full-stack web development and consulting for businesses looking to expand their online presence or streamline their operations. My services focus on:</p>
                    <ul style={styles.list}>
                      <li style={styles.listItem}>
                        <span style={styles.listItemIcon}>▶︎</span> 
                        <strong>Web Design & Development</strong>: Crafting dynamic, responsive websites and applications that elevate user experience.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemIcon}>▶︎</span> 
                        <strong>Consulting Services</strong>: Helping businesses optimize technology for growth and efficiency.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemIcon}>▶︎</span> 
                        <strong>AI Integration</strong>: Building and experimenting with AI tools to drive innovation in both consumer-facing and business applications.
                      </li>
                    </ul>


                  </div> */}
                  <Specialization/>
                </section>

               

               
                <LandingPageProjects/>

                <section id="introduction">
                  {/* <div className="container" style={styles.subContainer}>
                    <h3 style={styles.subHeading}>Let's Collaborate</h3>
                    <p style={styles.paragraph}>Whether you're navigating the slopes or the web, let's innovate together. Let's harness technology to elevate your business. I'd love to hear for you!</p>
                  </div> */}
                  <Collaboration/>
                </section>

                
              </div>
            </section>
          </div>
      <section id="contact" style={styles.contactSection}>
        {/* <div className="container" style={styles.contactContainer}>
          <h2 style={styles.heading}>Contact Me</h2>
          <p style={styles.paragraph}>Have questions or opportunities? Reach out:</p>
          <ul style={styles.contactList}>
            <li style={styles.contactItem}>Email: ohlfsam96@gmail.com</li>
            <li style={styles.contactItem}>Phone: (303) 257-3882</li>
            <li style={styles.contactIcons}>
              <Icon name='github' size='large' style={styles.icon} link onClick={() => window.open('https://github.com/austinohlfs96', '_blank')} />
              <FontAwesomeIcon icon={faHashnode} size="lg" style={styles.icon} link onClick={() => window.open('https://austinohlfs.hashnode.dev', '_blank')} />
              <Icon name='linkedin' size='large' style={styles.icon} link onClick={() => window.open('https://www.linkedin.com/in/austinohlfs', '_blank')} />
            </li>
          </ul>
        </div> */}
        <SchedulingSection/>
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
    borderRadius: '10px',
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
  list: {
    listStyle: 'none', // Remove default bullets
    paddingLeft: '0',  // No left padding
    marginTop: '20px', // Add top margin
    color: '#bdbdbd',  // Soft gray text for list items
  },
  listItem: {
    marginBottom: '15px', // Space between each item
    fontSize: '1.2rem', // Slightly larger font
    lineHeight: '1.6',  // Increase line height for readability
    display: 'flex',    // Align icon and text horizontally
    alignItems: 'center',
    paddingLeft: '20px',
    position: 'relative',
  },
  listItemIcon: {
    // color: '#00e676', // Neon green for icon
    marginRight: '10px',
    fontSize: '1.4rem', // Larger icon size
    position: 'absolute',
    left: '0', // Align icon on the left edge
  },
};

export default MainSection;
