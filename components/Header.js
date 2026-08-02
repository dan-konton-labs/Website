import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Konton Labs home">
          <Image
            src="/logo.png"
            alt="Konton Labs"
            width={160}
            height={80}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-8 font-body text-sm">
          <Link
            href="/"
            className="text-parchment/80 transition-colors hover:text-gold-bright"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-parchment/80 transition-colors hover:text-gold-bright"
          >
            About
          </Link>
          <Link
            href="/join"
            className="text-parchment/80 transition-colors hover:text-gold-bright"
          >
            Join
          </Link>
        </nav>
      </div>
    </header>
  );
}
