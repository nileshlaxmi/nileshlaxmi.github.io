import React from 'react'

const CERTS = [
  { title: 'FreeCodeCamp — Front End Libraries', url: 'https://www.freecodecamp.org/certification/nileshlaxmi/front-end-development-libraries' },
  { title: 'FreeCodeCamp — Javascript Algorithms and Data Structures', url: 'https://www.freecodecamp.org/certification/nileshlaxmi/javascript-algorithms-and-data-structures-v8' },
  { title: 'FreeCodeCamp — Responsive Web Design', url: 'https://www.freecodecamp.org/certification/nileshlaxmi/responsive-web-design' },
]

export function Certifications() {
  return (
    <section className="section fade-up" aria-labelledby="certs-heading" style={{ marginTop: 12 }}>
      <h3 id="certs-heading" className="lead">Certifications</h3>
      <ul className="small muted">
        {CERTS.map(c => (
          <li key={c.title}><a href={c.url} target="_blank" rel="noopener noreferrer">{c.title}</a></li>
        ))}
      </ul>
    </section>
  )
}