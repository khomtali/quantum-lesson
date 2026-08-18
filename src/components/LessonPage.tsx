import { useState } from "react";
import type { Lesson } from "../types";
import { LessonHero } from "./LessonHero";
import { LessonStepCard } from "./LessonStepCard";
import { PrevNextNav } from "./PrevNextNav";
import { ProgressBar } from "./ProgressBar";

interface LessonPageProps {
  lesson: Lesson;
  eyebrow: string;
}

export function LessonPage({ lesson, eyebrow }: LessonPageProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const step = lesson.steps[currentStepIndex];
  const totalSteps = lesson.steps.length;
  const isFinalStep = currentStepIndex === totalSteps - 1;

  const goNext = () =>
    setCurrentStepIndex((value) => Math.min(value + 1, totalSteps - 1));
  const goPrevious = () =>
    setCurrentStepIndex((value) => Math.max(value - 1, 0));

  return (
    <div className="page-stack">
      <LessonHero
        eyebrow={eyebrow}
        title={lesson.title}
        subtitle={lesson.subtitle}
        summary={lesson.summary}
      />

      <ProgressBar current={currentStepIndex + 1} total={totalSteps} />

      <LessonStepCard
        step={step}
        isFinalStep={isFinalStep}
        takeaways={isFinalStep ? lesson.takeaways : undefined}
      />

      <PrevNextNav
        hasPrevious={currentStepIndex > 0}
        hasNext={!isFinalStep}
        onPrevious={goPrevious}
        onNext={goNext}
        nextLessonHref={lesson.nextLesson?.href}
        nextLessonTitle={lesson.nextLesson?.title}
      />
    </div>
  );
}
