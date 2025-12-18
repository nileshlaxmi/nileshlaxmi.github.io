import React from 'react'

const PROJECTS = [
  {
    title: 'International Roaming Journey',
    desc: 'React + TypeScript. Accessibility-first redesign of purchase, activation and tariff-selection flows; offline-capable states and clearer billing consent.',
  },
  {
    title: 'Broadband Change Plan — UI',
    desc: 'React + TypeScript. Accessibility-first redesign and conversion improvements.',
  },
  {
    title: 'Prepaid Recharge Journey',
    desc: 'Multi-screen recharge flow with intelligent plan suggestions, saved payment & wallet support, progressive validation.',
  },
  {
    title: 'Design System',
    desc: 'Reusable tokens, Storybook and cross-platform components for web & mobile.',
  },
  {
    title: 'Track Request Journey',
    desc: 'Unified order & complaint tracking that significantly reduced assisted calls.',
  },
]

export function Projects() {
  return (
    <section className="section" aria-labelledby="projects-heading" style={{ marginTop: 12 }}>
      <h3 id="projects-heading" className="lead">Selected Projects</h3>
      <p className="small muted">Click a project to add details or link to a case study.</p>
      <div className="projects" role="list">
        {PROJECTS.map((p) => (
          <article key={p.title} className="project" role="listitem">
            <strong>{p.title}</strong>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}