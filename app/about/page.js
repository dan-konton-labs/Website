export const metadata = {
  title: "About — Konton Labs",
};

const stages = [
  {
    number: "01",
    title: "Prove it",
    body:
      "Get the first product built, live, and actually used. Nothing else matters until this is true.",
    status: "In progress",
  },
  {
    number: "02",
    title: "Build the base",
    body:
      "Konton Labs becomes the parent company &mdash; the roof, not the product.",
    status: "Next",
  },
  {
    number: "03",
    title: "Grow the family",
    body:
      "New products and ventures join underneath, each held to the same bar as the first.",
    status: "Later",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <p className="mb-4 font-body text-xs uppercase tracking-widest text-gold-bright">
        About
      </p>

      <h1 className="font-display text-4xl font-semibold text-parchment sm:text-5xl">
        Konton Labs
      </h1>

      <p className="mt-8 font-body text-lg leading-relaxed text-mist">
        Konton Labs is one person, no investors, and an unreasonable number of
        late nights. We&rsquo;re not chasing hype &mdash; we&rsquo;re building
        things people actually use, one at a time. Right now that means a
        product in the works and a lot of coffee. Later it means Konton Labs
        becomes the roof over a few of these, once they&rsquo;ve earned it.
      </p>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-medium text-parchment">
          Where things stand
        </h2>

        <ol className="mt-8 space-y-8 border-l border-white/10 pl-8">
          {stages.map((stage) => (
            <li key={stage.number} className="relative">
              <span className="absolute -left-[2.65rem] top-1 font-display text-sm text-gold-dim">
                {stage.number}
              </span>
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-display text-xl font-medium text-parchment">
                  {stage.title}
                </h3>
                <span className="font-body text-xs uppercase tracking-widest text-teal-bright">
                  {stage.status}
                </span>
              </div>
              <p
                className="mt-2 font-body text-mist"
                dangerouslySetInnerHTML={{ __html: stage.body }}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
