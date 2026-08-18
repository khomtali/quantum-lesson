import { Link } from "react-router-dom";

interface PrevNextNavProps {
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
  nextLessonHref?: string;
  nextLessonTitle?: string;
}

export function PrevNextNav({
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
  nextLessonHref,
  nextLessonTitle
}: PrevNextNavProps) {
  return (
    <section className="step-navigation">
      <button
        className="nav-button nav-button-secondary"
        disabled={!hasPrevious}
        onClick={onPrevious}
        type="button"
      >
        Назад
      </button>

      {hasNext ? (
        <button className="nav-button" onClick={onNext} type="button">
          Дальше
        </button>
      ) : nextLessonHref ? (
        <Link className="nav-button nav-button-link" to={nextLessonHref}>
          {nextLessonTitle ?? "К следующему уроку"}
        </Link>
      ) : (
        <button className="nav-button" disabled type="button">
          Маршрут завершён
        </button>
      )}
    </section>
  );
}
