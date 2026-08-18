import { Link } from "react-router-dom";
import { lessonCards } from "../content/siteContent";

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel home-hero">
        <p className="eyebrow">не конспект, а маршрут на двоих</p>
        <h1>это не “почитать про квантмех”. это посмотреть, где мир перестал быть таким удобным.</h1>
        <p className="hero-subtitle">
          сайт собран как подарок-урок: без простыни, без псевдодуховного тумана,
          без лишнего шума. один экран — одна мысль, одна схема, один сдвиг.
        </p>
        <p className="hero-summary">
          сначала факты. потом трещина в старой картине. потом новая теория.
          и только после этого можно лезть в разговоры про смысл, наблюдение и
          всё остальное, что люди обычно начинают слишком рано.
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
              открыть раздел
            </Link>
          </article>
        ))}
      </section>

      <section className="overview-grid">
        <article className="overview-card">
          <p className="overview-state">формат</p>
          <h2>не лекция, а маршрут, где мысль не успевает расползтись</h2>
          <p>
            каждый экран держит одну идею. не пять, не девять, не “сейчас всё
            объясню”. так абстракция не успевает превратиться в пластик.
          </p>
        </article>

        <article className="overview-card">
          <p className="overview-state">акценты</p>
          <h2>три места, где старая уверенность дала трещину</h2>
          <p>
            фотоэффект, спектры и две щели здесь не для галочки. это те места,
            после которых классическая невозмутимость начинает вести себя уже не
            так уверенно.
          </p>
        </article>

        <article className="overview-card">
          <p className="overview-state">дальше</p>
          <h2>сначала фундамент, потом можно лезть в интерпретации</h2>
          <p>
            второй урок специально идёт после базы. иначе вместо разговора про
            интерпретации начинается тёплая, но бесполезная каша.
          </p>
        </article>
      </section>
    </div>
  );
}
