import { useState } from 'react';
import FadeUp from './FadeUp.jsx';

const FORM_ACTION = 'https://formspree.io/f/nileshlaxmi4@gmail.com';

export default function ContactForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setMessage('Sending…');
  };

  return (
    <FadeUp
      className="section"
      aria-labelledby="contact-heading"
      style={{ marginTop: 12 }}
    >
      <h3 id="contact-heading" className="lead">
        Contact Form
      </h3>
      <p className="small muted">Open to leadership roles • Relocation friendly</p>

      <form
        className="contact-form"
        action={FORM_ACTION}
        method="POST"
        onSubmit={handleSubmit}
      >
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
        <button type="submit" className="btn primary">
          Send message
        </button>
        <div className="form-message" role="status" aria-live="polite">
          {message}
        </div>
      </form>
    </FadeUp>
  );
}
