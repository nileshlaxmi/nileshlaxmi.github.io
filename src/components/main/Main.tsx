import Certifications from "./certifications";
import ContactForm from "./contact-form";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";
import Summary from "./summary";

export function Main() {
  return (
    <main id="content" className="main-content" tabIndex={-1}>
      <div className="main-section">
        <Summary />
        <Experience />
        <Projects />
        <ContactForm />
      </div>
      <aside className="aside">
        <Skills />
        <Education />
        <Certifications />
      </aside>
    </main>
  );
}
