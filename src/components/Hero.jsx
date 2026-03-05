import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.imageWrapper}>
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.greeting}>Hi, I'm Neelaza</h1>
          <p className={styles.intro}>
            I love understanding how systems are designed — from the infrastructure underneath to the product on top.
          </p>
          <p className={styles.description}>
            CS student at NJIT. I build production software — from PaceWise, an AI-powered endurance training platform, to cloud automation that saved $100K+ at Prudential. I care about shipping real things that real people use. 
          </p>
          <div className={styles.cta}>
            <a href="#experience" className={styles.button}>View My Work</a>
            <a href="#reading" className={styles.buttonSecondary}>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
