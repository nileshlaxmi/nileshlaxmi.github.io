import FadeUp from './FadeUp.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <FadeUp
      className="section"
      aria-labelledby="projects-heading"
      style={{ marginTop: 12 }}
    >
      <h3 id="projects-heading" className="lead">
        Selected Projects
      </h3>
      <p className="small muted">
        Platform modernization, scalable frontend architecture, accessibility, and customer
        experience engineering across Airtel Web & Thanks App ecosystems.
      </p>
      <div className="projects" role="list">
        {projects.map((project) => (
          <article key={project.title} className="project" role="listitem">
            <strong>{project.title}</strong>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </FadeUp>
  );
}
