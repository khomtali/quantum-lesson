import { Link } from "react-router-dom";
import { glossaryTerms } from "../content/siteContent";
import { LessonHero } from "../components/LessonHero";

export function GlossaryPage() {
  return (
    <div className="page-stack">
      <LessonHero
        eyebrow="мини-словарь"
        title="слова, без которых дальше всё начинает ехать"
        subtitle="короткие определения, когда мозг уже устал, а смысл терять всё-таки не хочется."
      />

      <section className="overview-grid glossary-grid">
        {glossaryTerms.map((term) => (
          <article key={term.term} className="overview-card">
            <h2>{term.term}</h2>
            <p>{term.description}</p>
            {term.lessonRoute ? (
              <Link className="text-link" to={term.lessonRoute}>
                где это всплывает в уроках
              </Link>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
