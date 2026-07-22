import FadeUp from './FadeUp.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <FadeUp
      className="section"
      aria-labelledby="exp-heading"
      style={{ marginTop: 12 }}
    >
      <h3 id="exp-heading" className="lead">
        Experience
      </h3>

      <div className="experience" role="list">
        {experience.map((job) => (
          <article key={`${job.company}-${job.timeline}`} className="job" role="listitem" aria-label={job.company}>
            <h3>
              {job.company} — {job.designation}
            </h3>
            <div className="meta-job">
              {job.location} | {job.timeline}
            </div>
            {job.techStack ? (
              <p className="tech-stack">
                <strong>Tech:</strong> {job.techStack}
              </p>
            ) : null}
            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </FadeUp>
  );
}
