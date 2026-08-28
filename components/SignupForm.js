export default function SignupForm() {
  return (
    <div className="mx-auto mt-10 max-w-md">
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/kontonlabs"
        method="post"
        className="flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="bd-email" className="sr-only">
          Email address
        </label>
        <input
          id="bd-email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full flex-1 rounded-md border border-white/10 bg-ink2 px-4 py-3 font-body text-sm text-parchment placeholder:text-mist/60 outline-none transition-colors focus:border-gold/50"
        />
        <input type="hidden" value="1" name="embed" />
        <button
          type="submit"
          className="whitespace-nowrap rounded-md bg-gold px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-bright"
        >
          Notify me
        </button>
      </form>
      <p className="mt-3 font-body text-xs text-mist/70">
        One email when we launch. No spam, no list-selling, unsubscribe any
        time.
      </p>
    </div>
  );
}
