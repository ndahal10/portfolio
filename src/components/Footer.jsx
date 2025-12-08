import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Let's Connect</h3>
            <p>Always open to interesting conversations and opportunities.</p>
          </div>
          <div className={styles.section}>
            <h4>Links</h4>
            <div className={styles.links}>
              <a href="https://github.com/ndahal10" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/neelaza-dahal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:neelaza.dahal@outlook.com.com">Email</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Neelaza Dahal. Built with curiosity and code.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
