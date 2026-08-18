interface WarningNoteProps {
  text: string;
}

export function WarningNote({ text }: WarningNoteProps) {
  return (
    <section className="message-card warning-card">
      <p className="message-label">вот здесь люди обычно уезжают не туда</p>
      <p>{text}</p>
    </section>
  );
}
