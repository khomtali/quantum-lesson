import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "главная", end: true },
  { to: "/lesson/1", label: "урок 1" },
  { to: "/lesson/2", label: "урок 2" },
  { to: "/glossary", label: "словарь" },
  { to: "/questions", label: "вопросы" }
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
            <strong>квантовые уроки</strong>
            <small>туда, где реальность перестаёт быть такой уж покладистой</small>
          </span>
        </NavLink>

        <nav className="top-nav" aria-label="основная навигация">
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
