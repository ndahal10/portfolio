import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SubstackList from './components/SubstackList'
import Footer from './components/Footer'
import styles from "./App.module.css"

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div className={styles.App}>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <SubstackList />
      <Footer />
    </div>
  )
}

export default App
