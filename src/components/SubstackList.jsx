import styles from './SubstackList.module.css'

function SubstackList() {
  const articles = [
    {
      title: "The terrifying freedom of having no idea what you're doing with your life",
      author: "Ayushi Thakkar",
      publication: "milk and cookies",
      url: "https://open.substack.com/pub/ayushithakkar/p/the-terrifying-freedom-of-having?r=5f8bnb&utm_medium=ios",
      description: "For those living in fear of making the wrong choice, and those learning to embrace uncertainty.",
      tags: ["Culture"]
    },
    {
      title: "Topics to research when you're bored",
      author: "The Book Club",
      publication: "Love Letters to Literature",
      url: "https://open.substack.com/pub/theebookclubx/p/topics-to-research-when-youre-bored-fda?r=5f8bnb&utm_medium=ios",
      description: "For curious minds, procrastinating scholars, and everyone avoiding their to-do list.",
      tags: ["Curiosity", "Philosophy"]
    },
    {
      title: "The Fig Tree Analogy: The lives we'll never live",
      author: "The Book Club",
      publication: "Love Letters to Literature",
      url: "https://open.substack.com/pub/theebookclubx/p/topics-to-research-when-youre-bored-fda?r=5f8bnb&utm_medium=ios",
      description: "on choice, paralysis, and the fear of missing your life while trying to choose it.",
      tags: ["Writing", "Growth"]
    },
    // Add more articles here
  ]

  return (
    <section className={styles.substack} id="reading">
      <div className={styles.container}>
        <h2 className={styles.title}>Substack Reading List</h2>
        <p className={styles.subtitle}>
          Thought-provoking articles that shaped my thinking
        </p>
        <div className={styles.articles}>
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <span className={styles.arrow}>→</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.author}>{article.author}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.publication}>{article.publication}</span>
              </div>
              <p className={styles.description}>{article.description}</p>
              <div className={styles.tags}>
                {article.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <p className={styles.note}>
          A living collection that grows as I discover more thought-provoking reads. Click any to read on Substack.
        </p>
      </div>
    </section>
  )
}

export default SubstackList
