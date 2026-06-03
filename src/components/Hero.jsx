import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Neelaza Dahal"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.greeting}>Hi, I'm Neelaza.</h1>
          <p className={styles.intro}>
            I love understanding how systems are designed, from the infrastructure underneath to the product on top.
          </p>
          <p className={styles.description}>
            As a recent NJIT graduate, my <strong>obsession with building</strong> started early. It began with assembling whatever I could get my hands on, acting as family tech support, and spending hours <strong>reverse-engineering problems</strong> just to understand them. I was even building basic robots in Scratch before I formally knew what programming was. My dad used to take me to <strong>MIT events</strong>, and somewhere between the whiteboards and the founders, I fell in love with both the <strong>engineering and the entrepreneurial</strong> sides of technology.
          </p>
          <p className={styles.description}>
            Now, I build software. I want to join a team where I can <strong>ship real products</strong>, learn from <strong>world-class engineers</strong>, and be surrounded by people who push each other. Ultimately, I want to help build the kind of <strong>community and pathway</strong> I wish had existed for <strong>women entering this field</strong>.
          </p>
          <div className={styles.social}>
            <a href="https://github.com/ndahal10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/neelaza-dahal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:neelaza.dahal@outlook.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
