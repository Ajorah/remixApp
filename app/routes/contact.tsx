import { Form } from "@remix-run/react";

export default function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">

        <p className="contact-eyebrow">
          GET IN TOUCH
        </p>

        <h1>
          Let's make
          <br />
          <span>something great.</span>
        </h1>

        <p>
          Have a project, idea, or just want to say hello?
          Send me a message.
        </p>

      </section>

      <section className="contact-content">

        <div className="contact-info">

          <span className="contact-label">
            CONTACT
          </span>

          <a
            href="mailto:auracite@outlook.com"
            className="contact-email"
          >
            auracite@outlook.com
          </a>

          <p>
            I'm always interested in hearing about new
            projects and interesting ideas.
          </p>

          <div className="contact-socials">
            <a href="https://github.com/Ajorah/">
              GitHub ↗
            </a>

            <a href="https://www.linkedin.com/in/james-haro-617627345/">
              LinkedIn ↗
            </a>
          </div>

        </div>

        <Form method="post" className="contact-form">

          <label>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              required
            />
          </label>

          <label>
            <span>Contact Email</span>
            <input
              type="email"
              name="email"
              placeholder="jane.smith@email.com"
              required
            />
          </label>

          <label>
            <span>Contact Phone</span>
            <input
              type="tel"
              name="phone"
              placeholder="(780)123-4567"
              required
            />
          </label>
          
          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me a little about your project..."
              required
            />
          </label>

          <button type="submit" className="contact-submit">
            Send!
            <span>↗</span>
          </button>

        </Form>

      </section>

    </div>
  );
}
