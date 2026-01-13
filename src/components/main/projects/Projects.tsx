import React from 'react'
import { PORTFOLIO_DATA } from '../../../constants/portfolio.constant'

export const Projects = () => {
  return (
    <section className="section" aria-labelledby="projects-heading" style={{ marginTop: 12 }}>
      <h3 id="projects-heading" className="lead">Selected Projects</h3>
      <p className="small muted">Click a project to add details or link to a case study.</p>
      <div className="projects" role="list">
        {PORTFOLIO_DATA.main.projects.map((p) => (
          <article key={p.title} className="project" role="listitem">
            <strong>{p.title}</strong>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}