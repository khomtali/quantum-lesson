interface WarningNoteProps {
  text: string;
}

export function WarningNote({ text }: WarningNoteProps) {
  return (
    <section className="message-card warning-card">
      <p className="message-label">Не путать</p>
      <p>{text}</p>
    </section>
  );
}
