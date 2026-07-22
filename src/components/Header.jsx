import ThemeToggle from './ThemeToggle.jsx';
import { profile } from '../data/portfolio.js';

export default function Header() {
  const { name, role, location, phone, email, avatar, links, resume } = profile;

  return (
    <header>
      <div className="title" id="name">
        <div className="avatar" aria-hidden="true">
          {avatar}
        </div>
        <div>
          <h1>{name}</h1>
          <h2>{role}</h2>
          <div className="meta" style={{ marginTop: 6 }}>
            <div>{location}</div>
            <div>&middot;</div>
            <div className="muted">{phone}</div>
            <div>&middot;</div>
            <div>
              <a href={email.href}>{email.label}</a>
            </div>
          </div>
          <div className="meta" style={{ marginTop: 6 }}>
            {links.map((link) => (
              <div key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="actions" role="toolbar" aria-label="actions">
        <ThemeToggle />
        <a className="btn primary" href={resume.href} download={resume.download}>
          {resume.label}
        </a>
      </div>
    </header>
  );
}
