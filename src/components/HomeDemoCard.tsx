import type { HomeDemo } from "../types";

interface HomeDemoCardProps {
  demo: HomeDemo;
}

export function HomeDemoCard({ demo }: HomeDemoCardProps) {
  return (
    <section className="message-card home-demo-card">
      <p className="message-label">Можно увидеть дома</p>
      <h3>{demo.title}</h3>
      <p>
        <strong>Что взять:</strong> {demo.materials.join(", ")}.
      </p>
      <p>
        <strong>Что показывает:</strong> {demo.shows}
      </p>
      <p>
        <strong>Чего не показывает:</strong> {demo.limits}
      </p>
    </section>
  );
}
