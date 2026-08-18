import { Link } from "react-router-dom";
import { LessonHero } from "../components/LessonHero";
import { quickQuestions } from "../content/siteContent";

export function QuestionsPage() {
  return (
    <div className="page-stack">
      <LessonHero
        eyebrow="Вопросы по дороге"
        title="То, что хочется спросить сразу"
        subtitle="Небольшие ответы на самые естественные вопросы, которые всплывают прямо в процессе урока."
      />

      <section className="overview-grid">
        {quickQuestions.map((item) => (
          <article key={item.question} className="overview-card question-card">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
            {item.lessonRoute ? (
              <Link className="text-link" to={item.lessonRoute}>
                Вернуться к нужному уроку
              </Link>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
