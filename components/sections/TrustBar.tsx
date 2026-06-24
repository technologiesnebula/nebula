const items = [
  "OpenAI",
  "Anthropic · Claude",
  "WhatsApp Business",
  "Google",
  "Stripe",
];

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-12 px-6">
      {items.map((name) => (
        <li
          key={name}
          className="whitespace-nowrap font-mono text-sm tracking-tight text-muted/70 transition-colors duration-300 hover:text-foreground"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export function TrustBar() {
  return (
    <section
      aria-label="Tecnologías que usamos"
      className="relative border-y border-border/60 py-10"
    >
      <p className="container-page mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted/60">
        Construido sobre la mejor tecnología del mundo
      </p>
      <div className="mask-fade-x relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center">
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
        <div
          aria-hidden="true"
          className="animate-marquee flex shrink-0 items-center"
        >
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
