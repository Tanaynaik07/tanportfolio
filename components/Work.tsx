"use client";

import { useEffect, useState } from "react";

type Project = {
  idx: string;
  category: string;
  title: string; // use \n for the two-line break
  desc: string;
  tags: string[];
  demo: string;
  repo: string;
  // Put files in /public/projects/<folder>/1.jpg etc. and list them here.
  images: string[];
};

const projects: Project[] = [
  {
    idx: "01",
    category: "FULL-STACK WEB APPLICATION",
    title: "EstateBro",
    desc: "Full-stack real estate platform for property discovery and management, featuring authentication, advanced search, property listings, subscriptions, analytics, and dedicated admin and staff portals.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind"],
    demo: "https://estatebro.onrender.com/",
    repo: "https://github.com/AritraNanda/Rael-Estate-Web",
    images: [
      "/project_images/realestate/estate_1.png",
      "/project_images/realestate/estate_2.png",
      "/project_images/realestate/estate_3.png",
      "/project_images/realestate/estate_4.png",
    ],
  },

  {
    idx: "02",
    category: "EDTECH WEB APPLICATION",
    title: "KanaQuest",
    desc: "Interactive Japanese learning platform for mastering Hiragana, Katakana, and Kanji through lessons, quizzes, progress tracking, experience points, and competitive leaderboards.",
    tags: ["React", "Node.js", "GraphQL", "MongoDB", "Redux", "Tailwind"],
    demo: "https://kanaquest123.onrender.com/",
    repo: "https://github.com/AritraNanda/kanaquest123",
    images: [
      "/project_images/kana/kana_1.png",
      "/project_images/kana/kana_2.png",
      "/project_images/kana/kana_3.png",
      "/project_images/kana/kana_4.png",
    ],
  },

  {
    idx: "03",
    category: "AI AUTOMATION",
    title: "Kestrel\nLead Extractor",
    desc: "AI-powered lead intake system that converts free-text inquiries into structured CRM data using Gemini, then automatically syncs leads to Google Sheets and sends formatted email notifications.",
    tags: ["Node.js", "Express", "Gemini", "Google Sheets", "Resend"],
    demo: "#",
    repo: "https://github.com/Tanaynaik07/Kestrel-Advisory-Lead-Extractor",
    images: [
      "/project_images/kestrel/kestrel_1.png",
      "/project_images/kestrel/kestrel_2.png",
      "/project_images/kestrel/kestrel_3.png",
    ],
  },

  {
    idx: "04",
    category: "WEB APPLICATION",
    title: "Finance\nManagement",
    desc: "Personal finance management application backed by Firebase and Firestore, designed to organize financial data through a practical web interface with persistent cloud storage.",
    tags: ["Node.js", "Firebase", "Firestore", "JavaScript"],
    demo: "https://finance-management-r99w.onrender.com/",
    repo: "https://github.com/Tanaynaik07/finance-management",
    images: [
      "/project_images/finance/finance_1.png",
      "/project_images/finance/finance_2.png",
      "/project_images/finance/finance_3.png",
    ],
  },

  {
    idx: "05",
    category: "DEVELOPER TOOL",
    title: "GitStats",
    desc: "Terminal-inspired GitHub profile explorer that analyzes repositories, languages, activity, commits, and profile statistics, with filtering, profile comparison, shareable URLs, and downloadable summary cards.",
    tags: ["JavaScript", "GitHub API", "REST API", "Canvas API"],
    demo: "https://tanaynaik07.github.io/gitstats/",
    repo: "https://github.com/Tanaynaik07/gitstats",
    images: [
      "/project_images/gitstat/gitstat_1.png",
      "/project_images/gitstat/gitstat_2.png",
      "/project_images/gitstat/gitstat_3.png",
      "/project_images/gitstat/gitstat_.png",
    ],
  },
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  const active = openIdx !== null ? projects[openIdx] : null;

  const close = () => setOpenIdx(null);
  const open = (i: number) => {
    setOpenIdx(i);
    setSlide(0);
  };
  const goSlide = (n: number) => {
    if (!active) return;
    const total = active.images.length;
    setSlide(((n % total) + total) % total);
  };

  useEffect(() => {
    if (openIdx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goSlide(slide + 1);
      if (e.key === "ArrowLeft") goSlide(slide - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIdx, slide]);

  return (
    <section id="work" className="section wx-section">
      <div className="row">
        <div>
          <p className="eyebrow">02 / Selected work</p>
          <h2>
            Things I&apos;ve
            <br />
            <em>actually built.</em>
          </h2>
        </div>
        <p className="note">
          A small selection. Tap a tile to open the project — images, stack
          and a live link.
        </p>
      </div>

      <div className="wx-grid">
        {projects.map((p, i) => {
          const preview = p.desc.split(" ").slice(0, 14).join(" ");
          return (
            <article
              key={p.idx}
              className={`wx-item${i === activeIndex ? " active" : ""}`}
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => open(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  open(i);
                }
              }}
            >
              <small>{p.idx}</small>
              <div>
                <p className="wx-cat">{p.category}</p>
                <h3>
                  {p.title.split("\n").map((line, li) => (
                    <span key={li}>
                      {line}
                      {li === 0 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="wx-desc">
                  {preview}
                  {p.desc.split(" ").length > 14 ? "…" : ""}
                </p>
              </div>
              {/* <div className="tags">
                {p.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div> */}
              <span className="wx-hint">View project ↗</span>
            </article>
          );
        })}
      </div>

      <div
        className={`wx-overlay${active ? " wx-open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {active && (
          <div className="wx-dialog" role="dialog" aria-modal="true">
            <button className="wx-close" aria-label="Close" onClick={close}>
              ✕
            </button>

            <div className="wx-info">
              <p className="wx-d-idx">
                {active.idx} / {active.category}
              </p>
              <h2>{active.title.replace("\n", " ")}</h2>
              <p className="wx-d-desc">{active.desc}</p>
              <div className="wx-tags">
                {active.tags.map((t) => (
                  <span className="wx-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="wx-links">
                <a href={active.demo} target="_blank" rel="noopener noreferrer">
                  Live demo ↗
                </a>
                <a
                  className="wx-secondary"
                  href={active.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source ↗
                </a>
              </div>
            </div>

            <div className="wx-media">
              <div className="wx-carousel">
                <div
                  className="wx-track"
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                  {active.images.map((src, si) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={src}
                      src={src}
                      alt={`${active.title.replace("\n", " ")} screenshot ${
                        si + 1
                      }`}
                      className="wx-slide-img"
                    />
                  ))}
                </div>
                {active.images.length > 1 && (
                  <>
                    <div
                      className="wx-nav wx-prev"
                      onClick={() => goSlide(slide - 1)}
                    >
                      ‹
                    </div>
                    <div
                      className="wx-nav wx-next"
                      onClick={() => goSlide(slide + 1)}
                    >
                      ›
                    </div>
                  </>
                )}
              </div>
              {active.images.length > 1 && (
                <div className="wx-dots">
                  {active.images.map((_, di) => (
                    <i
                      key={di}
                      className={di === slide ? "wx-active" : ""}
                      onClick={() => goSlide(di)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Grid of project tiles — same bordered-cell language as .cap-grid */
        .wx-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
          margin-top: 4rem;
        }
        .wx-item {
          position: relative;
          background: var(--bg);
          padding: 1.5rem;
          min-height: 290px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          transition: background 0.3s cubic-bezier(.4,0,.2,1),
            transform 0.3s cubic-bezier(.4,0,.2,1),
            box-shadow 0.3s cubic-bezier(.4,0,.2,1);
          -webkit-tap-highlight-color: transparent;
        }
        .wx-item:hover,
        .wx-item.active,
        .wx-item:focus-visible {
          background: var(--surface);
          outline: none;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }
        .wx-item > small {
          font: 500 0.62rem "DM Mono", monospace;
          color: var(--accent);
        }
        .wx-cat {
          font: 500 0.58rem "DM Mono", monospace;
          letter-spacing: 0.06em;
          color: var(--muted);
          margin: 4rem 0 0.6rem;
        }
        .wx-item h3 {
          font-size: 1.15rem;
          line-height: 1.2;
          margin: 0 0 0.6rem;
        }
        .wx-desc {
          font-size: 0.8rem;
          line-height: 1.5;
          color: var(--muted);
          max-width: 260px;
          margin: 0;
        }
        .wx-item .tags {
          margin-top: 1.5rem;
        }
        .wx-hint {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font: 500 0.6rem "DM Mono", monospace;
          color: var(--accent);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.25s cubic-bezier(.4,0,.2,1),
            transform 0.25s cubic-bezier(.4,0,.2,1);
        }
        .wx-item:hover .wx-hint,
        .wx-item.active .wx-hint,
        .wx-item:focus-visible .wx-hint {
          opacity: 1;
          transform: translateX(0);
        }

        /* Modal / lightbox — recolored to the site palette, same behaviour */
        .wx-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(10, 10, 11, 0);
          backdrop-filter: blur(0px) saturate(120%);
          -webkit-backdrop-filter: blur(0px) saturate(120%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 50;
        }
        .wx-overlay.wx-open {
          opacity: 1;
          pointer-events: auto;
          background: rgba(10, 10, 11, 0.65);
          backdrop-filter: blur(11px) saturate(120%);
          -webkit-backdrop-filter: blur(11px) saturate(120%);
        }
        .wx-dialog {
          width: 100%;
          max-width: 900px;
          max-height: 86vh;
          background: var(--surface);
          border: 1px solid var(--line);
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          transform: scale(0.9) translateY(10px);
          opacity: 0;
          overflow: hidden;
          animation: wxDialogIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes wxDialogIn {
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        .wx-info {
          padding: 38px 34px;
          overflow-y: auto;
          border-right: 1px solid var(--line);
        }
        .wx-d-idx {
          font: 500 11px "DM Mono", monospace;
          color: var(--accent);
          margin: 0 0 16px;
        }
        .wx-info h2 {
          font-size: 28px;
          line-height: 1.15;
          margin: 0 0 16px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .wx-d-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--muted);
          margin: 0 0 22px;
        }
        .wx-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 26px;
        }
        .wx-tag {
          font: 500 11px "DM Mono", monospace;
          color: var(--muted);
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 5px 10px;
        }
        .wx-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .wx-links a {
          font: 700 12.5px Manrope, sans-serif;
          color: #101011;
          background: var(--accent);
          border-radius: 999px;
          padding: 10px 16px;
          text-decoration: none;
          display: inline-block;
        }
        .wx-secondary {
          background: transparent !important;
          color: var(--text) !important;
          border: 1px solid var(--line);
        }
        .wx-media {
          position: relative;
          background: var(--bg);
          display: flex;
          flex-direction: column;
        }
        .wx-carousel {
          position: relative;
          flex: 1;
          overflow: hidden;
        }
        .wx-track {
          display: flex;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wx-slide-img {
          flex: 0 0 100%;
          height: 100%;
          width: 100%;
          object-fit: contain;
          display: block;
        }
        .wx-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 34px;
          height: 34px;
          border: 1px solid var(--line);
          background: rgba(10, 10, 11, 0.6);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          user-select: none;
        }
        .wx-nav:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .wx-prev {
          left: 12px;
        }
        .wx-next {
          right: 12px;
        }
        .wx-dots {
          display: flex;
          gap: 6px;
          justify-content: center;
          padding: 12px;
          border-top: 1px solid var(--line);
        }
        .wx-dots i {
          width: 6px;
          height: 6px;
          background: var(--line);
          border-radius: 50%;
          display: block;
          cursor: pointer;
        }
        .wx-dots i.wx-active {
          background: var(--accent);
        }
        .wx-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 5;
          width: 32px;
          height: 32px;
          border: 1px solid var(--line);
          background: rgba(10, 10, 11, 0.55);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
        }
        .wx-close:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        @media (max-width: 720px) {
          .wx-dialog {
            grid-template-columns: 1fr;
            grid-template-rows: auto 240px;
            max-height: 90vh;
          }
          .wx-info {
            border-right: none;
            border-bottom: 1px solid var(--line);
            padding: 28px 22px;
          }
        }
        @media (max-width: 850px) {
          .row {
            display: block;
          }
          .note {
            margin-top: 1rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wx-dialog,
          .wx-overlay,
          .wx-item {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}