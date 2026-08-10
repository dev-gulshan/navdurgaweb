export default function SectionTitle({
  kicker,
  title,
  center = false,
}: {
  kicker: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}
