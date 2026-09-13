
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import styles from "~/styles/about.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function About() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <p className="about-eyebrow">
          ABOUT ME
        </p>

        <h1>
          A little about
          <br />
          <span>who I am.</span>
        </h1>

      </section>

      <section className="about-content">

        <div className="about-sidebar">
          <span>01</span>
          <span>THE PERSON</span>
        </div>

        <div className="about-copy">

          <p className="about-lead">
            I'm James, a designer and developer who enjoys
            making things for the web.
          </p>

          <p>
            My work lives somewhere between design,
            technology, and curiosity. I enjoy taking
            complicated problems and finding simple,
            elegant ways to solve them.
          </p>

          <p>
            When I'm not working on a project, I'm usually
            exploring new ideas, learning something new,
            or finding an excuse to spend time away from
            a screen.
          </p>

          <div className="about-details">

            <div>
              <span>Based in</span>
              <strong>Canada</strong>
            </div>

            <div>
              <span>Specialty</span>
              <strong>Web & Product</strong>
            </div>

            <div>
              <span>Available</span>
              <strong>Freelance projects</strong>
            </div>

          </div>

          <Link to="/contact" className="about-button">
            Start a conversation ↗
          </Link>

        </div>

      </section>

    </div>
  );
}
