import FadeUp from './FadeUp.jsx';
import { skills, education, certifications } from '../data/portfolio.js';

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
          {education.title}
        </h3>
        {education.items.map((item) => (
          <p className="small" key={`${item.degree}-${item.year}`}>
            <strong>{item.degree}</strong>
            <br />
            {item.school}, {item.year}
          </p>
        ))}
      </FadeUp>

      <FadeUp
        className="section"
        aria-labelledby="cert-heading"
        style={{ marginTop: 12 }}
      >
        <h3 id="cert-heading" className="lead">
          {certifications.title}
        </h3>
        <ul className="small muted">
          {certifications.items.map((cert) => (
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
