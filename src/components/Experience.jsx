import styles from './Experience.module.css'

function Experience() {
  const experiences = [
    {
      company: "Prudential Financial",
      role: "Technology Rotational Associate - Data Engineer",
      period: "July 2025 - Present",
      description: "Leading data infrastructure and BI solutions development for enterprise reporting",
      highlights: [
        "Designed data models and developed parameterized SQL queries in Power BI for dynamic reporting across multiple business units",
        "Optimized Redshift query performance through database tuning and strategic indexing, reducing query latency by 40%",
        "Led deployment of enterprise web application for self-service metric definition updates using CloudFormation, RDS (PostgreSQL), and AWS infrastructure",
        "Enabled company-wide standardized KPI access with real-time database updates"
      ],
      technologies: ["AWS", "Redshift", "Power BI", "PostgreSQL", "CloudFormation", "SQL", "RDS"]
    },
    {
      company: "Prudential Financial",
      role: "Software Engineer Intern",
      period: "June 2024 - August 2024",
      description: "Built cloud automation solutions and infrastructure tools serving 1,000+ employees",
      highlights: [
        "Automated and centralized AWS-Nuke across sandbox accounts using Cloud Control API, CloudFormation, and Boto3",
        "Cut decommission time by 90% and generated $100K+ in annual cloud cost savings",
        "Built secure AWS Console access solution with frontend UI and backend service for temporary AWS-AD credentials",
        "Reduced manual credential requests by 85% through automated deployment via PruCloud CLI"
      ],
      technologies: ["AWS", "Python", "Boto3", "CloudFormation", "CI/CD", "Cloud Control API"]
    },
    {
      company: "Nuveen, TIAA",
      role: "Software Engineer Intern",
      period: "June 2023 - August 2023",
      description: "Developed data visualization tools for investment portfolio analytics platform",
      highlights: [
        "Built React-based interactive data visualization widget for bond price-yield datasets with REST API integration",
        "Implemented efficient data caching layers that minimized redundant API calls by 60%",
        "Boosted portfolio analytics portal adoption by 50% through price history visualization feature",
        "Enhanced real-time rendering performance and reduced backend load for analysts"
      ],
      technologies: ["React", "REST APIs", "JavaScript", "Data Visualization", "Caching"]
    },
    {
      company: "STYGO",
      role: "Full-Stack Developer",
      period: "Spring 2025",
      description: "Personal project: Salon management and booking platform with payment processing",
      highlights: [
        "Developed full-stack platform with user authentication and role-based access control",
        "Implemented customer-facing features: salon browsing, real-time appointment scheduling, Stripe payment processing",
        "Built comprehensive dashboards for staff operations, service configuration, revenue tracking, and customer analytics",
        "Integrated email/SMS notification system for appointment reminders and promotional campaigns"
      ],
      technologies: ["React", "Node.js", "Stripe", "Authentication", "SMS/Email APIs", "Full-Stack"]
    },
    {
      company: "Women in Computing Society, NJIT",
      role: "Events Coordinator",
      period: "January 2022 - May 2023",
      description: "Led event coordination and mentorship for women in tech community",
      highlights: [
        "Organized GirlHacks, one of the region's largest hackathons with 300+ participants and 10+ sponsors",
        "Coordinated logistics, scheduling, and cross-team meetings with faculty, industry partners, and student leaders",
        "Mentored and supported women in tech, fostering professional growth and networking opportunities",
        "Built a more inclusive tech community through leadership and advocacy"
      ],
      technologies: ["Leadership", "Event Management", "Mentoring", "Community Building"]
    }
  ]

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.subtitle}>
          Building, breaking, and learning from every project
        </p>
        <div className={styles.grid}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <h4 className={styles.role}>{exp.role}</h4>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.description}>{exp.description}</p>
              <ul className={styles.highlights}>
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className={styles.technologies}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
