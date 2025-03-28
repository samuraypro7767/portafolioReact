import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © 2025 Desarrollador de software.<br className="mobile-only" /> 
          Todos los derechos reservados
        </p>
        
        <div className="social-links">
          <a href="https://github.com/samuraypro7767?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="social-icon github" />
          </a>
          <a href="https://www.linkedin.com/checkpoint/lg/login?session_redirect=%2Fauthwall&fromSignIn=true&trk=seo-authwall-base_google-one-tap-submit" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://wa.link/t9t5un" target="_blank" rel="noopener noreferrer">
            <img src="/whasapp.png" alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://cloudhq.net/s/c9556a4c9a6f79" target="_blank" rel="noopener noreferrer">
            <img src="/gmail.png" alt="Gmail" className="social-icon" />
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Estilos base (mobile first) */
        .footer {
          width: 100%;
          background-color: #000000;
          color: white;
          padding: 1rem;
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 1000;
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .copyright {
          font-size: 0.8rem;
          text-align: center;
          line-height: 1.4;
          order: 2;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          order: 1;
          width: 100%;
        }
        
        .social-icon {
          width: 30px;
          height: 30px;
          transition: transform 0.3s ease;
          border-radius: 50%;
        }
        
        .social-icon:hover {
          transform: scale(1.1);
          filter: drop-shadow(0 0 5px #3CA141);
        }
        
        .github {
          background-color: white;
          padding: 2px;
        }
        
        .mobile-only {
          display: block;
        }
        
        /* Versión para computadora (≥768px) */
        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
          }
          
          .copyright {
            order: 1;
            text-align: left;
            font-size: 0.9rem;
            flex: 1;
          }
          
          .social-links {
            order: 2;
            justify-content: flex-end;
            width: auto;
            gap: 1.5rem;
          }
          
          .social-icon {
            width: 35px;
            height: 35px;
          }
          
          .mobile-only {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};