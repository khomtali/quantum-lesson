interface KeyPointProps {
  text: string;
}

export function KeyPoint({ text }: KeyPointProps) {
  return (
    <section className="message-card key-point-card">
      <p className="message-label">Ключевая мысль</p>
      <p>{text}</p>
    </section>
  );
}
