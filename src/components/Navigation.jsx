import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

function Navigation() {
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
          <li><a href="#interests" onClick={(e) => scrollToSection(e, 'interests')}>Interests</a></li>
          <li><a href="#reading" onClick={(e) => scrollToSection(e, 'reading')}>Reading</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
