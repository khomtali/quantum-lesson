import { Link } from "react-router-dom";
import { glossaryTerms } from "../content/siteContent";
import { LessonHero } from "../components/LessonHero";

export function GlossaryPage() {
  return (
    <div className="page-stack">
      <LessonHero
        eyebrow="Мини-словарь"
        title="Небольшие опорные слова для маршрута"
        subtitle="Короткие определения без академической тяжести, чтобы можно было быстро освежить смысл термина."
      />

      <section className="overview-grid glossary-grid">
        {glossaryTerms.map((term) => (
          <article key={term.term} className="overview-card">
            <h2>{term.term}</h2>
            <p>{term.description}</p>
            {term.lessonRoute ? (
              <Link className="text-link" to={term.lessonRoute}>
                Где встречается в уроках
              </Link>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
