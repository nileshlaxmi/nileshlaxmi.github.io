import { PORTFOLIO_DATA } from "../../constants/portfolio.constant";
import Avatar from "./avatar";
import ContactInfo from "./contact-info";
import SocialLinks from "./social-links";
import ThemeToggle from "./theme-toggle";
import { MdDownload } from "react-icons/md";

export const Header = () => {
  return (
    <header>
      <div className="title" id="name">
        <Avatar initials={PORTFOLIO_DATA.header.avatar} />
        <div>
          <h1>{PORTFOLIO_DATA.header.name}</h1>
          <h2>{PORTFOLIO_DATA.header.title}</h2>
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>

      <div className="actions" role="toolbar" aria-label="actions">
        <ThemeToggle />
        <a
          id="downloadResume"
          className="btn primary"
          href="docs/resume.pdf"
          download="Nilesh-Laxmi-Resume.pdf"
        >
          {PORTFOLIO_DATA.header.actions.downloadResume.text}
          <MdDownload style={{ marginLeft: "4px" }} />
        </a>
      </div>
    </header>
  );
};
