import React, { useEffect } from 'react';

export const Main = () => {
  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.playbackRate = 0.6; 
    }
  }, []); 

  const handleDownload = () => {
    const pdfUrl = '/docs/cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'mi_curriculum.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="main" id="main">
      <video muted autoPlay loop>
        <source src='/background1.mp4' />
      </video>
      <div className="capa"></div>

      <section className="informationMain">
        <div className="content-wrapper">
          <div className="text-content">
            <h1 className="Tittle-Main">Desarrollador Software</h1>
            <p className="description">
              Especializado en arquitecturas escalables y código limpio. Donde otros ven problemas, yo veo algoritmos.
            </p>
            <button 
              onClick={handleDownload}
              className="download-button"
            >
              DESCARGAR CV
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Desarrollador de software, todos los derechos reservados</p>
      </footer>

      <style jsx>{`
        /* Estilos base (mobile first) */
      
        
      
        
        .capa {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000000;
          opacity: 0.5;
          mix-blend-mode: overlay;
          z-index: 0;
        }
        
        .informationMain {
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        
        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
        }
        
        .text-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          padding: 0 1rem;
        }
        
        .Tittle-Main {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #3CA141;
          font-style: italic;
          font-weight: bold;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .description {
          font-size: 1.1rem;
          color: white;
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
        }
        
        .download-button {
          padding: 12px 30px;
          background-color: #3CA141;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .download-button:hover {
          background-color: #2e8b37;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #000000;
          color: white;
          text-align: center;
          padding: 1rem;
          font-size: 0.8rem;
          z-index: 10;
        }

        /* Versión para computadora (≥768px) */
        @media (min-width: 768px) {
          .Tittle-Main {
            font-size: 2.5rem;
          }
          
          .description {
            font-size: 1.2rem;
          }
          
          .download-button {
            padding: 15px 35px;
            font-size: 1.1rem;
          }
          
          .informationMain {
            min-height: calc(86vh - 60px);
          }
        }

        /* Versión para pantallas grandes (≥1024px) */
        @media (min-width: 1024px) {
          .Tittle-Main {
            font-size: 3rem;
            margin-bottom: 2rem;
          }
          
          .description {
            font-size: 1.3rem;
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </main>
  );
};