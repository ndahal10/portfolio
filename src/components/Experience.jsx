import styles from './Experience.module.css'

function Experience() {
  const experiences = [
    {
      company: "Prudential Financial",
      role: "Technology Associate",
      period: "July 2025 - January 2026",
      description: "Led data infrastructure and BI solutions development for enterprise reporting",
      summary: "Delivered business intelligence improvements by migrating 50+ KPIs from spreadsheets to AWS RDS/PostgreSQL and building real-time dashboards that saved 10+ hours of weekly reporting time.",
      technologies: ["AWS", "Redshift", "Power BI", "PostgreSQL", "CloudFormation"]
    },
    {
      company: "Prudential Financial",
      role: "Software Engineer Intern",
      period: "June 2024 - August 2024",
      description: "Built cloud automation solutions and infrastructure tools serving 1,000+ employees",
      summary: "Automated AWS resource cleanup across sandbox accounts, reducing decommission time by 90% and generating $100K+ annual savings while building secure credential access solution for 1,000+ employees.",
      technologies: ["AWS", "Python", "Boto3", "CloudFormation"]
    },
    {
      company: "Nuveen, TIAA",
      role: "Software Engineer Intern",
      period: "June 2023 - August 2023",
      description: "Developed data visualization tools for investment portfolio analytics platform",
      summary: "Built interactive React visualization widget with efficient caching that reduced API calls by 60% and boosted platform adoption by 50%.",
      technologies: ["React", "REST APIs", "JavaScript"]
    },
    {
      company: "Women in Computing Society, NJIT",
      role: "Events Coordinator",
      period: "January 2022 - May 2023",
      description: "Led event coordination and mentorship for women in tech community",
      summary: "Organized GirlHacks hackathon with 300+ participants and 10+ sponsors while mentoring women in tech and fostering an inclusive community.",
      technologies: ["Leadership", "Event Management", "Mentoring", "Community Building"]
    }
  ]

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.subtitle}>Building, breaking, and learning from every project</p>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.company}>{exp.company}</h3>
                <h4 className={styles.role}>{exp.role}</h4>
                <p className={styles.description}>{exp.description}</p>
                <p className={styles.summary}>{exp.summary}</p>
                <div className={styles.technologies}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
