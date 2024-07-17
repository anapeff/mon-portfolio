import React from 'react';
import Nav from 'react-bootstrap/Nav';
import menuIcon from '../../images/header/menu.svg'; // Importez l'image SVG
import './_header.scss';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Nav className="custom-nav" variant="underline" defaultActiveKey="#header">
      <Nav.Item className="nav-logo">
        <Nav.Link eventKey="disabled" disabled className="logo-font">
          AP
        </Nav.Link>
      </Nav.Item>
      <div className="nav-links">
        <Nav.Item className="nav-item">
          <Nav.Link href="#about" eventKey="#header">Accueil</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link href="#about" eventKey="#about">A Propos</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link href="#skills" eventKey="#skills">Compétences</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link href="#projects" eventKey="#projects">Projets</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link href="#contact" eventKey="#contact">Contact</Nav.Link>
        </Nav.Item>
      </div>
      <button className="menu-button" onClick={toggleMobileMenu}>
        <img src={menuIcon} alt="Menu" />
      </button>
      {showMobileMenu && (
        <div className="mobile-menu">
          <Nav.Item className="nav-item">
            <Nav.Link href="#header" eventKey="#header" onClick={toggleMobileMenu}>Accueil</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#about" eventKey="#about" onClick={toggleMobileMenu}>A Propos</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#skills" eventKey="#skills" onClick={toggleMobileMenu}>Compétences</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#projects" eventKey="#projects" onClick={toggleMobileMenu}>Projets</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#contact" eventKey="#contact" onClick={toggleMobileMenu}>Contact</Nav.Link>
          </Nav.Item>
        </div>
      )}
    </Nav>
  );
};

export default Header;
