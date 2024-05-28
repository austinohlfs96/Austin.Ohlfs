import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react';


const NavBar = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleItemClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      {isMobile ? (
        <Menu fixed="top" inverted borderless style={{ background: 'rgb(33, 33, 33)', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
          <Menu.Item as={Link} to="/" onClick={() => handleItemClick('/')}>
          <img src="/AustinLogo5.jpg" alt="Logo" style={{ height: '50px', width: '188px', objectFit: 'cover' }} />
        </Menu.Item>  
        <Menu.Item onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Icon name={isMobileMenuOpen ? 'close' : 'bars'} size="large" />
        </Menu.Item>
        
          
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <img src="/AustinLogo5.jpg" alt="Logo" className="mobile-logo" />
              <Button 
                icon='close' 
                inverted 
                onClick={() => setIsMobileMenuOpen(false)} 
                style={{ position: 'absolute', top: '10px', right: '10px' }} 
              />
              <Menu vertical inverted style={{ height: '100%', width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'space-evenly'}}>
                <Menu.Item className="menu-item" onClick={() => handleItemClick('/')}><Icon name="home" /> Home</Menu.Item>
                <Menu.Item className="menu-item" onClick={() => handleItemClick('/projects')}><Icon name="code" /> Projects</Menu.Item>
                <Menu.Item className="menu-item" onClick={() => handleItemClick('/work-experience')}><Icon name="briefcase" /> Experience</Menu.Item>
                <Menu.Item className="menu-item" onClick={() => handleItemClick('/blog')}><Icon name="newspaper" /> Blog</Menu.Item>
                <Menu.Item className="menu-item" onClick={() => handleItemClick('/aesir')}><Icon name="globe" /> Aesir</Menu.Item>
                <Menu.Item className="menu-item" onClick={() => handleItemClick('/contact')}><Icon name="mail" /> Contact</Menu.Item>
              </Menu>
            </div>
          )}
        </Menu>
      ) : (
        <Menu fixed="top" inverted borderless>
          <Menu.Item as={Link} to="/" onClick={() => handleItemClick('/')}>
            <img src="/AustinLogo5.jpg" alt="Logo" style={{ height: '50px', width: '188px', objectFit: 'cover' }} />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/projects" onClick={() => handleItemClick('/projects')}>Projects</Menu.Item>
            <Menu.Item as={Link} to="/work-experience" onClick={() => handleItemClick('/work-experience')}>Experience</Menu.Item>
            <Menu.Item as={Link} to="/blog" onClick={() => handleItemClick('/blog')}>Blog</Menu.Item>
            <Menu.Item as={Link} to="/aesir" onClick={() => handleItemClick('/aesir')}>Aesir</Menu.Item>
            <Menu.Item as={Link} to="/contact" onClick={() => handleItemClick('/contact')}>Contact</Menu.Item>
          </Menu.Menu>
        </Menu>
      )}
    </div>
  );
};

export default NavBar;
