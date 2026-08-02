import JoinForm from "../../components/JoinForm";

export const metadata = {
  title: "Join — Konton Labs",
  description:
    "Get an email when there's something real to show, or put your hand up to beta test before it's public.",
};

export default function Join() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-28">
      <p className="mb-4 font-body text-xs uppercase tracking-widest text-gold-bright">
        Join
      </p>

      <h1 className="font-display text-4xl font-semibold text-parchment sm:text-5xl">
        Get updates.{" "}
        <span className="italic text-gold-bright">Maybe break it first.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-lg font-body text-lg text-mist">
        No growth hacking, no drip campaigns &mdash; just an email when
        there&rsquo;s something real to show. Tick the box below if
        you&rsquo;d rather get it early and help find what&rsquo;s broken.
      </p>

      <div className="mt-10">
        <JoinForm />
      </div>
    </div>
  );
}
