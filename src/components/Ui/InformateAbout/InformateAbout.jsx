import React from 'react'

export const InformateAbout = ({Title,TextInformate,src}) => {
  return (
    <>
    <div className="card">
        <section class="face front">
            <img src={src}  />
            <h3>{Title}</h3>
        </section>

        <section class="face back">
          <h3>{Title}</h3>
          <article className='containerTextCard'> 
          <p>{TextInformate}</p>
          </article>
        </section>
        
    </div>
  
    </>
  )
}
