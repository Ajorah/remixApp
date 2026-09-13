import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import styles from "~/styles/home.css?url";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  return (
    <div className="home-page">

      <section className="hero">

        <div className="hero-content">

          <p className="hero-eyebrow">
            DESIGNER / DEVELOPER
          </p>

          <h1>
            Ideas into
            <br />
            <span>experiences.</span>
          </h1>

          <p className="hero-description">
            I design and build digital experiences that are
            simple, thoughtful, and memorable.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="primary-button">
              Discover more
              <span>↗</span>
            </Link>

            <Link to="/contact" className="secondary-button">
              Let's talk
            </Link>
          </div>

        </div>

        <div className="hero-visual">
          <div className="visual-orb" />
          <div className="visual-ring visual-ring-one" />
          <div className="visual-ring visual-ring-two" />
          <div className="visual-dot" />
        </div>

      </section>

      <section className="home-intro">

        <div className="section-label">
          <span>01</span>
          <span>INTRODUCTION</span>
        </div>

        <div className="intro-body">

          <h2>
            Digital work with
            <span> personality.</span>
          </h2>

          <p>
            I believe great digital products should feel
            effortless. My approach combines thoughtful
            design with modern technology to create work
            that looks good and works even better.
          </p>

          <Link to="/about" className="text-link">
            More about me
            <span>→</span>
          </Link>

        </div>

      </section>

      <section className="services">

        <div className="service-card">
          <span>01</span>
          <h3>Design</h3>
          <p>
            Interfaces built around clarity, usability,
            and meaningful visual details.
          </p>
        </div>

        <div className="service-card">
          <span>02</span>
          <h3>Development</h3>
          <p>
            Fast, responsive websites and applications
            built with modern technologies.
          </p>
        </div>

        <div className="service-card">
          <span>03</span>
          <h3>Strategy</h3>
          <p>
            Turning complex ideas into simple,
            understandable digital experiences.
          </p>
        </div>

      </section>

    </div>
  );
}
