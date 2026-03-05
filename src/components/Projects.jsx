import styles from './Projects.module.css'

function Projects() {
  const projects = [
    {
      name: "PaceWise",
      period: "2026",
      description: "AI running coach that rebuilds your training plan based on real performance data",
      summary: "Shipped production-grade — real auth, Firestore backend, and Claude AI with structured output validation. Users log pace, heart rate, distance, and cadence; the AI rebuilds their training plan after every run.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Claude API", "Vercel"],
      url: "https://pace-wise.vercel.app/"
    },
    {
      name: "STYGO",
      period: "2025",
      description: "Salon management and booking platform with payment processing",
      summary: "Built full-stack salon booking platform with Stripe payments, real-time scheduling, and comprehensive dashboards for staff operations and analytics.",
      technologies: ["React", "Node.js", "Stripe", "Authentication", "SMS/Email APIs", "Full-Stack"],
      url: "https://main.d9mc2v9b3gxgw.amplifyapp.com/"
    }
  ]

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>Things I've built outside of work</p>
        <div className={styles.timeline}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <span className={styles.period}>{project.period}</span>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
                <p className={styles.summary}>{project.summary}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.deployedLink}>
                    View Deployed Site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
