import styles from './Experience.module.css'

const tvaraPosts = [
  {
    platform: 'Instagram',
    image: '/portfolio/tvara-post-3.png',
    url: 'https://www.instagram.com/p/DZNMX9NReDN/?igsh=MTVqemNzeGlhaWo2eA==',
  },
  {
    platform: 'Instagram',
    image: '/portfolio/tvara-post-2.png',
    url: 'https://www.instagram.com/p/DZLtlaCxuaI/?igsh=ZDluczRnbjhpNm5l',
  },
  {
    platform: 'Instagram',
    image: '/portfolio/tvara-post-1.png',
    url: 'https://www.instagram.com/p/DZGjWaNx8ew/?igsh=MW4zbTIycW9qZW12aQ==',
  },
  {
    platform: 'LinkedIn',
    image: '/portfolio/linkedin-post-tvara.png',
    url: 'https://www.linkedin.com/company/tvara-app',
  },
]

function Experience() {
  const experiences = [
    {
      company: "Tvara App",
      role: "CTO & Founder",
      period: "March 2026 — Present",
      summary: "AI-powered adaptive running coach that regenerates personalized weekly training plans after every logged run.",
      url: "https://tvara-app.com/",
      posts: tvaraPosts,
    },
    {
      company: "Prudential Financial",
      role: "Technology Associate",
      period: "July 2025 — January 2026",
      summary: "Migrated 50+ KPIs from spreadsheets into a real-time dashboard, reducing manual reporting effort by 10+ hours weekly. Built a phishing simulation dashboard with role-based insights for leadership and audited faulty measures across 50% of reported KPIs, restoring full data accuracy."
    },
    {
      company: "Ying Wu College of Computing, NJIT",
      role: "Undergraduate Teaching Assistant",
      period: "September 2023 — May 2025",
      summary: "Mentored 30+ students in Intro to Python through weekly office hours focused on production debugging patterns, code optimization, and core programming concepts."
    },
    {
      company: "Prudential Financial",
      role: "Software Engineer Intern",
      period: "June 2024 — August 2024",
      summary: "Automated AWS account decommissioning, cutting decommission time by 90% and saving $100K+ annually in cloud costs."
    },
    {
      company: "Nuveen, TIAA",
      role: "Software Engineer Intern",
      period: "June 2023 — August 2023",
      summary: "Shipped price history and trend visualization features for a production investment portfolio platform, replacing spreadsheet-based bond tracking and driving a 50% increase in platform adoption among analysts."
    }
  ]

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <p className={styles.label}>Experience</p>
        <div className={styles.list}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <p className={styles.role}>{exp.role}</p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.summary}>{exp.summary}</p>
              {exp.url && (
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View site →
                </a>
              )}
              {exp.posts && (
                <div className={styles.posts}>
                  {exp.posts.map((post, j) => (
                    <a
                      key={j}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.postCard}
                      aria-label={`Tvara App on ${post.platform}`}
                    >
                      <img src={post.image} alt={`Tvara App ${post.platform} post`} className={styles.postImage} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
