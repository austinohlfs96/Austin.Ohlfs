import React from 'react';
import { Container, Header, Segment, Icon } from 'semantic-ui-react';
import { motion } from 'framer-motion';
import Skills from './Skills'; // Adjust the import according to your project structure

const IntroductionSection = ({ isMobile }) => {
  return (
    <Segment inverted vertical style={styles.segment}>
      <Container text>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Header as='h2' inverted style={styles.heading}>
            <Icon name='code' style={styles.icon} />
            Welcome!
          </Header>
          <motion.p
            style={styles.paragraph}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hello and welcome to my corner of the digital universe! I'm Austin, a Colorado native with a passion for both coding and carving through fresh powder on the slopes.
          </motion.p>
          <motion.p
            style={styles.paragraph}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            With over a decade of experience honing skis and snowboards in the picturesque town of Vail, I've learned the importance of precision, attention to detail, and the thrill of mastering a craft.
          </motion.p>
          <motion.p
            style={styles.paragraph}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Transitioning from mountains to code, I bring that same dedication and expertise to my work as a full-stack software engineer. Specializing in crafting dynamic webpages and software solutions, I thrive on leveraging technology to drive business growth and efficiency.
          </motion.p>
          <motion.p
            style={styles.paragraph}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Here, you'll find a showcase of my projects, each meticulously designed to not only meet but exceed client expectations. From responsive web designs to scalable software applications, I'm committed to delivering solutions that empower businesses to thrive in the digital landscape.
          </motion.p>
          <motion.p
            style={styles.paragraph}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            So, whether you're navigating the slopes or navigating the web, let's embark on a journey of innovation together. Let's harness the power of technology to elevate your business to new heights.
          </motion.p>
        </motion.div>
        {isMobile && <Skills isMobile={true} />}
      </Container>
    </Segment>
  );
};

const styles = {
  segment: {
    padding: '4em 2em',
    background: 'linear-gradient(to right, #4A90E2, #58B3D3)',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '0.5em',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '0.5em',
    color: '#fff',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.5',
    color: '#fff',
    marginBottom: '1em',
  },
};

export default IntroductionSection;

