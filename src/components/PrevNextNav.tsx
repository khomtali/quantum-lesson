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
        назад
      </button>

      {hasNext ? (
        <button className="nav-button" onClick={onNext} type="button">
          дальше
        </button>
      ) : nextLessonHref ? (
        <Link className="nav-button nav-button-link" to={nextLessonHref}>
          {nextLessonTitle ?? "к следующему уроку"}
        </Link>
      ) : (
        <button className="nav-button" disabled type="button">
          на этом пока всё
        </button>
      )}
    </section>
  );
}
