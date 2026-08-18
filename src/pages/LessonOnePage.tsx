import { useState } from "react";
import { lessonOne } from "../content/lessonOne";
import { LessonHero } from "../components/LessonHero";
import { LessonStepCard } from "../components/LessonStepCard";
import { PrevNextNav } from "../components/PrevNextNav";
import { ProgressBar } from "../components/ProgressBar";

export function LessonOnePage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const step = lessonOne.steps[currentStepIndex];
  const totalSteps = lessonOne.steps.length;
  const isFinalStep = currentStepIndex === totalSteps - 1;

  const goNext = () =>
    setCurrentStepIndex((value) => Math.min(value + 1, totalSteps - 1));
  const goPrevious = () =>
    setCurrentStepIndex((value) => Math.max(value - 1, 0));

  return (
    <div className="page-stack">
      <LessonHero
        eyebrow="Урок 1"
        title={lessonOne.title}
        subtitle={lessonOne.subtitle}
        summary={lessonOne.summary}
      />

      <ProgressBar current={currentStepIndex + 1} total={totalSteps} />

      <LessonStepCard
        step={step}
        isFinalStep={isFinalStep}
        takeaways={isFinalStep ? lessonOne.takeaways : undefined}
      />

      <PrevNextNav
        hasPrevious={currentStepIndex > 0}
        hasNext={!isFinalStep}
        onPrevious={goPrevious}
        onNext={goNext}
        nextLessonHref={lessonOne.nextLesson?.href}
        nextLessonTitle={lessonOne.nextLesson?.title}
      />
    </div>
  );
}
