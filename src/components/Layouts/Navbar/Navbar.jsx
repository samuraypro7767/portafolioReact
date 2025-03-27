import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Archivo CSS para los estilos del navbar

const ItemNavbarUl = ({ contenido, link }) => {
  return (
    <li className="item-navbar">
      <a href={link} onClick={(e) => {
        // Cerrar el menú al hacer clic en un enlace (solo móvil)
        if(window.innerWidth <= 768) {
          document.querySelector('.list.mobile-menu')?.classList.remove('open');
          document.querySelector('.hamburger-btn')?.classList.remove('open');
        }
      }}>{contenido}</a>
    </li>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      // Si se cambia a versión desktop, asegurarse de cerrar el menú
      if(window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {isMobile && (
        <button 
          className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menú"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      )}

      <ul className={`list ${isMobile ? 'mobile-menu' : ''} ${isOpen ? 'open' : ''}`}>
        <ItemNavbarUl contenido="Inicio" link="/" />
        <ItemNavbarUl contenido="Sobre Mi" link="/profile" />
        <ItemNavbarUl contenido="Proyectos" link="/studies" />
        <ItemNavbarUl contenido="Habilidades" link="/Experience" />
      </ul>
    </nav>
  );
};