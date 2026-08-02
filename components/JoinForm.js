"use client";

import { useState } from "react";

export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [wantsBeta, setWantsBeta] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          wantsBeta,
          company: e.target.elements.company.value, // honeypot
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Something went wrong — try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setError("Something went wrong — try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-gold/30 bg-white/5 px-6 py-5 text-center"
      >
        <p className="font-display text-lg text-gold-bright">
          You&rsquo;re on the list.
        </p>
        <p className="mt-2 font-body text-sm text-mist">
          {wantsBeta
            ? "I'll reach out when there's a build worth breaking."
            : "No spam — just an email when there's something real to show."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md text-left" noValidate>
      {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 font-body text-parchment placeholder:text-mist/60 focus:border-gold-bright focus:outline-none"
      />

      <label className="mt-4 flex items-start gap-3 font-body text-sm text-mist">
        <input
          type="checkbox"
          checked={wantsBeta}
          onChange={(e) => setWantsBeta(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 accent-gold"
        />
        <span>I&rsquo;d like to help test it before it&rsquo;s public.</span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-md bg-gold px-6 py-3 font-body font-medium text-ink transition-colors hover:bg-gold-bright disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Join"}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-3 text-center font-body text-sm text-red-300">
          {error}
        </p>
      )}
    </form>
  );
}
