import styles from './AppMarketing.module.css'

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2"/>
    <line x1="8" y1="11" x2="8" y2="16"/>
    <line x1="8" y1="8" x2="8" y2="8.01"/>
    <path d="M12 16v-5"/>
    <path d="M16 16v-3a2 2 0 0 0-4 0"/>
  </svg>
)

const posts = [
  {
    platform: 'Instagram',
    icon: <InstagramIcon />,
    image: '/portfolio/tvara-post-3.png',
    url: 'https://www.instagram.com/p/DZNMX9NReDN/?igsh=MTVqemNzeGlhaWo2eA==',
  },
  {
    platform: 'Instagram',
    icon: <InstagramIcon />,
    image: '/portfolio/tvara-post-2.png',
    url: 'https://www.instagram.com/p/DZLtlaCxuaI/?igsh=ZDluczRnbjhpNm5l',
  },
  {
    platform: 'Instagram',
    icon: <InstagramIcon />,
    image: '/portfolio/tvara-post-1.png',
    url: 'https://www.instagram.com/p/DZGjWaNx8ew/?igsh=MW4zbTIycW9qZW12aQ==',
  },
  {
    platform: 'LinkedIn',
    icon: <LinkedInIcon />,
    image: '/portfolio/linkedin-post-tvara.png',
    url: 'https://www.linkedin.com/company/tvara-app',
  },
]

function AppMarketing() {
  return (
    <section className={styles.marketing} id="tvara">
      <div className={styles.container}>
        <p className={styles.label}>Marketing</p>
        <div className={styles.header}>
          <h3 className={styles.appName}>Tvara App</h3>
          <p className={styles.tagline}>Follow along — we're building in public</p>
        </div>
        <div className={styles.posts}>
          {posts.map(({ platform, icon, image, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.postCard}
              aria-label={`Tvara App on ${platform}`}
            >
              <img src={image} alt={`Tvara App ${platform} post ${i + 1}`} className={styles.postImage} />
              <div className={styles.postOverlay}>
                <span className={styles.postPlatform}>{icon}{platform}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppMarketing
