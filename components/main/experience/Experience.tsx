import React from 'react'

type Job = {
  company: string
  title: string
  location: string
  period: string
  bullets: string[]
}

const JOBS: Job[] = [
  {
    company: 'Airtel Digital',
    title: 'Lead Engineer (Frontend)',
    location: 'Gurugram',
    period: 'Jan 2022 – Present',
    bullets: [
      'Championed WCAG 2.1 adoption across high-impact journeys and embedded accessibility into the delivery lifecycle.',
      'Led end-to-end upgrade flows for Thanks App and redesigned plan discovery to lift conversions.',
      'Delivered cross-platform reusable components and migrated legacy APIs for platform reusability.',
    ],
  },
  {
    company: 'TELUS International',
    title: 'Module Lead',
    location: 'Noida',
    period: 'Aug 2018 – Jan 2022',
    bullets: [
      'Built Visual IVR and chatbot frameworks with SSO and admin tooling.',
      'Led UI development for enterprise chatbot platforms and analytics dashboards.',
    ],
  },
  {
    company: 'NTT DATA Services',
    title: 'Software Development Analyst',
    location: 'Noida',
    period: 'Nov 2014 – Jun 2018',
    bullets: [
      'Delivered healthcare integration solutions using IBM middleware and HL7.',
      'Participated in EDI migrations, system testing and client trainings.',
    ],
  },
]

export function Experience() {
  return (
    <section className="section fade-up" aria-labelledby="exp-heading" style={{ marginTop: 12 }}>
      <h3 id="exp-heading" className="lead">Experience</h3>
      <div className="experience" role="list">
        {JOBS.map((job) => (
          <article key={job.company} className="job" role="listitem" aria-label={job.company}>
            <h3>{job.company} — {job.title}</h3>
            <div className="meta-job">{job.location} | {job.period}</div>
            <ul>
              {job.bullets.map((b, i) => <li key={i} dangerouslySetInnerHTML={{__html: b}} />)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}