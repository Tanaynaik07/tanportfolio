"use client";

import { useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Web Applications",
    description:
      "Modern, responsive applications built around what the product actually needs.",
    tags: ["Next.js", "TypeScript", "Postgres"],
  },
  {
    number: "02",
    title: "AI Integration",
    description:
      "Useful AI features inside real products — not AI added just for the buzzword.",
    tags: ["LLMs", "RAG", "AI APIs"],
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Connect forms, data, AI and external services to remove repetitive manual work.",
    tags: ["n8n", "Webhooks", "APIs"],
  },
  {
    number: "04",
    title: "Custom Tools",
    description:
      "Internal dashboards, workflows and small systems built around a specific problem.",
    tags: ["Dashboards", "Auth", "Integrations"],
  },
  {
    number: "05",
    title: "Consulting",
    description: "Help deciding what to build, what to automate, and what to skip before you commit engineering time to it.",
    tags: ["Audits", "Architecture", "Roadmapping"],
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="capabilities" className="section">
      <div className="heading">
        <p className="eyebrow">01 / Capabilities</p>
        <h2>
          More than just
          <br />
          <em>building websites.</em>
        </h2>
      </div>

      <div className="cap-grid">
        {capabilities.map((cap, index) => (
          <article
            key={cap.number}
            className={`cap${index === activeIndex ? " active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <small>{cap.number}</small>
            <h3>{cap.title}</h3>
            <p>{cap.description}</p>
            <div className="tags">
              {cap.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
