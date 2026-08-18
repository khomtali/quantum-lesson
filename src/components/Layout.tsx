import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Главная", end: true },
  { to: "/lesson/1", label: "Урок 1" },
  { to: "/lesson/2", label: "Урок 2" },
  { to: "/glossary", label: "Словарь" },
  { to: "/questions", label: "Вопросы" }
];

export function Layout() {
  return (
    <div className="shell">
      <div className="background-orbit background-orbit-left" />
      <div className="background-orbit background-orbit-right" />
      <header className="site-header">
        <NavLink className="brand" to="/">
          <span className="brand-mark" />
          <span>
            <strong>Квантовые уроки</strong>
            <small>для совместного путешествия по странному микромиру</small>
          </span>
        </NavLink>

        <nav className="top-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link-active" : ""}`
              }
              to={item.to}
              end={item.end}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page">
        <Outlet />
      </main>
    </div>
  );
}
