import styles from './Education.module.css'

function Education() {
  const skills = [
    { label: "Languages", value: "Python, TypeScript, JavaScript, SQL, Java, C/C++" },
    { label: "Frameworks", value: "React.js, Next.js, Node.js, Express, Zod, Chart.js, Recharts" },
    { label: "Cloud", value: "AWS (Lambda, Step Functions, RDS, CloudFormation), Vercel, GitHub Actions" },
    { label: "Databases & AI", value: "PostgreSQL, MySQL, Supabase, Firestore, Anthropic API, Git, Power BI, Stripe" },
  ]

  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <p className={styles.label}>Education</p>
        <div className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3 className={styles.school}>New Jersey Institute of Technology</h3>
            <span className={styles.period}>May 2026</span>
          </div>
          <p className={styles.degree}>B.S. Computer Science</p>
          <div className={styles.skills}>
            {skills.map((skill, i) => (
              <div key={i} className={styles.skillRow}>
                <span className={styles.skillLabel}>{skill.label}</span>
                <span className={styles.skillValue}>{skill.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
