import { PORTFOLIO_DATA } from "../../constants/portfolio.constant";
import type { FooterProps } from "./types";

export const Footer = ({ availability = 'Available for leadership roles • Open to relocation' }: FooterProps) => {
  return (
    <footer aria-label="Site footer" className="site-footer">
      <div style={{ marginBottom: 12 }}>{availability}</div>
      <div className="muted small" aria-hidden="true">
        © {new Date().getFullYear()} {<span className="name">{PORTFOLIO_DATA.header.name}</span>}
      </div>
    </footer>
  );
}