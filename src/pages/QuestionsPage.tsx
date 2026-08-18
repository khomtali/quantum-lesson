import { Link } from "react-router-dom";
import { LessonHero } from "../components/LessonHero";
import { quickQuestions } from "../content/siteContent";

export function QuestionsPage() {
  return (
    <div className="page-stack">
      <LessonHero
        eyebrow="вопросы по дороге"
        title="то, что обычно хочется спросить сразу, не дожидаясь конца"
        subtitle="короткие ответы на нормальные вопросы, которые возникают ровно в тот момент, когда мозг начинает слегка скрипеть."
      />

      <section className="overview-grid">
        {quickQuestions.map((item) => (
          <article key={item.question} className="overview-card question-card">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
            {item.lessonRoute ? (
              <Link className="text-link" to={item.lessonRoute}>
                вернуться к нужному уроку
              </Link>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
