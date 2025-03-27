import React from 'react'
import TextPressure from '../../../TextAnimations/TextPressure/TextPressure'

export const ItemMain = () => {
  const handleDownload = () => {
    // Ruta al archivo PDF en la carpeta public
    const pdfUrl = '/docs/cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'mi_curriculum.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
        <div>
        
          <TextPressure></TextPressure>
          
 
            <section className='ContentMain'>
                <p>Soy una persona responsable, dinámica y orientada a resultados, con un enfoque en la superación continua. Aprendo rápidamente y me adapto con facilidad a nuevos retos, buscando siempre alcanzar objetivos claros y contribuir al éxito de la organización. Estoy comprometido con el cumplimiento de funciones y normativas, y siempre dispuesto a asumir desafíos que favorezcan mi desarrollo profesional.
                  
                </p>


                <button 
                onClick={handleDownload}
                className="download-button"
              >
                Descargar CV
              </button>
            </section>
        </div>
        <style jsx>{`
        
        .download-button {
          padding: 12px 24px;
          background-color: #2c3e50;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .download-button:hover {
          background-color: #1a252f;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .informationMain {
            flex-direction: column;
            text-align: center;
            padding-top: 80px;
          }
          
          .informateText {
            max-width: 100%;
            margin-bottom: 40px;
          }
          
          .imgPhoto {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </>
  )
}
