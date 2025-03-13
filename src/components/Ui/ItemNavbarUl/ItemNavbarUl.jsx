import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbarUl = ({contenido , link}) => {
  return (
    <>
       
       <li><NavLink  to={link}>{contenido}</NavLink></li>
        
    </>
  )
}
