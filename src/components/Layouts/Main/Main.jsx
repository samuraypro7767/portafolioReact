import React, { useEffect } from 'react';
import { ItemMain } from '../../Ui/ItemMain/ItemMain';


export const Main = () => {
  useEffect(() => {
    
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.playbackRate = 0.6; 
    }
  }, []); 
  return (
    <>
      <main className='main'>
        <video id="miVideo" muted autoPlay loop>
          <source src='/background2.mp4' />
        </video>
        <div className="capa"></div>

        <section className='informationMain'>
          <article className='informateText'>
                        

            <ItemMain> </ItemMain>
          </article>
          <section className='containerPhoto'>
            <div className='imgPhoto'></div>
          </section>
        </section>
      </main>
    </>
  );
};
