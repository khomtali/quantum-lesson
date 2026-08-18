import { Link } from "react-router-dom";
import { LessonHero } from "../components/LessonHero";
import { lessonTwoSections } from "../content/siteContent";

export function LessonTwoPage() {
  return (
    <div className="page-stack">
      <LessonHero
        eyebrow="урок 2"
        title="интерпретации, наблюдение и то место, где люди обычно начинают красиво путаться"
        subtitle="пока это каркас следующего разговора: что означают уравнения, где начинаются трактовки и как не подменить физику вдохновением."
        summary="здесь важно не схлопнуть всё в одну кашу. сначала сами интерпретации, потом большие вопросы, и только потом осторожные параллели с буддизмом — без фокусов и самогипноза."
      />

      <section className="overview-grid">
        {lessonTwoSections.map((section) => (
          <article key={section.title} className="overview-card">
            <p className="overview-state">будущий раздел</p>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </article>
        ))}
      </section>

      <section className="message-card warning-card">
        <p className="message-label">где не надо врать</p>
        <p>
          квантовая механика не доказывает буддизм. буддизм не предсказал
          уравнение шрёдингера. а фраза “наблюдатель создаёт реальность силой
          сознания” обычно означает, что физику уже разобрали на сувениры.
        </p>
      </section>

      <section className="hero-panel compact-panel">
        <h2>сначала лучше пройти урок 1</h2>
        <p>
          иначе разговор про интерпретации будет выглядеть умно, но висеть в
          воздухе. сначала надо понять, какие факты вообще сломали старую
          картину.
        </p>
        <Link className="nav-button nav-button-link" to="/lesson/1">
          вернуться к фундаменту
        </Link>
      </section>
    </div>
  );
}
