import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Interests from './components/Interests'
import SubstackList from './components/SubstackList'
import Footer from './components/Footer'
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Interests />
      <SubstackList />
      <Footer />
    </div>
  )
}

export default App
