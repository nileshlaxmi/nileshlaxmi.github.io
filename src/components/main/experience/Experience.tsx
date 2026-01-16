import React from "react";
import DOMPurify from "dompurify";
import { PORTFOLIO_DATA } from "../../../constants/portfolio.constant";

type Job = {
  company: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
};

const JOBS: Job[] = PORTFOLIO_DATA.main.experience;

export function Experience() {
  return (
    <section
      className="section"
      aria-labelledby="exp-heading"
      style={{ marginTop: 12 }}
    >
      <h3 id="exp-heading" className="lead">
        Experience
      </h3>
      <div className="experience" role="list">
        {JOBS.map((job) => (
          <article
            key={job.company}
            className="job"
            role="listitem"
            aria-label={job.company}
          >
            <h3>
              {job.company} — {job.title}
            </h3>
            <div className="meta-job">
              {job.location} | {job.period}
            </div>
            <ul>
              {job.bullets.map((b, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(b) }}
                />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
