import React from 'react'

export const Footer = () => {
    return(
        <>
            <footer className="footer">
                
                <h3> &copy; 2025 Desarrollador de sofware. todos los derechos reservado</h3>
                <section className="social-links">
                    <a href="https://github.com/samuraypro7767?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img  src="/github.png" className="social-icon github"  />
                    </a>
                    <a href="https://www.linkedin.com/checkpoint/lg/login?session_redirect=%2Fauthwall&fromSignIn=true&trk=seo-authwall-base_google-one-tap-submit" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.png" alt="LinkedIn"  className="social-icon" />
                    </a>
                    <a href="https://wa.link/t9t5un" target="_blank" rel="noopener noreferrer">
                    <img src="/whasapp.png" alt="WhatsApp" className="social-icon" />
                    </a>
                    <a href="https://cloudhq.net/s/c9556a4c9a6f79" target="_blank" rel="noopener noreferrer">
                    <img src="/gmail.png" alt="gmail" className="social-icon" />
                    </a>
                </section>
            </footer>
        </>
    )
}
