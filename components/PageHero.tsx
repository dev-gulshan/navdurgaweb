import Container from "./Container";
export default function PageHero({
  title,
  kicker = "NAVDURGA GROUP",
}: {
  title: string;
  kicker?: string;
}) {
  return (
    <section className="page-hero">
      <Container>
        <span className="eyebrow light">{kicker}</span>
        <h1>{title}</h1>
        <div className="hero-line" />
      </Container>
    </section>
  );
}
