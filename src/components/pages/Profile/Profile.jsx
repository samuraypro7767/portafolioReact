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
              
       
           <InformateAbout src="/profile.png" Title="Sobre Mi" TextInformate="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad odio provident eveniet. Quo ex deserunt dolorem minus ut iure rem distinctio! Nisi a deleniti tempora reiciendis. Ipsum, ex placeat?"></InformateAbout>

           <InformateAbout src="/Habilities.jpg" Title="Habilidades" TextInformate="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad odio provident eveniet. Quo ex deserunt dolorem minus ut iure rem distinctio! Nisi a deleniti tempora reiciendis. Ipsum, ex placeat?"></InformateAbout>

           <InformateAbout src="/experience.jpg" Title="Experiencia" TextInformate="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad odio provident eveniet. Quo ex deserunt dolorem minus ut iure rem distinctio! Nisi a deleniti tempora reiciendis. Ipsum, ex placeat?"></InformateAbout>

     
          

         </section>

        

 

      </main>
      
      <Footer />
    </>
  )
}
