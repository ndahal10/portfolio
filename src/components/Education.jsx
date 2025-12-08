import styles from './Education.module.css'

function Education() {
  const education = [
    {
      school: "New Jersey Institute of Technology",
      degree: "B.S. in Computer Science",
      description: "Building a strong foundation in computer science",
      achievements: [
        "Coursework: Data Structures & Algorithms, Database Design, Operating Systems, Computer Networks, Linear Algebra, Computer Architecture, Linux Programming, Agile/Scrum Methodologies",
        "Languages: Python, Java, JavaScript, C/C++, SQL, HTML/CSS",
        "Frameworks & Libraries: React.js, Node.js, Flask, Pandas, Boto3, Conda, Tailwind CSS",
        "Tools & Platforms: AWS, Git, Power BI, Tableau, Figma"
      ]
    }
  ]

  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <p className={styles.subtitle}>
          Always learning, always growing
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
