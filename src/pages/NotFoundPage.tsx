import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="hero-panel compact-panel">
      <p className="eyebrow">404</p>
      <h1>сюда маршрут пока не проложен</h1>
      <p className="hero-subtitle">
        кажется, ты свернула куда-то мимо. бывает. можно просто вернуться на
        главную и пойти дальше без лишней драмы.
      </p>
      <Link className="nav-button nav-button-link" to="/">
        на главную
      </Link>
    </section>
  );
}
