// import IntakeChat from "@/components/assistant/IntakeChat";

// export default function Contact() {
//   return (
//     <section id="contact" className="section contact">
//       <p className="eyebrow">05 / Start a project</p>
//       <h2>
//         Have a problem
//         <br />
//         <em>worth building around?</em>
//       </h2>
//       <p className="muted">
//         Tell me what you&apos;re trying to build, automate or improve.
//       </p>
//       <IntakeChat />
//       <p className="contact-fallback">
//         Prefer email?{" "}
//         <a href="mailto:hello@example.com">hello@example.com ↗</a>
//       </p>
//     </section>
//   );
// }


// import IntakeChat from "@/components/assistant/IntakeChat";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="eyebrow">05 / Start a project</p>
      <h2>
        Have a problem
        <br />
        <em>worth building around?</em>
      </h2>
      <p className="muted" style={{ marginInline: "auto" }}>
        Tell me what you&apos;re trying to build, automate or improve.
      </p>

      {/* <IntakeChat /> */}
      {/* TODO: swap back to <IntakeChat /> once the assistant backend is ready */}

      <div className="contact-email-card">
        <div className="contact-email-icon" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 6-10 7L2 6" />
          </svg>
        </div>
        <div className="contact-email-copy">
          <small>Prefer email? Reach out directly</small>
          <a href="mailto:hello@example.com">techbytan@example.com ↗</a>
        </div>
      </div>
    </section>
  );
}