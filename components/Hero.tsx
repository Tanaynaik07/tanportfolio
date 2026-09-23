"use client";

import "@/components/ui/Hero.css"

export default function Hero() {
  

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <i /> Available for selected projects
        </p>
        <h1>
          I build web products
          <br />
          <em>that work smarter.</em>
        </h1>
        <p className="hero-text">
          Web development, AI integration and business automation — brought
          together to turn ideas and repetitive workflows into useful
          products.
        </p>
        <div className="actions">
          <a className="btn primary" href="#work">
            See my work ↓
          </a>
          <a className="btn secondary" href="#contact">
            Start a project ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="ring ring-a" />
        <div className="ring ring-b" />
        <div className="core" >
          <small>BUILD</small>
          <strong>WEB</strong>
          <span>+ AI + AUTOMATION</span>
        </div>
        <b className="float f1">Next.js</b>
        <b className="float f2">AI</b>
        <b className="float f3">n8n</b>
        <b className="float f4">PostgreSQL</b>
      </div>
    </section>
  );
}
