import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SubstackList from './components/SubstackList'
import Footer from './components/Footer'
import styles from "./App.module.css"

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return 'light'
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
      <Experience />
      <Projects />
      <SubstackList />
      <Footer />
    </div>
  )
}

export default App
