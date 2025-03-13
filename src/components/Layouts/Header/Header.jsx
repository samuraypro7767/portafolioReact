import React from 'react'
import { Navbar } from '../Navbar/Navbar.jsx'


export const Header = () => {
  return (
    <>
        <header >
              <div className="logo">
                <img src="/icon.png" alt="icon" width="50" />
                <h1><span>Porta</span>Folio</h1>
                </div>
            
            <Navbar />
        </header>
    </>
  )
}
