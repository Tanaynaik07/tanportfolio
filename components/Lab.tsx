export default function Lab() {
  return (
    <section id="lab" className="section lab">
      <div>
        <p className="eyebrow">03 / AI + Automation Lab</p>
        <h2>
          Don&apos;t just put AI
          <br />
          on the page.
          <br />
          <em>Connect it to the workflow.</em>
        </h2>
        <p className="muted">
          This can become a real interactive demonstration of how a request
          moves through an AI-powered workflow.
        </p>
      </div>

      <div className="workflow">
        <div className="node">
          <b>01</b>
          <strong>Visitor</strong>
          <small>Project request</small>
        </div>
        <div className="connector" />
        <div className="node">
          <b>02</b>
          <strong>AI analysis</strong>
          <small>Classify + extract</small>
        </div>
        <div className="connector" />
        <div className="node">
          <b>03</b>
          <strong>Automation</strong>
          <small>n8n workflow</small>
        </div>
        <div className="outputs">
          <span>✦ Database</span>
          <span>✦ Notification</span>
          <span>✦ Follow-up</span>
        </div>
      </div>
    </section>
  );
}
