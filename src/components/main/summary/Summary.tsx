import { PORTFOLIO_DATA } from "../../../constants/portfolio.constant";

export const Summary = () => {
  return (
    <section className="section" aria-labelledby="summary-heading">
      <h3 id="summary-heading" className="lead">
        {PORTFOLIO_DATA.main.summary.heading}
      </h3>
      <p>
        {PORTFOLIO_DATA.main.summary.text}
      </p>
      <div className="stats" aria-hidden="true">
        <div className="stat">
          <div className="n">10+</div>
          <div className="small muted">{PORTFOLIO_DATA.main.summary.stats[0].label}</div>
        </div>
        <div className="stat">
          <div className="n">10+</div>
          <div className="small muted">{PORTFOLIO_DATA.main.summary.stats[1].label}</div>
        </div>
      </div>
    </section>
  );
}
