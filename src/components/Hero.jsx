import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.imageWrapper}>
            <img
              src="/profile.jpg"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.greeting}>Hi, I'm Neelaza</h1>
          <p className={styles.intro}>
            Software Engineer at Prudential Financial.
          </p>
          <p className={styles.description}>
            Passionate about full-stack development and cloud technologies, I love building
            things and learning along the way. When I'm not coding, you'll find me exploring
            new places, discovering great writing on Substack, and collecting inspiration
            from around the web. I'm dedicated to mentoring, volunteering, and staying
            current with emerging technologies. This space is my journey of continuous
            learning and growth.
          </p>
          <div className={styles.cta}>
            <a href="#experience" className={styles.button}>View My Work</a>
            <a href="#interests" className={styles.buttonSecondary}>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
