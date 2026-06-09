import FadeUp from './FadeUp.jsx';

export default function Summary() {
  return (
    <FadeUp className="section" aria-labelledby="summary-heading">
      <h3 id="summary-heading" className="lead">
        Summary
      </h3>
      <p>
        Frontend Tech Lead / Cross-Platform UI Lead with 10+ years of experience building
        scalable, high-traffic, and accessible digital platforms serving millions of users.
        Specialized in React, React Native Web, modern JavaScript, and platform modernization
        across web and app ecosystems. Proven track record in driving large-scale migrations,
        BFF integrations, performance optimization, WCAG accessibility adoption, and
        business-critical customer journeys with measurable impact on revenue, conversion,
        and operational efficiency.
      </p>
      <div className="stats" aria-hidden="true">
        <div className="stat">
          <div className="n">10+</div>
          <div className="small muted">Years</div>
        </div>
        <div className="stat">
          <div className="n">10+</div>
          <div className="small muted">Products</div>
        </div>
      </div>
    </FadeUp>
  );
}
