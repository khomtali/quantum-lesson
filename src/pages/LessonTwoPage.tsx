import { Link } from "react-router-dom";
import { LessonHero } from "../components/LessonHero";
import { lessonTwoSections } from "../content/siteContent";

export function LessonTwoPage() {
  return (
    <div className="page-stack">
      <LessonHero
        eyebrow="Урок 2"
        title="Интерпретации, наблюдение и осторожные параллели с буддизмом"
        subtitle="Пока это каркас следующего разговора: что означают уравнения, где начинаются трактовки и где важно не скатиться в красивую попсу."
        summary="Здесь мы не смешиваем науку и философию в одну кашу. Сначала фиксируем интерпретации, затем большие вопросы, и только потом — очень осторожные параллели."
      />

      <section className="overview-grid">
        {lessonTwoSections.map((section) => (
          <article key={section.title} className="overview-card">
            <p className="overview-state">Будущий раздел</p>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </article>
        ))}
      </section>

      <section className="message-card warning-card">
        <p className="message-label">Где не надо врать</p>
        <p>
          Квантовая механика не доказывает буддизм, буддизм не предсказал
          уравнение Шрёдингера, а “наблюдатель создаёт реальность силой сознания”
          почти всегда означает, что физику уже упростили до неузнаваемости.
        </p>
      </section>

      <section className="hero-panel compact-panel">
        <h2>Сначала лучше пройти урок 1</h2>
        <p>
          Чтобы разговор про интерпретации был живым, а не туманным, полезно
          сначала закрепить, какие именно эксперименты и идеи к ним привели.
        </p>
        <Link className="nav-button nav-button-link" to="/lesson/1">
          Вернуться к фундаменту
        </Link>
      </section>
    </div>
  );
}
