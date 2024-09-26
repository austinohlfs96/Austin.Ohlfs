import React from 'react';
import { Icon } from 'semantic-ui-react'; // For social icons
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashnode, faLinkedin, faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/work-experience">Work Experience</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </FooterSection>

        <FooterSection >
          <h3>Follow Me</h3>
          <div className="social-icons" >
            <FontAwesomeIcon  icon={faGithub} size="lg" link onClick={() => window.open('https://github.com/austinohlfs96', '_blank')} />
            <FontAwesomeIcon icon={faLinkedin} size="lg" link onClick={() => window.open('https://www.linkedin.com/in/austinohlfs', '_blank')} />
            <FontAwesomeIcon icon={faHashnode} size="lg" link onClick={() => window.open('https://austinohlfs.hashnode.dev', '_blank')} />
          </div>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:ohlfsam96@gmail.com">ohlfsam96@gmail.com</a></p>
          <p>Phone: (303) 257-3882</p>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2024 Austin Ohlfs. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: #f0f0f0;
  padding: 40px 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 20px;

  h3 {
    color: rgb(0, 216, 255);
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin-bottom: 10px;

      a {
        color: #bdbdbd;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #00e676;
        }
      }
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
    color: #4a90e2;

    .icon {
      cursor: pointer;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.2);
        color: #00e676;
      }
    }
  }

  p {
    margin: 5px 0;
    color: #bdbdbd;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 20px;
  font-size: 0.9rem;
  color: #bdbdbd;
`;

export default Footer;
