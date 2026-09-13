import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";

import globalStyles from "./styles/global.css?url";
import headerStyles from "./styles/header.css?url";
import footerStyles from "./styles/footer.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: headerStyles },
  { rel: "stylesheet", href: footerStyles },
];

export const meta: MetaFunction = () => [
  { title: "James Haro - IT Technician" },
  {
    name: "description",
    content:
      "Example React Remix App incorporating Typescript, Node, and hosted on a Railway deployment.",
  },
];

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <div className="site">

          {/* Navigation */}

          <header className="site-header">
            <div className="header-inner">

              <Link to="/" className="brand">
                <span className="brand-mark">JH</span>
                <span className="brand-name">James Haro</span>
              </Link>

              <button
                type="button"
                className={`menu-button ${
                  sidebarOpen ? "menu-active" : ""
                }`}
                onClick={() => setSidebarOpen(true)}
                aria-label="Open Sidebar"
                aria-expanded={sidebarOpen}
              >
                <span />
                <span />
                <span />
              </button>

            </div>
          </header>

          {/* Sidebar */}

          <aside
            className={`sidebar ${
              sidebarOpen ? "sidebar-open" : ""
            }`}
          >
            <div className="sidebar-top">

              <Link
                to="/"
                className="sidebar-logo"
                onClick={() => setSidebarOpen(false)}
              >
                JH
              </Link>

              <button
                type="button"
                className="sidebar-close"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close Sidebar"
              >
                ×
              </button>

            </div>

            <nav className="sidebar-nav">

              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `sidebar-link ${
                    isActive ? "sidebar-link-active" : ""
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sidebar-icon">⌂</span>
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `sidebar-link ${
                    isActive ? "sidebar-link-active" : ""
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sidebar-icon">◎</span>
                <span>About Me</span>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `sidebar-link ${
                    isActive ? "sidebar-link-active" : ""
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sidebar-icon">✉</span>
                <span>Contact</span>
              </NavLink>

            </nav>

            <div className="sidebar-bottom">
              <span>Let's build something.</span>
              <a href="mailto:auracite@outlook.com">
                auracite@outlook.com
              </a>
            </div>
          </aside>

          {/* Mobile overlay */}

          {sidebarOpen && (
            <button
              type="button"
              className="sidebar-overlay"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation"
            />
          )}

          <main className="site-main">
            <Outlet />
          </main>

          <footer className="site-footer">
            <div className="footer-inner">

              <div className="footer-brand">
                <span className="footer-mark">JH</span>
                <span>James Haro</span>
              </div>

              <span className="footer-copy">
                © {new Date().getFullYear()} James Haro.
              </span>

              <div className="footer-links">
                <a
                  href="https://github.com/Ajorah/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/james-haro-617627345/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>

            </div>
          </footer>

        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
