import { useEffect } from "react";
import Certifications from "./certifications";
import ContactForm from "./contact-form";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";
import Summary from "./summary";

export function Main() {
    useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    if (!els.length) return;

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    } else {
      // fallback for old browsers
      els.forEach((el) => el.classList.add("visible"));
    }
  }, []);
  return (
    <main >
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
  )
}