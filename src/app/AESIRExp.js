
import React, { useState, useEffect, useRef } from 'react';

const AesirExperience = () => {

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.logoContainer}>
          <img src='/AESIRLogo.png' style={styles.logo} alt="Aesir Logo" />
        </div>

        <h1 style={styles.heading}>Combining Passions</h1>

        
        <section id="introduction" style={styles.section}>
          <figure style={styles.figure}>
            <img src="/AustinRoto.jpg" alt="Aesir Website Screenshot" style={styles.image} />
          </figure>
          <h2 style={styles.subheading}>Introduction</h2>
          <p style={styles.paragraph}>
            <strong>Aesir</strong> is a specialized company dedicated to ski and snowboard tuning. As an avid skier and software engineer, I had the unique opportunity to merge my love for winter sports with my technical skills. At Aesir, I took on the dual roles of <strong>Head Tuner</strong> and <strong>Lead Software Engineer</strong>.
          </p>
        </section>
       

        
        <section id="project-highlights" style={styles.section}>
          <h2 style={styles.subheading}>Project Highlights</h2>

          <div style={styles.subsection}>
            <h3 style={styles.subsubheading}>
              Development of Aesir's Website
            </h3>
            <ul style={styles.list}>
              <li><strong>Objective:</strong> Create a user-friendly, informative, and visually appealing website.</li>
              <li><strong>Technologies Used:</strong> HTML, CSS, JavaScript, and Python.</li>
              <li><strong>Key Features:</strong></li>
              <ul>
                <li>Responsive design for mobile and desktop.</li>
                <li>Detailed service descriptions and pricing.</li>
                <li>Integration with social media platforms.</li>
              </ul>
            </ul>
          </div>

          <div style={styles.subsection}>
            <h3 style={styles.subsubheading}>
              Booking Software
            </h3>
            <ul style={styles.list}>
              <li><strong>Objective:</strong> Develop an efficient and intuitive booking system.</li>
              <li><strong>Technologies Used:</strong> React, Node.js, MongoDB.</li>
              <li><strong>Key Features:</strong></li>
              <ul>
                <li>Real-time availability and scheduling.</li>
                <li>Automated confirmation emails and reminders.</li>
                <li>Secure payment gateway integration.</li>
              </ul>
            </ul>
          </div>
        </section>
       
          <h2 style={styles.subheading}>Technical Details</h2>
          <p style={styles.paragraph}>
            The website and booking software were built using modern web development technologies. The website's front-end was crafted with HTML, CSS, and JavaScript, ensuring a responsive and engaging user experience. For the booking software, I employed a MERN (MongoDB, Express.js, React, Node.js) stack, which allowed for efficient handling of data and a dynamic user interface.
          </p>
          <h3 style={styles.subsubheading}>
            Innovative Solutions
          </h3>
          <ul style={styles.list}>
            <li><strong>Scalable Architecture:</strong> Designed the booking system to handle increasing traffic and user load.</li>
            <li><strong>User Authentication:</strong> Implemented secure user login and data protection measures.</li>
            <li><strong>Automated Notifications:</strong> Developed a feature to send automatic booking confirmations and reminders to clients.</li>
          </ul>
       

       
          <h2 style={styles.subheading}>Impact and Results</h2>
          <ul style={styles.list}>
            <li><strong>Booking Efficiency:</strong> Reduced booking processing time by 50%.</li>
            <li><strong>User Engagement:</strong> Increased website traffic by 70% within the first six months.</li>
            <li><strong>Customer Satisfaction:</strong> Received positive feedback from users for the intuitive booking process.</li>
          </ul>
   

      
          <h2 style={styles.subheading}>Visual Showcase</h2>
          <div style={styles.gallery}>
            <figure style={styles.figure}>
              <img src="/AESIRSite2.png" alt="Aesir Website Screenshot" style={styles.image} />
              <figcaption style={styles.caption}>Aesir website homepage.</figcaption>
            </figure>
            <figure style={styles.figure}>
              <img src="/AESIRServices.png" alt="Booking Software Interface" style={styles.image} />
              <figcaption style={styles.caption}>Booking software interface.</figcaption>
            </figure>
            <figure style={styles.figure}>
              <img src="/AESIRCREW.jpg" alt="Ski Tuning in Action" style={styles.image} />
              <figcaption style={styles.caption}>Tuning a snowboard.</figcaption>
            </figure>
          </div>
  
          <h2 style={styles.subheading}>Personal Reflection</h2>
          <p style={styles.paragraph}>
            Working at Aesir has been an enriching experience, allowing me to blend my passion for skiing and snowboarding with my software engineering skills. This role has taught me valuable lessons in project management, user experience design, and technical problem-solving.
          </p>
          <p style={styles.paragraph}>
            Through this experience, I have learned the importance of integrating practical industry knowledge with technical expertise to create solutions that are both innovative and effective. I am excited to continue exploring opportunities where I can apply my diverse skill set in new and challenging environments.
          </p>

      </div>

      <style jsx>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes flash {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes glow {
    from { text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #ff0000, 0 0 8px #ff0000, 0 0 10px #ff0000, 0 0 12px #ff0000, 0 0 14px #ff0000; }
    to { text-shadow: 0 0 4px #fff, 0 0 8px #ff0000, 0 0 12px #ff0000, 0 0 16px #ff0000, 0 0 20px #ff0000, 0 0 24px #ff0000, 0 0 28px #ff0000; }
  }
`}</style>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    background: 'linear-gradient(135deg, rgba(13,13,13,0.9), rgba(77,77,77,0.9))',
    color: '#fff',
    minHeight: '100vh',
    padding: '5px',
    overflow: 'hidden',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    marginTop: '80px',
    padding: '10px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(31,31,31,0.9), rgba(56,56,56,0.9))',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },

logo: {
  width: '200px',
  height: 'auto',
  boeder: '3px',
  filter: 'drop-shadow(0 0 20px #8b0000)',
  animation: 'glow 2s ease-in-out infinite alternate',
},

  heading: {
    textAlign: 'center',
    marginBottom: '50px',
    borderBottom: '3px solid #ff5555',
    paddingBottom: '10px',
    color: '#3388ff',
    fontSize: '2em',
    fontWeight: 'bold',
  
  },
  section: {
    marginBottom: '40px',
    animation: 'fadeInUp 1s ease-in-out',
    background: 'rgba(31,31,31,0.8)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
  },
  subsection: {
    marginBottom: '20px',
  },
  subheading: {
    color: '#3388ff',
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  subsubheading: {
    color: '#ff5555',
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  paragraph: {
    textAlign: 'justify',
    lineHeight: '1.6',
    color: '#ccc',
  },
  list: {
    paddingLeft: '20px',
    lineHeight: '1.6',
    color: '#ccc',
  },
  gallery: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
 // Existing code...

  figure: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover img': {
      transform: 'scale(1.05)', // Added hover effect
    },
    // Add 3D effect
    perspective: '1000px',
    transition: 'transform 0.5s',
  },
  image: {
    width: '100%',
    borderRadius: '15px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.6)',
    marginBottom: '10px',
    transition: 'transform 0.3s ease-in-out',
    // Add 3D effect
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
  },

  caption: {
    textAlign: 'center',
    fontSize: '0.9em',
    color: '#bbb',
    marginTop: '10px',
  },
  section: {
    position: 'relative',
    animation: "fadeInUp 1s ease-in-out",
  }
};

export default AesirExperience;

