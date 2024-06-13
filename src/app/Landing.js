import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import { Image, Icon, Grid } from "semantic-ui-react";
import Footer from './Footer';
import MatrixRain from './MatrixRain';
import Skills from './Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashnode } from '@fortawesome/free-brands-svg-icons';
import MainSection from './MainSection';


const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="landing-page" style={{marginTop: '67px'}}>
      <div className="hero-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="matrix-rain-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <MatrixRain />
        </div>
        {/* Background Image */}
        {/* <Image className="background-image" src="/AustinCoverPhoto.jpeg" alt="Background Image" style={{ width: 'auto', height: 'auto', top: 0, left: 0, zIndex: 2, opacity: '0.7' }} /> */}

        {/* MatrixRain component */}
        

        {/* Text Content */}
        <div className="text-content" style={{ zIndex: -3, padding: isMobile ? '20px' : '50px', textAlign: 'center', color: 'white', backgroundImage: "url(/AustinCoverPhoto.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.7' }}>
  {/* Text Content */}
  {/* <h1 style={{ fontSize: isMobile ? '5vw' : '7vw', marginBottom: '20px' }}>Austin Ohlfs</h1> */}
  <h5 style={{ fontSize: isMobile ? '4vw' : '3vw', marginBottom: isMobile ? '20px' : '60px', width: '50%', textAlign: 'center', marginTop: isMobile ? '20px' : '60px' }}>Full-Stack Software Engineer</h5>
  <p style={{ fontSize: isMobile ? '2vw' : '1.5vw', width: '50%', marginTop: isMobile ? '20px' : '60px', marginBottom: isMobile ? '20px' : '60px' }}>
    I'm Austin, a Software Engineer with expertise in front-end and back-end development, I specialize in technologies such as JavaScript, React, Python, and many others. Explore my qualifications, skills, and portfolio to learn more about what I can offer!
  </p>
  <p style={{ fontSize: isMobile ? '1.4vw' : '1.75vw', width: '50%', marginTop: isMobile ? '20px' : '60px', marginBottom: isMobile ? '20px' : '60px' }}>
    If you don't do it this year, you'll just be another year olderr when you do. -<span>Warren Miller</span>
  </p>
</div>

      </div>
      {/* Main Section */}
      <MainSection isMobile={isMobile}/>
      {/* <main style={{ marginLeft: '10px', marginRight: '10px' }}>
        <Grid columns={2} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          {!isMobile && (
            <Grid.Column width={3}>
              <Skills isMobile={false} />
            </Grid.Column>
          )}
          <Grid.Column width={isMobile ? 16 : 13}>
            <div className="section-container">
              <section id="about">
                <div className="container">
                  <section id="introduction">
                    <div className="container">
                      <h2>Introduction</h2>
                      <p>Hello and welcome to my corner of the digital universe! I'm Austin, a Colorado native with a passion for both coding and carving through fresh powder on the slopes. With over a decade of experience honing skis and snowboards in the picturesque town of Vail, I've learned the importance of precision, attention to detail, and the thrill of mastering a craft.</p>
                      <p>Transitioning from mountains to code, I bring that same dedication and expertise to my work as a full-stack software engineer. Specializing in crafting dynamic webpages and software solutions, I thrive on leveraging technology to drive business growth and efficiency.</p>
                      <p>Here, you'll find a showcase of my projects, each meticulously designed to not only meet but exceed client expectations. From responsive web designs to scalable software applications, I'm committed to delivering solutions that empower businesses to thrive in the digital landscape.</p>
                      <p>So, whether you're navigating the slopes or navigating the web, let's embark on a journey of innovation together. Let's harness the power of technology to elevate your business to new heights.</p>
                    </div>
                  </section>
                  {isMobile && (
                    <div style={{ textAlign: 'center' }}>
                      <Skills isMobile={true} />
                    </div>
                  )}
                </div>
              </section>
            </div>
          </Grid.Column>
        </Grid>

        
        <section id="contact">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Contact Me</h2>
            <p>If you have any questions or would like to discuss potential opportunities, feel free to reach out to me:</p>
            <ul>
              <li>Email: ohlfsam96@gmail.com</li>
              <li>Phone: (303) 257-3882</li>
              <li>
                <Icon name='github' size='large' style={{ color: 'rgba(24, 26, 27, 1)' }} link onClick={() => window.open('https://github.com/your-github-username', '_blank')} />
                <FontAwesomeIcon icon={faHashnode} size="lg" />
                <Icon name='linkedin' size='large' link onClick={() => window.open('https://www.linkedin.com/in/your-linkedin-username', '_blank')} />
              </li>
            </ul>
          </div>
        </section>
      </main> */}
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;




 

      {/* Footer Section */}