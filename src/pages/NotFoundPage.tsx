import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="hero-panel compact-panel">
      <p className="eyebrow">404</p>
      <h1>Эта траектория пока не существует</h1>
      <p className="hero-subtitle">
        Похоже, адрес ведёт мимо маршрута. Можно спокойно вернуться на главную.
      </p>
      <Link className="nav-button nav-button-link" to="/">
        На главную
      </Link>
    </section>
  );
}
