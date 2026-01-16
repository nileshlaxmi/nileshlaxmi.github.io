import { PORTFOLIO_DATA } from "../../../constants/portfolio.constant";

export const ContactInfo = () => {
  return (
    <div className="meta" style={{ marginTop: 6 }}>
      <div>{PORTFOLIO_DATA.header.location}</div>
      <div>&middot;</div>
      <div className="muted">{PORTFOLIO_DATA.header.phone}</div>
      <div>&middot;</div>
      <div>
        <a href="mailto:nileshlaxmi4@gmail.com">
          {PORTFOLIO_DATA.header.email}
        </a>
      </div>
    </div>
  );
}
