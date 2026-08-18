import type { LessonStep } from "../types";
import { Diagram } from "./Diagram";
import { HomeDemoCard } from "./HomeDemoCard";
import { KeyPoint } from "./KeyPoint";
import { WarningNote } from "./WarningNote";

interface LessonStepCardProps {
  step: LessonStep;
  isFinalStep?: boolean;
  takeaways?: string[];
}

export function LessonStepCard({
  step,
  isFinalStep = false,
  takeaways
}: LessonStepCardProps) {
  return (
    <article className="lesson-step-card">
      <div className="lesson-step-copy">
        <p className="eyebrow">{step.eyebrow}</p>
        <h2>{step.title}</h2>

        <div className="lesson-body">
          {step.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <KeyPoint text={step.keyPoint} />
        {step.warningNote ? <WarningNote text={step.warningNote} /> : null}
        {step.homeDemo ? <HomeDemoCard demo={step.homeDemo} /> : null}

        {isFinalStep && takeaways?.length ? (
          <section className="message-card takeaway-card">
            <p className="message-label">с чем отсюда стоит выйти</p>
            <ul className="takeaway-list">
              {takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <Diagram type={step.visualType} />
    </article>
  );
}
