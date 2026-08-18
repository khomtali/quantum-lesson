import { Link } from "react-router-dom";
import { lessonCards } from "../content/siteContent";

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel home-hero">
        <p className="eyebrow">не конспект, а маршрут на двоих</p>
        <h1>это не “почитать про квантмех”. это пройти, как мир треснул.</h1>
        <p className="hero-subtitle">
          сайт собран как подарок-урок: без простыни, без псевдомистики, без
          лишнего шума. один экран — одна идея, одна схема, один вывод.
        </p>
        <p className="hero-summary">
          сначала не философия, а факты: где классика перестала тянуть. потом —
          что из этого выросло и почему это вообще касается вашей реальности.
        </p>
        <div className="hero-actions">
          <Link className="nav-button nav-button-link" to="/lesson/1">
            открыть урок 1
          </Link>
          <Link className="nav-button nav-button-secondary nav-button-link" to="/lesson/2">
            посмотреть урок 2
          </Link>
        </div>
      </section>

      <section className="lesson-card-grid">
        {lessonCards.map((lesson) => (
          <article key={lesson.href} className="overview-card">
            <p className="overview-state">{lesson.state}</p>
            <h2>{lesson.title}</h2>
            <h3>{lesson.subtitle}</h3>
            <p>{lesson.description}</p>
            <Link className="text-link" to={lesson.href}>
              Открыть раздел
            </Link>
          </article>
        ))}
      </section>

      <section className="overview-grid">
        <article className="overview-card">
          <p className="overview-state">формат</p>
          <h2>не лекция, а цепочка ударов</h2>
          <p>
            каждый экран держит одну мысль, чтобы внимание не расползалось.
            так абстракция не успевает стать туманом.
          </p>
        </article>

        <article className="overview-card">
          <p className="overview-state">акценты</p>
          <h2>три места, где классика посыпалась</h2>
          <p>
            фотоэффект, спектры и две щели здесь не “темы урока”, а точки
            разлома, после которых старый здравый смысл уже не собирается назад.
          </p>
        </article>

        <article className="overview-card">
          <p className="overview-state">дальше</p>
          <h2>сначала фундамент, потом бездна</h2>
          <p>
            второй урок оставлен осторожным: меньше проповеди, больше разбора
            интерпретаций, наблюдения и границы между мыслью и натяжкой.
          </p>
        </article>
      </section>
    </div>
  );
}
