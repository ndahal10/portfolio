import styles from './Projects.module.css'

function Projects() {
  const projects = [
    {
      name: "STYGO",
      period: "2025",
      description: "Multi-tenant salon management and booking platform",
      summary: "Architected tenant-isolated data access in MySQL with row-level scoping and role-based dashboards for owners, staff, and customers. Built dual-auth supporting manual JWT cookie sessions and Firebase OAuth with automatic role assignment, plus SMS 2FA with a Twilio-to-ClickSend fallback. Implemented Stripe payments, loyalty points, automated notifications, and revenue analytics as discrete backend services.",
      url: "https://stygo.app"
    }
  ]

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <p className={styles.label}>Projects</p>
        <div className={styles.list}>
          {projects.map((project, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.name}>{project.name}</h3>
                  <p className={styles.description}>{project.description}</p>
                </div>
                <span className={styles.period}>{project.period}</span>
              </div>
              <p className={styles.summary}>{project.summary}</p>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View site →
                </a>
              )}
              {project.note && (
                <p className={styles.note}>{project.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
