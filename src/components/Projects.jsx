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
        {projects.title}
      </h3>
      <p className="small muted">{projects.description}</p>
      <div className="projects" role="list">
        {projects.items.map((project) => (
          <article key={project.title} className="project" role="listitem">
            <strong>{project.title}</strong>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </FadeUp>
  );
}
