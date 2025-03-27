import React from 'react';
import './Habilities.css';

import PhpIcon from './icons/php.svg';
import CsharpIcon from './icons/csharp.svg';
import JavaIcon from './icons/java.svg';
import JavascriptIcon from './icons/javascript.svg';
import PythonIcon from './icons/python.svg';
import TypescriptIcon from './icons/typescript.svg';
import ReactIcon from './icons/react.svg';
import GithubIcon from './icons/github.svg';
import GitIcon from './icons/git.svg';
import MysqlIcon from './icons/mysql.svg';
import HtmlIcon from './icons/html.svg';
import CssIcon from './icons/css.svg';

export const Habilities = () => {
  const skills = [
    { name: 'PHP', level: 65, icon: PhpIcon },
    { name: 'C#', level: 50, icon: CsharpIcon },
    { name: 'Java', level: 86, icon: JavaIcon },
    { name: 'JavaScript', level: 90, icon: JavascriptIcon },
    { name: 'Python', level: 75, icon: PythonIcon },
    { name: 'TypeScript', level: 60, icon: TypescriptIcon },
    { name: 'React', level: 92, icon: ReactIcon },
    { name: 'GitHub', level: 85, icon: GithubIcon },
    { name: 'Git', level: 80, icon: GitIcon },
    { name: 'MySQL', level: 90, icon: MysqlIcon },
    { name: 'HTML', level: 100, icon: HtmlIcon },
    { name: 'CSS', level: 80, icon: CssIcon },
  ];

  return (
 <>
    <main className='mainProfle'>
        <video id="miVideo" muted autoPlay loop>
          <source src='/background1.mp4' />
        </video>
        <div className="capa"></div>

    
    <div className="habilities-container">
      <div className="habilities-header">
        <h1>PERFIL DE HABILIDADES</h1>
        <h2>Mis habilidades técnicas</h2>
        <p className="habilities-description">
          Una visualización elegante de mi experiencia y nivel en diferentes lenguajes de programación y tecnologías.
        </p>
      </div>
      
      <div className="habilities-divider"></div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="skill-icon"
                style={{ width: '24px', height: '24px' }}
              />
              <h3>LENGUAJE {skill.name}</h3>
            </div>
            <p className="skill-label">Nivel de habilidad</p>
            <div className="skill-bar">
              <div 
                className="skill-level" 
                style={{ width: `${skill.level}%` }}
                data-level={skill.level}
              >
                <span>{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    </main>

    </>
  );
};
