import { Link } from "react-router-dom";
import { LessonHero } from "../components/LessonHero";
import { quickQuestions } from "../content/siteContent";

export function QuestionsPage() {
  return (
    <div className="page-stack">
      <LessonHero
        eyebrow="вопросы по дороге"
        title="то, что обычно хочется спросить сразу, пока лицо ещё не приняло сложную форму"
        subtitle="короткие ответы на нормальные вопросы, которые вылезают ровно в тот момент, когда внутренняя уверенность уже поехала, а ясность ещё не приехала."
      />

      <section className="overview-grid">
        {quickQuestions.map((item) => (
          <article key={item.question} className="overview-card question-card">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
            {item.lessonRoute ? (
              <Link className="text-link" to={item.lessonRoute}>
                вернуться туда, где это разбирается
              </Link>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
