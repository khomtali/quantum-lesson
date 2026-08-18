import { Link } from "react-router-dom";
import { lessonCards } from "../content/siteContent";

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel home-hero">
        <p className="eyebrow">не конспект, а маршрут на двоих</p>
        <h1>когда начинаешь разбираться в квантмехе, сначала трещит не мир. сначала трещит привычка.</h1>
        <p className="hero-subtitle">
          мне хотелось собрать это не как очередной “материал по теме”, а как
          маршрут, по которому можно идти вдвоём. остановиться. зависнуть.
          вернуться на шаг назад. и в какой-то момент поймать, где именно
          реальность перестала быть такой послушной, как нам нравилось.
        </p>
        <p className="hero-summary">
          тут сначала идут факты. потом неловкость. потом новая теория. и только
          после этого уже можно трогать разговоры про смысл, наблюдение,
          интерпретации и всё то, обо что люди обычно ломают себе лицо слишком
          рано.
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
              зайти сюда
            </Link>
          </article>
        ))}
      </section>

      <section className="overview-grid">
        <article className="overview-card">
          <p className="overview-state">формат</p>
          <h2>один экран — одна вещь, которую надо выдержать</h2>
          <p>
            мне не хотелось делать ещё одну длинную страницу, где мысль
            размазывается быстрее, чем успеваешь понять, что вообще произошло.
            поэтому здесь всё идёт короткими шагами.
          </p>
        </article>

        <article className="overview-card">
          <p className="overview-state">акценты</p>
          <h2>три удара, после которых классика уже не выглядит спокойной</h2>
          <p>
            фотоэффект, спектры и две щели здесь стоят не как музейные экспонаты,
            а как очень конкретные места, где старая картина мира начинает
            отвечать уже не так уверенно, как ей самой хотелось бы.
          </p>
        </article>

        <article className="overview-card">
          <p className="overview-state">дальше</p>
          <h2>второй урок начинается там, где многие обычно слишком рано уже вещают</h2>
          <p>
            интерпретации, наблюдение, буддизм и вся эта опасная красота идут
            только после базы. иначе вместо разговора получается очень
            вдохновлённая, но довольно пустая каша.
          </p>
        </article>
      </section>
    </div>
  );
}
