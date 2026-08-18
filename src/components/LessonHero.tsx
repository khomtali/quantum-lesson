interface LessonHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  summary?: string;
}

export function LessonHero({
  eyebrow,
  title,
  subtitle,
  summary
}: LessonHeroProps) {
  return (
    <section className="lesson-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      {summary ? <p className="hero-summary">{summary}</p> : null}
    </section>
  );
}
