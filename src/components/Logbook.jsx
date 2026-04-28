import { useState } from 'react'
import styles from './Logbook.module.css'

const entries = [
  {
    title: "Structured AI Output in a Production Training App",
    date: "March 2026",
    context: "Building PaceWise — an AI running coach that rebuilds training plans after every logged run. The AI layer talks to Claude via the Anthropic API.",
    problem: "Claude's training plan responses were coming back as free-form markdown. Parsing them downstream was brittle — field order shifted, section headers changed wording, and the frontend would silently receive malformed data with no errors thrown.",
    initialApproach: "Used a detailed system prompt describing the expected output format in prose. Added a regex-based parser on the backend to extract each section by scanning for headers like '## Week 1'.",
    failure: "The regex broke whenever Claude rephrased a heading (e.g. 'Week One' instead of 'Week 1'). Adding more regex patterns made the parser fragile and hard to maintain. Any prompt change could silently break the frontend.",
    whatChanged: "Switched to Zod-validated structured output using Claude's tool-use mode. Defined the training plan schema in Zod, passed it as a tool definition, and forced the model to call it. The response is now guaranteed to match the schema or throw at the API boundary.",
    finalSolution: "Defined a `generateTrainingPlan` tool with a Zod schema covering all required fields. Set `tool_choice: { type: 'tool', name: 'generateTrainingPlan' }` on every API call. Validation happens server-side before any data touches the frontend.",
    tradeoffs: "Tool-use mode adds ~200ms latency and slightly increases token usage. The schema also constrains Claude's flexibility — if the plan needs an unexpected field, the schema must be updated first.",
    takeaway: "Don't parse AI output with regex — define the schema upfront and let the model conform to it."
  }
]

function LogbookEntry({ entry }) {
  const [open, setOpen] = useState(false)

  const sections = [
    { label: 'Context', content: entry.context },
    { label: 'Problem', content: entry.problem },
    { label: 'Initial Approach', content: entry.initialApproach },
    { label: 'Failure / Constraint', content: entry.failure },
    { label: 'What Changed', content: entry.whatChanged },
    { label: 'Final Solution', content: entry.finalSolution },
    { label: 'Tradeoffs', content: entry.tradeoffs },
    { label: 'Key Takeaway', content: entry.takeaway },
  ]

  return (
    <div className={`${styles.entry} ${open ? styles.entryOpen : ''}`}>
      <button className={styles.entryHeader} onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <div className={styles.entryMeta}>
          <span className={styles.entryDate}>{entry.date}</span>
          <h3 className={styles.entryTitle}>{entry.title}</h3>
        </div>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {open && (
        <div className={styles.entryBody}>
          {sections.map(({ label, content }) => (
            <div key={label} className={styles.section}>
              <span className={styles.sectionLabel}>{label}</span>
              <p className={styles.sectionContent}>{content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function Logbook() {
  return (
    <section className={styles.logbook} id="logbook">
      <div className={styles.container}>
        <h2 className={styles.title}>Engineering Logbook</h2>
        <p className={styles.subtitle}>Real problems, real constraints, honest tradeoffs</p>
        <div className={styles.entries}>
          {entries.map((entry, i) => (
            <LogbookEntry key={i} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logbook
