import FadeUp from './FadeUp.jsx';
import { summary } from '../data/portfolio.js';

export default function Summary() {
  return (
    <FadeUp className="section" aria-labelledby="summary-heading">
      <h3 id="summary-heading" className="lead">
        {summary.title}
      </h3>
      <p>{summary.description}</p>
      <div className="stats" aria-hidden="true">
        {summary.stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <div className="n">{stat.value}</div>
            <div className="small muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </FadeUp>
  );
}
