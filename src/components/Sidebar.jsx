import FadeUp from './FadeUp.jsx';
import { skills, certifications } from '../data/portfolio.js';

export default function Sidebar() {
  return (
    <aside>
      <FadeUp className="section" aria-labelledby="skills-heading">
        <h3 id="skills-heading" className="lead">
          Skills
        </h3>
        <div className="skills" aria-hidden="false">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </FadeUp>

      <FadeUp
        className="section"
        aria-labelledby="edu-heading"
        style={{ marginTop: 12 }}
      >
        <h3 id="edu-heading" className="lead">
          Education
        </h3>
        <p className="small">
          <strong>B.Tech — Information Technology</strong>
          <br />
          GGSIPU, 2014
        </p>
      </FadeUp>

      <FadeUp
        className="section"
        aria-labelledby="cert-heading"
        style={{ marginTop: 12 }}
      >
        <h3 id="cert-heading" className="lead">
          Certifications
        </h3>
        <ul className="small muted">
          {certifications.map((cert) => (
            <li key={cert.url}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                {cert.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeUp>
    </aside>
  );
}
