import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

function Navigation({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={(e) => scrollToSection(e, 'home')}>
          Neelaza Dahal
        </a>
        <ul className={styles.links}>
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
          <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
          <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
          <li><a href="#reading" onClick={(e) => scrollToSection(e, 'reading')}>Reading</a></li>
        </ul>
        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navigation
