interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = `${(current / total) * 100}%`;

  return (
    <section className="progress-panel" aria-label="Прогресс по уроку">
      <div className="progress-header">
        <span>Прогресс</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="progress-track" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
        <div className="progress-fill" style={{ width: progress }} />
      </div>
    </section>
  );
}
