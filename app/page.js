import Image from "next/image";
import SwirlMark from "../components/SwirlMark";
import SignupForm from "../components/SignupForm";

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-24">
      <SwirlMark />

      <div className="mx-auto max-w-2xl text-center animate-fade-up">
        <Image
          src="/emblem.png"
          alt="Konton Labs"
          width={980}
          height={1333}
          className="mx-auto mb-2 w-[280px] sm:w-[340px] h-auto"
          priority
        />

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

        <SignupForm />

        <div className="mt-6 font-body text-sm">
          <a
            href="/about"
            className="text-mist/80 underline decoration-mist/30 underline-offset-4 transition-colors hover:text-gold-bright hover:decoration-gold-bright/50"
          >
            or read more about Konton Labs
          </a>
        </div>
      </div>
    </section>
  );
}
