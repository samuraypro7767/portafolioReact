import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Footer } from '../../Layouts/Footer/Footer'
import { InformateAbout } from '../../Ui/InformateAbout/InformateAbout'

export const Profile = () => {
  return (
    <>
      <Header />
      <main className='mainProfle'>
        <video id="miVideo" muted autoPlay loop>
          <source src='/background1.mp4' />
        </video>
        <div className="capa"></div>

        <section className='informationMain' >
              
       
           <InformateAbout src="/profile.png" Title="Sobre Mi" TextInformate="Soy una persona proactiva, comprometida y con gran motivación por alcanzar mis metas. Tengo capacidad de aprendizaje rápido, adaptabilidad y siempre estoy abierto a nuevas ideas. "></InformateAbout>

           <InformateAbout src="/Habilities.jpg" Title="Educacion" TextInformate="Técnico en Programación de Software graduado en 2023 (I.E. Román María Valencia), actualmente culminando mi tecnólogo. Con habilidades en desarrollo de software.  "></InformateAbout>

           <InformateAbout src="/experience.webp" Title="Objeptivos" TextInformate="Busco oportunidades para crecer profesionalmente  donde pueda aportar mis habilidades técnicas y una de mis meta es crecer como profesional en el campo de la programación, enfrentando nuevos retos que me permitan expandir mis capacidades "></InformateAbout>

        
          

         </section>

        

 

      </main>
      
      <Footer />
    </>
  )
}
