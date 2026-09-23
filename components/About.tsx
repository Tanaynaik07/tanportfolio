const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "PostgreSQL",
  "AI APIs",
  "n8n",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div>
        <p className="eyebrow">04 / About</p>
        <h2>
          Developer first.
          <br />
          <em>Problem focused.</em>
        </h2>
      </div>
      <div className="about-copy">
        <p>
          I&apos;m Tanay, a software developer focused on building practical
          web applications and connecting them with AI and automation where
          it creates real value.
        </p>
        <p>
          The goal isn&apos;t to use every new technology. It&apos;s to build
          the simplest system that solves the problem well.
        </p>
        <div className="stack">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
