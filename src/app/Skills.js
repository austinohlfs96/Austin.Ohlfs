import React, { useState } from 'react';
import { Grid, Modal, Button, Icon } from 'semantic-ui-react';

const Skills = ({ isMobile }) => {
  const initialSkills = [
    "JavaScript", "React", "Python", "HTML5/CSS3", "Node.js", "Express.js",
    "SQL", "PostgreSQL", "MySQL", "SQLite", "Git", "Redux", "GraphQL",
    "RESTful APIs", "AWS (Amazon Web Services)", "Responsive Web Design",
    "Webpack", "Babel", "OAuth", "JSON Web Tokens (JWT)",
    "UI/UX Design Principles", "SEO (Search Engine Optimization)",
    "Data Structures and Algorithms"
  ];
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section id="skills">
      <div className="container">
        <Grid columns={isMobile ? 1 : 2} style={{ display: 'flex', alignItems: 'flex-start' }}>
          {!isMobile && (
            <Grid.Column width={3}>
              <div className="section-container">
                <h2 style={{ textAlign: 'center' }}>Skills</h2>
                <ul>
                  {initialSkills.slice(0, 12).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <div style={{ textAlign: 'center' }}>
                  <Button icon='ellipsis horizontal' onClick={toggleModal} className="gradient-button" />
                </div>
              </div>
            </Grid.Column>
          )}
          {isMobile && (
            <Grid.Column width={16}>
              <div className="section-container">
                <div style={{ textAlign: 'center' }}>
                  <Button icon='ellipsis horizontal' onClick={toggleModal} className="gradient-button">Tech Stack</Button>
                </div>
              </div>
            </Grid.Column>
          )}
        </Grid>
      </div>
      <Modal
        open={showModal}
        onClose={toggleModal}
        closeIcon
        size='small'
        centered
        className="tech-modal"
      >
        <Modal.Header className="tech-modal-header">Tech Stack</Modal.Header>
        <Modal.Content scrolling className="tech-modal-content">
          <Modal.Description>
            <ul className="skills-list">
              {initialSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gradient-button {
          background: linear-gradient(45deg, #6a11cb, #2575fc);
          color: white !important;
          transition: background 0.5s;
        }
        .gradient-button:hover {
          background: linear-gradient(45deg, #2575fc, #6a11cb);
          color: white !important;
        }
        .tech-modal {
          background: #1e1e1e !important;
          border: none !important;
          color: #fff !important;
          font-family: 'Roboto', sans-serif;
          box-shadow: 0 0 20px rgba(39, 245, 245, 0.5);
          animation: fadeInUp 0.5s;
        }
        .tech-modal-header {
          background: #0d0d0d !important;
          color: #27f5f5 !important;
          text-align: center;
          font-size: 1.5em !important;
          border-bottom: 1px solid #27f5f5 !important;
        }
        .tech-modal-content {
          background: #0d0d0d !important;
          color: #fff !important;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          list-style: none;
          justify-content: center;
        }
        .skill-item {
          margin: 5px 10px;
          padding: 10px 20px;
          background: #1e1e1e;
          border: 1px solid #27f5f5;
          border-radius: 5px;
          color: #27f5f5;
          transition: background 0.3s, color 0.3s, transform 0.3s;
          animation: fadeInUp 0.5s ease-in-out;
        }
        .skill-item:hover {
          background: #27f5f5;
          color: #1e1e1e;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Skills;
