import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faGlobe, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { profile, education, experience, skills, projects } from '../../services/portfolioService';

const Portfolio = () => {
  // Estado para el carrusel de educación
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Control del carrusel de educación
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === education.length - 1 ? 0 : prevSlide + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? education.length - 1 : prevSlide - 1));
  };
  
  // Cambio automático de slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="portfolio-container">
      {/* Sección de perfil */}
      <section className="profile-section">
        <h2 className="section-title">Perfil Profesional</h2>
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-image">
              <img src={profile.photo} alt={profile.name} />
            </div>
            <div className="profile-info">
              <h1>{profile.name}</h1>
              <h2>{profile.title}</h2>
              <p>{profile.description}</p>
            </div>
          </div>
          <div className="profile-contact">
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              <span>{profile.location}</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span>{profile.email}</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <span>{profile.phone}</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faGlobe} size="lg" />
              <span>{profile.website}</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              <span>{profile.linkedin}</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span>{profile.github}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de educación */}
      <section className="education-section">
        <h2 className="section-title">Formación Académica</h2>
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <div className="carousel-wrapper">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="education-card">
                  <div className="education-logo">
                    <img src={edu.logo} alt={edu.institution} />
                  </div>
                  <div className="education-details">
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <span className="education-year">{edu.year}</span>
                    <p>{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-button next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          
          <div className="carousel-indicators">
            {education.map((_, index) => (
              <div 
                key={index} 
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección de experiencia */}
      <section className="experience-section">
        <h2 className="section-title">Experiencia Laboral</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="company-logo">
                  <img src={exp.logo} alt={exp.company} />
                </div>
                <div className="experience-details">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                  <span className="experience-period">{exp.period}</span>
                  <p>{exp.description}</p>
                  
                  <div className="achievements">
                    <h5>Logros destacados:</h5>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Sección de habilidades */}
      <section className="skills-section">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.percentage}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Sección de proyectos */}
      <section className="projects-section">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="technology-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">Ver proyecto</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 