import SwirlMark from "../components/SwirlMark";

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-24">
      <SwirlMark />

      <div className="mx-auto max-w-2xl text-center animate-fade-up">
        <p className="mb-5 inline-block rounded-full border border-gold/30 px-4 py-1 font-body text-xs uppercase tracking-widest text-gold-bright">
          Currently building &mdash; first release later this year
        </p>

        <h1 className="font-display text-5xl font-semibold leading-tight text-parchment sm:text-6xl">
          One builder.
          <br />
          <span className="italic text-gold-bright">No shortcuts.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg font-body text-lg text-mist">
          We&rsquo;re not chasing hype &mdash; we&rsquo;re building things people
          actually use, one product at a time.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 font-body text-sm">
          <a
            href="/about"
            className="rounded-md bg-gold px-6 py-3 font-medium text-ink transition-colors hover:bg-gold-bright"
          >
            About Konton Labs
          </a>
        </div>
      </div>
    </section>
  );
}
