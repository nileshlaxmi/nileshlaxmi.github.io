import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  return (
    <header>
      <div className="title" id="name">
        <div className="avatar" aria-hidden="true">
          NL
        </div>
        <div>
          <h1>Nilesh Laxmi</h1>
          <h2>Frontend Tech Lead / Cross-Platform UI Lead</h2>
          <div className="meta" style={{ marginTop: 6 }}>
            <div>Delhi, India</div>
            <div>&middot;</div>
            <div className="muted">+91 • hidden</div>
            <div>&middot;</div>
            <div>
              <a href="mailto:nileshlaxmi4@gmail.com">nileshlaxmi4@gmail.com</a>
            </div>
          </div>
          <div className="meta" style={{ marginTop: 6 }}>
            <div>
              <a
                href="https://www.linkedin.com/in/nilesh-laxmi"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a
                href="https://nileshlaxmi.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </div>
            <div>
              <a
                href="https://github.com/nileshlaxmi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="actions" role="toolbar" aria-label="actions">
        <ThemeToggle />
        <a
          className="btn primary"
          href="/docs/resume.pdf"
          download="Nilesh-Laxmi-Resume.pdf"
        >
          Download resume
        </a>
      </div>
    </header>
  );
}
