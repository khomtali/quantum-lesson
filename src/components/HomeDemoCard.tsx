import type { HomeDemo } from "../types";

interface HomeDemoCardProps {
  demo: HomeDemo;
}

export function HomeDemoCard({ demo }: HomeDemoCardProps) {
  return (
    <section className="message-card home-demo-card">
      <p className="message-label">это можно посмотреть дома</p>
      <h3>{demo.title}</h3>
      <p>
        <strong>что взять:</strong> {demo.materials.join(", ")}.
      </p>
      <p>
        <strong>что это показывает:</strong> {demo.shows}
      </p>
      <p>
        <strong>чего это не покажет:</strong> {demo.limits}
      </p>
    </section>
  );
}
