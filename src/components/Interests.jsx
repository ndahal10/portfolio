import styles from './Interests.module.css'

function Interests() {
  const interests = [
    {
      title: "Traveling & Adventure",
      icon: "✈️",
      description: "From paragliding over the mountains of Nepal to exploring Europe with family, I seek out experiences that push my boundaries and create lasting memories.",
      highlights: [
        "Paragliding in Nepal - soaring above the Himalayas",
        "Traveled across Europe",
        "Big on family traveling - exploring the world together",
        "Planning the ABC trek in Nepal next"
      ]
    },
    {
      title: "Outdoor & Fitness",
      icon: "🚴",
      description: "Staying active through sports and outdoor adventures. Whether it's hitting the gym, running, or kayaking on calm waters, movement keeps me balanced.",
      highlights: [
        "Gym workouts and running",
        "Bicycling around town",
        "Kayaking in Cape Cod",
        "Hiking and photography"
      ]
    },
    {
      title: "Pinterest Inspiration",
      icon: "📌",
      description: "Curating ideas, design inspiration, and creative concepts. A visual catalog of what sparks my curiosity.",
      highlights: [
        "An eye for aesthetics and design",
        "Architecture and interior spaces",
        "Creative projects and visual storytelling"
      ]
    },
    {
      title: "Reading Substack",
      icon: "📖",
      description: "Diving deep into thoughtful writing on technology, culture, and ideas that challenge my thinking.",
      highlights: [
        "Personal growth and philosophy",
        "Tech trends and industry insights",
        "Long-form essays and storytelling",
        "Perspectives that spark curiosity"
      ]
    },
    {
      title: "Teaching & Mentoring",
      icon: "👩‍🏫",
      description: "Passionate about education and empowering the next generation. From tutoring in high school to being a TA in college, teaching has always been close to my heart.",
      highlights: [
        "Was a TA in college and tutored in high school",
        "Committed to making tech more accessible and inclusive",
        "Dream: Open a STEM program as early as elementary school"
      ]
    },
    {
      title: "Building & Learning",
      icon: "💻",
      description: "Constantly tinkering with new technologies, frameworks, and tools. Every side project is an opportunity to grow.",
      highlights: [
        "Full-stack development and cloud tech",
        "Infrastructure automation and DevOps",
        "Always learning something new"
      ]
    }
  ]

  return (
    <section className={styles.interests} id="interests">
      <div className={styles.container}>
        <h2 className={styles.title}>Interests & Passions</h2>
        <p className={styles.subtitle}>
          What keeps me curious and inspired
        </p>
        <div className={styles.grid}>
          {interests.map((interest, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{interest.icon}</div>
              <h3 className={styles.interestTitle}>{interest.title}</h3>
              <p className={styles.description}>{interest.description}</p>
              <ul className={styles.highlights}>
                {interest.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
