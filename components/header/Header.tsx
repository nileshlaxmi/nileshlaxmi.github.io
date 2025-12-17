import Avatar from "./avatar";
import ContactInfo from "./contact-info";
import SocialLinks from "./social-links";
import ThemeToggle from "./theme-toggle";

export function Header() {
  return (
    <header>
      <div className="title" id="name">
        <Avatar />
        <div>
          <h1>Nilesh Laxmi</h1>
          <h2>Frontend Tech Lead / Cross-Platform UI Lead</h2>
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
          Download resume
        </a>
      </div>
    </header>
  )
}