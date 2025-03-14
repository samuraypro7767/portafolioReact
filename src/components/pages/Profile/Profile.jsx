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
          <source src='/background2.mp4' />
        </video>
        <div className="capa"></div>

        <section className='informationMain' >
              < InformateAbout className="informateAbout" TextInformate="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum exercitationem nemo vero est maiores totam quis neque nulla iusto, sint quidem asperiores tempore aliquam, molestias assumenda recusandae suscipit minus. 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum exercitationem nemo vero est maiores totam quis neque nulla iusto, sint quidem asperiores tempore aliquam, molestias assumenda recusandae suscipit minus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum exercitationem nemo vero est maiores totam quis neque nulla iusto, sint quidem asperiores tempore aliquam, molestias assumenda recusandae suscipit minus." Title="Habilidades" />

              < InformateAbout className="informateAbout" TextInformate="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum exercitationem nemo vero est maiores totam quis neque nulla iusto, sint quidem asperiores tempore aliquam, molestias assumenda recusandae suscipit minus. 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum exercitationem nemo vero est maiores totam quis neque nulla iusto, sint quidem asperiores tempore aliquam, molestias assumenda recusandae suscipit minus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum exercitationem nemo vero est maiores totam quis neque nulla iusto, sint quidem asperiores tempore aliquam, molestias assumenda recusandae suscipit minus." Title="Sobre Mi" />
              
              < InformateAbout className="informateAbout" TextInformate="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum exercitationem nemo vero est maiores totam quis neque nulla iusto, sint quidem asperiores tempore aliquam, molestias assumenda recusandae suscipit minus. 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum exercitationem nemo vero est maiores totam quis neque nulla iusto, sint quidem asperiores tempore aliquam, molestias assumenda recusandae suscipit minus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum exercitationem nemo vero est maiores totam quis neque nulla iusto, sint quidem asperiores tempore aliquam, molestias assumenda recusandae suscipit minus." Title="Experiencia" />
        
          </section>

      </main>
      
      <Footer />
    </>
  )
}
