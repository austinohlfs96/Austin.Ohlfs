// import React, { useState } from 'react';
// import { Grid, Modal, Button } from 'semantic-ui-react';


// const Skills = () => {
//   const initialSkills = [
//     "JavaScript", "React", "Python", "HTML5/CSS3", "Node.js", "Express.js",
//     "SQL", "PostgreSQL", "MySQL", "SQLite", "Git", "Redux", "GraphQL",
//     "RESTful APIs", "AWS (Amazon Web Services)", "Responsive Web Design",
//     "Webpack", "Babel", "OAuth", "JSON Web Tokens (JWT)",
//     "UI/UX Design Principles", "SEO (Search Engine Optimization)",
//     "Data Structures and Algorithms"
//   ];
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <section id="skills">
//       <div className="container">
//         <Grid columns={1} divided>
//           <Grid.Column>
//             <h2 style={{ textAlign: 'center' }}>Skills</h2>
//             <ul>
//               {initialSkills.slice(0, 12).map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//             <div style={{ textAlign: 'center' }}>
//               <Button icon='ellipsis horizontal' onClick={toggleModal} />
//             </div>
//           </Grid.Column>
//           <Grid.Column>
//             {/* Add content here */}
//           </Grid.Column>
//         </Grid>
//       </div>
//       <Modal
//         id="skills"
//         open={showModal}
//         onClose={toggleModal}
//         closeIcon
//         size='small'
//         centered={false}
        
//       >
//         <Modal.Header>All Skills</Modal.Header>
//         <Modal.Content scrolling>
//           <Modal.Description>
//             <ul>
//               {initialSkills.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </Modal.Description>
//         </Modal.Content>
//       </Modal>
//     </section>
//   );
// };

// export default Skills;


import React, { useState } from 'react';
import { Grid, Modal, Button, Accordion, Icon } from 'semantic-ui-react';

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
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = (index) => {
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
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
                  <Button icon='ellipsis horizontal' onClick={toggleModal} />
                </div>
              </div>
            </Grid.Column>
          )}
          {isMobile && (
            <Grid.Column width={16}>
              <div className="section-container">
                {/* <h2 style={{ textAlign: 'center' }}>Skills</h2> */}
                <div style={{ textAlign: 'center' }}>
                  <Button icon='ellipsis horizontal' onClick={toggleModal}>Tech Stack</Button>
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
      >
        <Modal.Header>Tech Stack</Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <ul style={{display: 'flex', flexWrap: 'wrap'}}>
              {initialSkills.map((skill, index) => (
                <li key={index} id="skillsModal">{skill}</li>
              ))}
            </ul>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </section>
  );
};

export default Skills;
