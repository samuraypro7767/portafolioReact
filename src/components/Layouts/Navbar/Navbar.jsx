import React from 'react'
import{ItemNavbarUl} from '../../Ui/ItemNavbarUl/ItemNavbarUl.jsx'
import { ItemImg } from '../../Ui/itemImg/itemImg.jsx'



export const Navbar = () => {
  return (
    <>
     <nav className="navbar">
        <ul className="list">
          <ItemNavbarUl contenido="Inicio" link="/" />
          <ItemNavbarUl contenido="Sobre Mi " link="/profile" />
          <ItemNavbarUl contenido="Proyectos" link="/studies" />
          
        </ul>
        
      </nav>
    </>
  )
}
