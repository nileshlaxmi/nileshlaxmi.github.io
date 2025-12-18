import { type FormEvent, useState } from "react";
import "./style.css";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/nileshlaxmi4@gmail.com", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className="section"
      aria-labelledby="contact-heading"
      style={{ marginTop: '12px' }}
    >
      <h3 id="contact-heading" className="lead">
        Contact Form
      </h3>
      <p className="small muted">
        Open to leadership roles • Relocation friendly
      </p>
      <form id="contactForm" onSubmit={handleSubmit} className="form">
        <label className="small">
          Name
          <input name="name" required className="form-input" />
        </label>
        <label className="small">
          Email
          <input name="_replyto" type="email" required className="form-input" />
        </label>
        <label className="small">
          Message
          <textarea name="message" rows={4} required className="form-input" />
        </label>
        <input type="hidden" name="_subject" value="Portfolio contact" />
        <button
          type="submit"
          className="btn primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        {status === "success" && (
          <div role="status" className="success">
            Thanks! I&apos;ll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="error">
            Oops! Something went wrong. Please try again.
          </div>
        )}
      </form>
    </section>
  );
}
