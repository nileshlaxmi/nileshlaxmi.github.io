import React from 'react'

const SKILLS = [
  'JavaScript',
  'React',
  'Redux',
  'React Native Web',
  'TypeScript',
  'HTML',
  'CSS',
  'PWA',
  'Webpack',
  'SASS/SCSS',
  'Accessibility (WCAG)',
  'Design Systems',
  'CI / CD'
] as const

export function Skills() {
  return (
    <section className="section fade-up" aria-labelledby="skills-heading">
      <h3 id="skills-heading" className="lead">Skills</h3>
      <div className="skills" aria-hidden="false" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {SKILLS.map(skill => (
          <span key={skill} className="chip" style={{ margin: 0 }}>{skill}</span>
        ))}
      </div>
    </section>
  )
}