import styles from './Education.module.css'

function Education() {
  const education = [
    {
      school: "New Jersey Institute of Technology",
      degree: "B.S. in Computer Science",
      achievements: [
        "Coursework: Data Structures & Algorithms, Database Design, Operating Systems, Computer Networks, Linear Algebra, Computer Architecture, Linux Programming, Agile/Scrum Methodologies",
        "Languages: Python, TypeScript, JavaScript, SQL, Java, C/C++",
        "Frameworks & Libraries: React.js, Next.js, Node.js, Express, Chart.js, Recharts",
        "Cloud & Infrastructure: AWS (Lambda, Step Functions, RDS, CloudFormation), Vercel, CI/CD",
        "Databases & Tools: PostgreSQL, MySQL, Firestore, Git, Power BI, Stripe"
      ]
    }
  ]

  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <p className={styles.subtitle}>
          Learning and growing
        </p>
        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.period}>{edu.period}</div>
              <h3 className={styles.school}>{edu.school}</h3>
              <h4 className={styles.degree}>{edu.degree}</h4>
              <p className={styles.description}>{edu.description}</p>
              {edu.achievements && (
                <ul className={styles.achievements}>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
