import { PORTFOLIO_DATA } from "../../../constants/portfolio.constant";

export const SocialLinks = () => {
  return (
    <div className="meta" style={{ marginTop: 6 }}>
      {PORTFOLIO_DATA.header.socialLinks.map(({ name, url }) => (
        <div key={name}>
          <a href={url} target="_blank" rel="noopener">
            {name}
          </a>
        </div>
      ))}
    </div>
  );
};
